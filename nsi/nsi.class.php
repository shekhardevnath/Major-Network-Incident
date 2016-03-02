<?php
class nsiApp extends DefaultApplication
{
   /**
   * Constructor
   * @return true
   */
   
   function run()
   {	  
   	 $cmd = getUserField('cmd');

      switch ($cmd)
      { 
      	case 'load_search_list': $screen = $this->loadSearchList();   break;
      	case 'filter_list'     : $screen = $this->filterList();       break;
		case 'save_and_sms'    : $screen = $this->saveAndSMS();       break;
		case 'search'          : $screen = $this->searchHistory();    break;
		case 'popup'           : $screen = $this->showHistoryPopup(); break;
        default                : $screen = $this->showMainPage(); 
      }
      
      if($cmd != 'load_search_list' && $cmd != 'filter_list')
        echo $this->displayScreen($screen);      
        
      return true;
   }

   function showMainPage()
   { 
      $noticeID = getUserField('notice_id');
   	
      $data['group_list']       = getEnumFieldValues(GP_NOTICE_TBL,     'notice_group');
   	  $data['notice_type_list'] = getEnumFieldValues(GP_NOTICE_LOG_TBL, 'notice_type');
   	  $data['visible']          = getEnumFieldValues(GP_NOTICE_TBL,     'visible_to_all'); 	  
   	  $data['fault_type_list']  = getEnumFieldValues(GP_NOTICE_TBL,     'fault_type');
   	  $data['outage_list']      = getEnumFieldValues(GP_NOTICE_TBL,     'outage');   	  
   	  $data['search_list']      = getSearchList('group');
	  $data['ft_date']          = date("Y-m-d");
	  $data['rt_date']          = date("Y-m-d");
   	  
	  ////////Start codes added by Amjad//////////////////////
	  $info['table'] = SUB_GROUP_TBL;
	  $info['fields'] = array('name');
	  $info['where']= 'name like "RO%" and name not like "ROD_C%"';
	  $result=select($info);
	  
	  $data['subcenter_name'] = array();
   	  $result = select($info);
	  foreach($result as $item){ 
	  	  array_push($data['subcenter_name'],$item->name);
	  }
	  	
	  unset ($info);
	  unset ($result);
	  ////////////////End codes added by Amjad////////////////  
	  
	     	  
   	  $info['table']  = GP_NOTICE_TBL . ' n, ' . GP_NOTICE_LOG_TBL . ' ng';
   	  $info['debug']  = false;
   	  $info['where']  = $noticeID ? "n.notice_id = ng.notice_id and n.notice_id = $noticeID" : "n.notice_id = ng.notice_id";
   	  $info['where'] .= " order by n.notice_id desc, ng.notice_log_id desc limit 0,150";
   	     	  
   	  $result = select($info);
   	  
   	  if($result && $noticeID)
   	  {
   	  	$data['notice_id']      = $noticeID;
   	  	$data['group_name']     = $result[0]->notice_group;
   	  	$data['notice_type']    = $result[0]->notice_type;
   	  	$data['visibility']     = $result[0]->visible_to_all;
   	  	$data['fault_type']     = $result[0]->fault_type;
   	  	$data['outage']         = $result[0]->outage;
   	  	$data['general_title']  = $result[0]->general_title;
   	  	$data['text_ft']        = $result[0]->ft_st;
		$data['ft_date']        = $result[0]->ft_date; 
   	 	$data['text_et']        = $result[0]->rt_et;  
		$data['rt_date']        = $result[0]->rt_date;
   	 	$data['title']          = $result[0]->title;  
   	 	$data['reason']         = $result[0]->reason; 
   	 	$data['impact']         = $result[0]->impact; 
   	 	$data['status']         = $result[0]->status; 
   	 	$data['sms']            = explode('@#*', $result[0]->message);
   	 	$data['recipient_list'] = explode(';' , $result[0]->recipient);
   	  }   	  
   	  
   	  //Keep latest data only
   	  $curID     = $result[0]->notice_id;
   	  $arraySize = count($result);
   	  
  		for($incr = 0; $incr <= $arraySize; $incr++)
  		{ 
  			if($incr > 0 && $result[$incr]->notice_id == $curID) 
  			  unset($result[$incr]);
  			else
  			  $curID = $result[$incr]->notice_id;  			
  		}
   	  
   	  $data['all_notices'] = $result;
	  $data['date_from']   = date("Y-m-d");
	  $data['date_to']     = date("Y-m-d");
    	  
      return createPage(NSI_TEMPLATE, $data);
   }
   
   function searchHistory()
   {
     $dateFrom        = getUserField('date_from') ? getUserField('date_from') : date("Y-m-d");
	 $dateTo          = getUserField('date_to')   ? getUserField('date_to')   : date("Y-m-d");
	 $searchGroupName = getUserField('search_group_name');
	 $searchFaultType = getUserField('search_fault_type');
	 $searchOutage    = getUserField('search_outage');
	 $searchVisible   = getUserField('search_visible');
	 
	 $data['group_list']       = getEnumFieldValues(GP_NOTICE_TBL,     'notice_group');
   	 $data['notice_type_list'] = getEnumFieldValues(GP_NOTICE_LOG_TBL, 'notice_type');
   	 $data['visible']          = getEnumFieldValues(GP_NOTICE_TBL,     'visible_to_all'); 	  
   	 $data['fault_type_list']  = getEnumFieldValues(GP_NOTICE_TBL,     'fault_type');
   	 $data['outage_list']      = getEnumFieldValues(GP_NOTICE_TBL,     'outage');   	  
   	 $data['search_list']      = getSearchList('group');
	 
	 //set searching criteria
	 $whereClouse = "";
	 
	 if($searchGroupName)
	   $whereClouse .= " and n.notice_group='$searchGroupName'";
	 if($searchFaultType)
	   $whereClouse .= " and n.fault_type='$searchFaultType'";
	 if($searchOutage)
	   $whereClouse .= " and n.outage='$searchOutage'";
	 if($searchVisible)
	   $whereClouse .= " and n.visible_to_all='$searchVisible'";  
	   
	 $whereClouse .= " and ng.ft_date between '$dateFrom' and '$dateTo'";    
	 
	 $info['table']  = GP_NOTICE_TBL . ' n, ' . GP_NOTICE_LOG_TBL . ' ng';
   	 $info['debug']  = false;
   	 $info['where']  = "n.notice_id = ng.notice_id " . $whereClouse . " order by n.notice_id desc, ng.notice_log_id desc";
	 
	 $result = select($info);
	 
	 //Keep latest data only
   	  $curID     = $result[0]->notice_id;
   	  $arraySize = count($result);
   	  
  	  for($incr = 0; $incr <= $arraySize; $incr++)
  	  { 
  		if($incr > 0 && $result[$incr]->notice_id == $curID) 
  		  unset($result[$incr]);
  		else
  		  $curID = $result[$incr]->notice_id;  			
  	  }
	 
	 $data['all_notices']       = $result;
	 $data['date_from']         = $dateFrom;
	 $data['date_to']           = $dateTo;
	 $data['search_group_name'] = $searchGroupName;
	 $data['search_fault_type'] = $searchFaultType;
	 $data['search_outage']     = $searchOutage;
	 $data['search_visible']    = $searchVisible;
	 $data['ft_date']           = date("Y-m-d");
     $data['rt_date']           = date("Y-m-d");

     return createPage(NSI_TEMPLATE, $data);
   }
   
   function loadSearchList()
   {
   	 $type       = getUserField('type');   	 
   	 $dataString = implode(getSearchList($type), '*$#@');
   	
   	 echo $dataString; 
   }
   
   function filterList()
   { 
   	 $type       = getUserField('type');
   	 $cond       = getUserField('cond');
   	 $dataString = implode(getSearchList($type, $cond), '*$#@');
   	
   	 echo $dataString;   	 
   }
   
   function saveAndSMS()
   {
   	 $smsSend         = getUserField('send_sms');
   	 $noticeID        = getUserField('notice_id');
	 
   	 //send SMS   	 
   	 if($smsSend)
   	 {	     
   	 	 $recipientList    = getUserField('recipient_list');
		 $smsContent       = getUserField('sms');
		 $smsContent1      = getUserField('sms1');
		 $smsContent2      = getUserField('sms2');
   	 	 $where            = 'group_name = "' . implode('" or group_name = "', $recipientList) . '"';
   	 	 
   	 	 $info['table']    = GP_SMS_GROUP_TBL;
   	 	 $info['debug']    = false;
   	 	 $info['where']    = $where;
   	 	 $info['fields']   = array('distinct(phone_no) as phone_no');
   	 	 
   	 	 $result = select($info);
   	 	 
   	 	 //add single number to recipient list
   	 	 foreach ($recipientList as $value)
   	 	 {
   	 	 	 if(strstr($value, "||"))
   	 	 	 { 
   	 	 	 	 $found = false;
   	 	 	 	 
   	 	 	 	 if($result)
   	 	 	 	   foreach($result as $mobile)
   	 	 	 	   {
   	 	 	 	   	 if($mobile->phone_no == "+88" . substr($value, -11))
   	 	 	 	   	 {
   	 	 	 	   	 	 $found = true;   	 	 	 	 	   
   	 	 	 	   	 }  
   	 	 	 	   }
   	 	 	 	 
   	 	 	 	 if(!$found)
   	 	 	 	   $result[]->phone_no = "+88" . substr($value, -11);
   	 	 	 }
   	 	 }
		 
		 //send SMS
		 if($smsContent)
		 {
		   $smpp = new SMPPClass();		 
           $smpp->SetSender(SMS_FROM);
     	   $smpp->Start(SMPP_HOST, SMPP_PORT, SYSTEM_ID, PASSWORD, "");		   	    
			
		   //perform necessary character conversion
		   $chr         = chr(hexdec('0x11'));
		   $smsContent  = str_replace("_", $chr, $smsContent);		   
		   $smsContent1 = str_replace("_", $chr, $smsContent1);
		   $smsContent2 = str_replace("_", $chr, $smsContent2);
		   $smsContent  = stripslashes($smsContent);
		   $smsContent1 = stripslashes($smsContent1);
		   $smsContent2 = stripslashes($smsContent2);
		   
		   //send SMS part 1			  
			foreach($result as $phoneNo)
			{			  
			  $smpp->Send($phoneNo->phone_no, $smsContent);					  
			}
			
			//send SMS part 2
			  if($smsContent1)
			  {
			    sleep(2);				
				foreach($result as $phoneNo)
			    {
     		      $smpp->Send($phoneNo->phone_no, $smsContent1);
				}
			  }
			 //send SMS part 3			
			  if($smsContent2)
			  {
			    sleep(2);				
				foreach($result as $phoneNo)
			    {
			      $smpp->Send($phoneNo->phone_no, $smsContent2);
				}
			  }  

		   $smpp->End();
		 }
		 
		 //send notification mail
		 if(getUserField('notification'))	 
	       $mailSubjectPart = " (" . getUserField('notification') . ", " . getUserField('fault_type') .")";
		   
		 sendNotificationMail(getUserField('notice_type') . ': ' . getUserField('general_title') . $mailSubjectPart, 
		                      $smsContent, $smsContent1, $smsContent2, getUserField('recipient_list'));
		 
		 //add activity
		 addActivity('Fault Notification', 'Fault Notification'); 
   	 }
   	 
   	 //save information
   	 $data['notice_group']   = getUserField('group_name');
   	 $data['visible_to_all'] = getUserField('visible');
   	 $data['fault_type']     = getUserField('fault_type');
   	 $data['outage']         = getUserField('outage');
   	 $data['general_title']  = getUserField('general_title');
   	 
   	 $info['table'] = GP_NOTICE_TBL;
   	 $info['debug'] = false;
   	 $info['data']  = $data;
   	 
   	 if(!$noticeID)
	 {
   	   $result = insert($info);
	 } 
   	 else
   	 {
   	 	 $info['where'] = "notice_id = $noticeID";
   	 	 
   	 	 $result = update($info);
   	 }  
   	 
   	 unset($data);
   	 unset($info);
   	 
   	 $data['notice_id']   = $noticeID ? $noticeID : $result['newid'];
   	 $data['notice_type'] = getUserField('notice_type');
         $data['fault_type']  = getUserField('fault_type');
   	 $data['ft_st']       = getUserField('text_ft');
	 $data['ft_date']     = getUserField('ft_date');
   	 $data['rt_et']       = getUserField('text_et');
	 $data['rt_date']     = getUserField('rt_date');
   	 $data['title']       = getUserField('title');
   	 $data['reason']      = getUserField('reason');
   	 $data['impact']      = getUserField('impact');
   	 $data['status']      = getUserField('status');
         $data['subcenter']   = getuserField('sub_name');
   	 $data['message']     = implode('@#*', array(getUserField('sms'), getUserField('sms1'), getUserField('sms2')));
   	 $data['recipient']   = implode(';', getUserField('recipient_list')); 
   	 $data['send_by']     = $_SESSION['username'];
   	 $data['send_time']   = date("Y-m-d H:i:s");
   	 $data['sms_sent']    = $smsSend ? "Yes" : "No";
   	 
	 //start call function for special action for category summer by raihan
	 editSummerData($data);
	 //end call function for special action for category summer by raihan
	 
	 //start codes added by amjad
	 if($data['fault_type'] == 'Site Halt')
	 {	 
   	   saveinHaltAct($data);
	 }
	 //end codes added by amjad
	 
   	 $info['table'] = GP_NOTICE_LOG_TBL;
   	 $info['debug'] = false;
   	 $info['data']  = $data;
   	 
   	 $result = insert($info);
   	 
     header('location: ' . NSI_URL);
     exit;   	 
   } 
   
   function showHistoryPopup()
   { 
     $noticeID = getUserField('notice_id');
     
     $info['table'] = GP_NOTICE_TBL . " n, " . GP_NOTICE_LOG_TBL . " nl";
	 $info['debug'] = false;
	 $info['where'] = "n.notice_id=nl.notice_id and n.notice_id=$noticeID order by nl.notice_log_id desc";
	 
	 $data['history']   = select($info);
	 $data['notice_id'] = $noticeID;
	 
	 for($i=0; $i<count($data['history']); $i++)
	 {
	   $data['history'][$i]->recipient = implode(', ', explode(';', $data['history'][$i]->recipient));	   
	 }
	 
     echo createPage(INCIDENT_HISTORY_TEMPLATE, $data);
	 exit;
   }  
}