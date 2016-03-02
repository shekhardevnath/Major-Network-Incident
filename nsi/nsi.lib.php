<?php
  function getSearchList($type=null, $cond=null)
  {
  	$list = array();
  	
  	if($type)
  	{
  		if($type == "employee")
  		{
  			$info['table']  = GP_EMPLOYEE_DB;
  			$info['fields'] = array("concat(emp_name,'||',right(phone_no,11)) as name");
  			$info['debug']  = false;
  			$info['where']  = $cond ? "emp_name like '%$cond%' or phone_no like '%$cond%' order by emp_name limit 0, 100" : "1 order by emp_name limit 0, 100";
  			
  			$result = select($info);
  		}
  		else if($type == "group")
  		{
  			$info['table']  = GP_SMS_GROUP;
  			$info['fields'] = array('distinct(group_name) as name');
  			$info['debug']  = false;
  			$info['where']  = $cond ? "group_name like '%$cond%' order by group_name limit 0, 100" : "1 order by group_name limit 0, 100";
  			
  			$result = select($info);
  		}
  	}
  	
  	if($result)
   	 {   	 
   	   foreach($result as $row)
   	   {
   	   	 $list[] = $row->name;   	 	 
       }
     }
     
  	return $list;
  }
  
  function increaseDate($date)
  {

  	$dateParts   = explode('-', $date);  		
  	return date("Y-m-d", mktime(0, 0, 0, $dateParts[1], $dateParts[2]+1, $dateParts[0]));
  }
  
  function addActivity($activityType, $message)
  {
    $data['group_id']      = $_SESSION['group_id'];
	$data['sub_group_id']  = $_SESSION['sub_group_id'];
	$data['activity_type'] = $activityType;
	$data['creator']       = $_SESSION['username'];
	$data['create_date']   = date("Y-m-d H:i:s");
	$data['holding_by']    = $_SESSION['username'];
	$data['status']        = 'Close';
    
	$info['table'] = ACTIVITY_MANAGER_TBL;
	$info['debug'] = false;
	$info['data']  = $data;
	
	$result = insert($info);
	
	unset($data);
	unset($info);
	
	$data['activity_id']   = $result['newid'];
	$data['assigned_by']   = $_SESSION['username'];
	$data['assigned_to']   = '';
	$data['assigned_date'] = date("Y-m-d H:i:s");
	$data['dead_line']     = date("Y-m-d H:i:s");
	$data['comment']       = $message;
	
	$info['table'] = ACTIVITY_LOG_TBL;
	$info['debug'] = false;
	$info['data']  = $data;
	
	$result = insert($info);	
  }
  
  function sendNotificationMail($subject, $smsPart1, $smsPart2, $smsPart3, $recipientList)
  {
    $emailBody = $smsPart1;
	
	//combine sms parts
	if($smsPart2)
	  $emailBody .= "\n\n" . $smsPart2;
	if($smsPart3)
	  $emailBody .= "\n\n" . $smsPart3;  
	
	$emailBody .= "\n\nSMS To: " . implode('+', $recipientList); 
	
	//prepare data for email
	$from[$_SESSION['email']]            = $_SESSION['name'];
	$to['bo@grameenphone.com']           = 'BO';
	$to['Surveillance@grameenphone.com'] = 'Surveillance';
	
	//send mail
	$result = sendMail($from, $to, $cc, $bcc, $subject, $emailBody, $attach);  	
  }
  
  function sendMail( $from, $to, $cc, $bcc, $sub, $body, $attach)
  {
    $phpMailer   = new phpMailer();
    if(count($from))
      foreach($from as $email => $fullname)
        $phpMailer->set_from($email , $fullname);
  
    if(count($to))
      foreach($to as $email => $fullname)
        $phpMailer->add_to($email , $fullname);
  
    if(count($cc))
      foreach($cc as $email => $fullname)
        $phpMailer->add_cc($email , $fullname);
  
    if(count($bcc))
      foreach($bcc as $email => $fullname)
        $phpMailer->add_bcc($email , $fullname);
  
    $phpMailer->set_subject($sub);
    $phpMailer->set_html(nl2br($body));
  
    if(count($attach))
      foreach($attach as $attachment)      
        $phpMailer->add_attachment($attachment, basename($attachment),'');
  
    $phpMailer->set_smtp_host("10.10.20.194");
  
    if ($phpMailer->send())  
      return true;  
    else
      return false;
  }
  
  //start function by Raihan Pervez
  function editSummerData(&$data){
   
   	 if(getUserField('fault_type')=="Summer"){
	 	
		$messageArray = explode('Subcenter ',$data['message']);
		
		$messageArray1 = explode('0)',$messageArray[0]);
		
   	 	$data['status']      = $messageArray1[1];
		$data['impact']      = $messageArray1[1];
		
		if(getUserField('notice_type')=='Notice'){
			$currentTime = date("H:i");
			
			$data['ft_st']= $currentTime;
		}
		
		$isFound = strpos($data['message'],'normal');
		if($isFound!==false){
			$currentTime = date("H:i");
			$data['rt_et']= $currentTime;
			$messageArray2 = explode('normal.',$messageArray1[1]);
			$data['impact']      = $messageArray2[1];
			$data['status']      = $messageArray2[0].' normal.';
			
		}
		
	 }
 }
 //end function by Raihan Pervez
 
 //function to save halt activity data  by Amjad ///////////////
  function saveinHaltAct($data)   
   {   
   $halt['start_time']=$data['ft_date']." ".$data['ft_st'].":00";
   
   if (strpos($data['rt_et'], ':')==true)
     $halt['eht']=$data['rt_date']." ".$data['rt_et'].":00";  
   else 
   {  
     $halt['eht_text']=$data['rt_et'];
     $halt['eht']='0000-00-00 00:00:00';
   }

   $halt['site_cell_name']=$data['title'];
   $site= $halt['site_cell_name'];
   $halt['region_subcenter']=$data['subcenter'];
   
   if (strlen($data['title']) >6){
     $halt['site_cell']="Cell";   
   }
   else{ 
     $halt['site_cell']="Site";   
   }
   
   $halt['reason']=$data['reason'];
   
     $info['table'] = 'halt_activity.halt_event';
   	 $info['debug'] = false;
   	 $info['where'] = "site_cell_name='$site' and status='Halted'";
	 
	 $result= select($info);
	 unset($info);
	if(isset($result) && $data['notice_type']== 'Notice'){
	//$halt['halted_by']=$data['send_by'];
  
   $halt['status']="Halted";
  
   $halt['halt_notice']=$data['message'];
   
     unset($result);
   
     $info['table'] = 'halt_activity.halt_event';
   	 $info['debug'] = false;
	 $info['where'] = "site_cell_name='$site' and status='Halted'";
   	 $info['data']  = $halt;
   	 
   	$result1 = update($info);
	 unset($info);
     unset($result);
	}
   
   else
   { 
   if($data['notice_type']== 'Notice'){
   
   $halt['halted_by']=$data['send_by'];
  
   $halt['status']="Halted";
  
   $halt['halt_notice']=$data['message'];
   
     
   
     $info['table'] = 'halt_activity.halt_event';
   	 $info['debug'] = false;
   	 $info['data']  = $halt;
   	 
   	$result = insert($info);
	 unset($info);
     unset($result);
   
   }
   
   else {
   
   
   $halt['activated_by']=$data['send_by'];
   $halt['status']="Activated";
   $halt['status_text']=$data['status'];
   $halt['halt_notice_update']=$data['message'];
   
     
     $info['table'] = 'halt_activity.halt_event';
   	 $info['debug'] = false;
   	 $info['where'] = "site_cell_name='$site' and status='Halted'";
	 $info['data']  = $halt;
	 
   	 
   	 $result = update($info);
     unset($info);
     unset($result);
   }
   }
   } 
   ////////////////end by Amjad///////////////////

?>