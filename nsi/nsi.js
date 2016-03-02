//some default recipients
//Transport
var adm        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RTS_OTS", "TP_OPT_INCB");
var fiber      = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RTS", "TP_OPT_INCB", "MPBN", "admin_security", "Mohammad Jahangir Alam||01711505690");
var mw         = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RTS_MTS", "TP_OPT_INCB");
var nms        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "OSS_NMS");
var mpbn       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RTS_OTS", "RTS_IPTS");
var dwdm       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RTS_OTS");

//Radio
//var sitehalt   = new Array("BO", "Surveillance", "CTC",);

var summer     = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "PS", "ROB", "ROBs", "ROC", "ROD", "ROK", "ROMy", "ROS");

//Start some variables by Amjad //

var ROD_NORTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_DH_NORTH");
var ROD_SOUTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_DH_SOUTH");
var ROD_WEST   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_DH_WEST");
var ROD_LALBAG   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_LALBAG");
var ROD_JATRABARI   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_JATRABARI");
var ROD_IBS_MC   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Helal Uddin||01711500798","ROD_IBS_MC");
var ROK_KH_WEST   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Mahiuddin Md. Khan||01711505751","ROK_KHULNA(WEST)");
var ROK_KH_EAST   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Mahiuddin Md. Khan||01711505751","ROK_KHULNA(EAST)");
var ROK_JESSORE   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Mahiuddin Md. Khan||01711505751","ROK_JESSORE");
var ROK_KUSTIA   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Mahiuddin Md. Khan||01711505751","ROK_KUSTIA");
var ROS_SY_WEST   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Firoz Md. Uddin||01711505366","ROS_SYLHET(WEST)");
var ROS_SY_EAST   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Firoz Md. Uddin||01711505366","ROS_SYLHET(EAST)");
var ROS_BHAIRAB   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Firoz Md. Uddin||01711505366","ROS_Bhairab");
var ROS_MOULOVIBAZAR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Firoz Md. Uddin||01711505366","ROS_MOULOVIBAZAR");
var ROMy_MYMENSINGH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Tanvir Md. Hossain Nadim||01711505570","ROMy_Mymensingh SC");
var ROMY_GAZIPUR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Tanvir Md. Hossain Nadim||01711505570","ROMy_Gazipur SC");
var ROMy_TANGAIL   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Tanvir Md. Hossain Nadim||01711505570","ROMy_Tangail SC");
var ROMy_SAVAR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Tanvir Md. Hossain Nadim||01711505570","ROMy_Savar SC");
var ROB_BO_NORTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Syed Ziaul Islam||01711080662","ROB_BOGRA(NORTH+SOUTH)");
var ROB_BO_SOUTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Syed Ziaul Islam||01711080662","ROB_BOGRA(NORTH+SOUTH)");
var ROB_RAJSHAHI   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Syed Ziaul Islam||01711080662","ROB_RAJSHAHI");
var ROB_RANGPUR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Syed Ziaul Islam||01711080662","ROB_Rangpur");
var ROB_THAKURGAON   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Syed Ziaul Islam||01711080662","ROB_THAKURGAON");
var ROC_CG_NORTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Zakir Md. Hasan||01711505647","ROC_ CG_NORTH");
var ROC_CG_SOUTH   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Zakir Md. Hasan||01711505647","ROC_ CG_SOUTH");
var ROC_COMILLA   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Zakir Md. Hasan||01711505647","ROC_Comilla");
var ROC_CHOWMUHONI   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Zakir Md. Hasan||01711505647","ROC_Chowmohoni");
var ROC_COXBAZAR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Zakir Md. Hasan||01711505647","ROC_COXSBAZAR");
var ROBS_BARISAL   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Nandan Kumar Shaha||01711506156","ROBs_BARISAL");
var ROBS_FARIDPUR   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Nandan Kumar Shaha||01711506156","ROBs_FARIDPUR");
var ROBS_PATUAKHALI   = new Array("BO", "Surveillance", "CTC","A.J.M. Afzal Hossain||01711505632","Monowar Sikder||0171180150","Raihan Md. Abdur||01711505179","Nandan Kumar Shaha||01711506156","ROBs_PATUAKHALI");
//End some variables by Amjad

//CSN
var IN         = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP_IN", "CPS", "GPIT-SOC");
var hotline    = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP_CSS", "IT_HOTLINE", "GPIT-SOC");
var edge       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP_PSS", "IT_EDGE", "GPIT-SOC");
var mms        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP_PSS", "RSP_VASO");
var power      = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "PS");
var cps        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO", "GPIT-SOC", "CPS", "ITCRM_CS", "CSP_IN", "CSP_PSS", "CSP_CSS");
var irlink     = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO", "GPIT-SOC", "CSP", "IT_EDGE", "RTS_IPTS", "Roaming Problem recipient");
var gpit       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "GPIT-SOC", "TM", "TAMT", "TPMC","GPIT-Tech-MT", "Commercial_Div_SMS_Recipient", "PFCM_Mgt");
var grxlink    = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO", "GPIT-SOC", "CSP", "IT_EDGE", "RTS_IPTS", "Roaming Problem recipient");
var calling    = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "GPIT-SOC", "CSP", "RTS_IPTS");
var ers        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP_IN", "RSP_RFSO", "RSP_VASO");
var sms        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP", "RSP_RFSO", "RSP_VASO");
var mobicash   = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_RFSO", "Financial Service", "Commercial_Div_SMS_Recipient", "TM", "TAMT", "TPMC");
var vas        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO");
var prbt       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO", "CSP_CSS");
var blackberry = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_VASO", "GPIT-SOC", "CSP_CSS", "CSP_PSS", "IT_EDGE", "RTS_IPTS", "Roaming Problem recipient");
var core       = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP", "GPIT-SOC");
var pscore     = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP", "GPIT-SOC");
var bss        = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "CSP", "GPIT-SOC");
var healthline = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "RSP_RFSO", "Health_Line");
var intrcon    = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "Regulatory & Interconnection", "CSP_CSS");
var necon      = new Array("Combined(SOC_TRMC_NQP_ETOMC)", "TOMC", "OSS_NMS", "GSM_OSS", "OSS_Tools");

function loadSearchList(obj)
{
	var url  = '/nm_tx/nsi/nsi.php';	
	var pars = 'cmd=load_search_list&type=' + obj.value;
	
	var myAjax = new Ajax.Request(
		url, 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: getOutput
		});		
} 

function filterList(obj)
{
	var url  = '/nm_tx/nsi/nsi.php';	
	var pars = 'cmd=filter_list&cond=' + obj.value + '&type=' + document.getElementById('option').value;
	
	var myAjax = new Ajax.Request(
		url, 
		{
			method: 'get', 
			parameters: pars, 
			onComplete: getOutput
		});
}
  
function getOutput(returnResponse)
{
	rspText   = returnResponse.responseText;
	dataArray = rspText.split('*$#@');
	srcList   = document.getElementById('searching_list');	
	
	//remove all
  for(i=srcList.options.length-1; i >= 0; i--)
  {   	
    srcList.removeChild(srcList.options[i]);    
  }
  
  //add new
  if(dataArray)
    for(i=0; i<dataArray.length; i++)
    {
    	newOpt = new Option(dataArray[i], dataArray[i]);
			srcList.options[i] = newOpt;
    }  	
}

function addSelectedOptions()
{
	srcList  = document.getElementById('searching_list');
	destList = document.getElementById('recipient_list');
	
	noOfOptions = srcList.length;
	for(var i=0; i<noOfOptions; i++)
	{
		if(srcList.options[i].selected)
		{
			newOpt = new Option(srcList.options[i].text, srcList.options[i].value);
			destList.options[destList.length] = newOpt;
		}
	}
	
	return false;	
}

function removeSelectedOptions()
{
	destList = document.getElementById('recipient_list');
	noOfOptions = destList.options.length;
	
  for(var i=(noOfOptions-1); i >= 0; i--)
  {   	
    if(destList.options[i].selected)
    {    	
      destList.removeChild(destList.options[i]);
    }
  }
  
  return false;
}

function addDefaultRecipients(FaultType)
{
	defaultRecipients = new Array();
	recipientList     = document.getElementById('recipient_list');
	noticeID          = document.getElementById("notice_id").value;
	
	if(FaultType.value == "ADM")
	  defaultRecipients = adm;
	else if(FaultType.value == "Fiber")
	  defaultRecipients = fiber;
	else if(FaultType.value == "Microwave")
	  defaultRecipients = mw;
    else if(FaultType.value == "NMS")
	  defaultRecipients = nms;
	else if(FaultType.value == "MPBN")
	  defaultRecipients = mpbn;
	else if(FaultType.value == "DWDM")
	  defaultRecipients = dwdm;
	else if(FaultType.value == "IN")
	  defaultRecipients = IN;    
	else if(FaultType.value == "121")
	  defaultRecipients = hotline;      
	else if(FaultType.value == "EDGE")
	  defaultRecipients = edge;
	else if(FaultType.value == "MMS")
	  defaultRecipients = mms;
	else if(FaultType.value == "Power")
	  defaultRecipients = power;
	else if(FaultType.value == "CPS")
	  defaultRecipients = cps;
	else if(FaultType.value == "IR link")
	  defaultRecipients = irlink;
	else if(FaultType.value == "GP-IT")
	  defaultRecipients = gpit;    
	else if(FaultType.value == "GRX link")
	  defaultRecipients = grxlink;
	else if(FaultType.value == "Calling")
	  defaultRecipients = calling;
	else if(FaultType.value == "ERS")
	  defaultRecipients = ers;
	else if(FaultType.value == "SMS")
	  defaultRecipients = sms;
	else if(FaultType.value == "Financial Service")
	  defaultRecipients = mobicash;
	else if(FaultType.value == "VAS")
	  defaultRecipients = vas;
	else if(FaultType.value == "PRBT")
	  defaultRecipients = prbt;
	else if(FaultType.value == "BlackBerry")
	  defaultRecipients = blackberry;
	else if(FaultType.value == "CORE")
	  defaultRecipients = core;
	else if(FaultType.value == "PS CORE")
	  defaultRecipients = pscore;
	else if(FaultType.value == "BSS")
	  defaultRecipients = bss;  
	else if(FaultType.value == "HealthLine")
	  defaultRecipients = healthline;  
	else if(FaultType.value == "Summer")
	  defaultRecipients = summer;    
	else if(FaultType.value == "Interconnection")
	  defaultRecipients = intrcon;
	else if(FaultType.value == "NE connectivity")
	  defaultRecipients = necon;  
	  
	if(!noticeID)
	{
	  //make the recipient list empty
	  recipientList.length = 0;
	  
	  //add the new recipient list
	  for(i=0; i<defaultRecipients.length; i++)
	  {
	     newOpt = new Option(defaultRecipients[i], defaultRecipients[i]);
	     recipientList.options[recipientList.length] = newOpt;		 
	  }
    }
}

function changeTitle(obj)
{
	if(obj.value == "FN" || obj.value == "FNU")
	{
		document.getElementById("label_st").innerText = "ST:";
		document.getElementById("label_et").innerText = "ERT:";		
	}
	else if(obj.value == "FRN")
	{
		document.getElementById("label_st").innerText = "ST:";
		document.getElementById("label_et").innerText = "ET:";		
	}
	else if(obj.value == "Notice")
	{
		document.getElementById("label_st").innerText = "ST:";		
		if(document.getElementById('fault_type').value == "Site Halt")
		  document.getElementById("label_et").innerText = "EHT:";
		else
		  document.getElementById("label_et").innerText = "ERT:";
	}	
	else if(obj.value == "Notice Update")
	{
		document.getElementById("label_st").innerText = "ST:";
		document.getElementById("label_et").innerText = "ET:";
		
		//if(document.getElementById('fault_type').value == "Other" || document.getElementById('fault_type').value == "Site Halt")
		  //document.getElementById("label_et").innerText = "ET:";
	}
	
	prepareSMS();	
}

function prepareSMS()
{
	if(document.getElementById("fault_type").value== 'Site Halt')
	{
	  haltSMS();
	  return 0; //exit from function
	}
	
	objNotice  = document.getElementById("notice_type");
	objTextFT  = document.getElementById("text_ft");
	objLabelST = document.getElementById("label_st");
	objDateST  = document.getElementById("ft_date");
	objTextET  = document.getElementById("text_et");
	objLabelET = document.getElementById("label_et");
	objDateET  = document.getElementById("rt_date");
	objTitle   = document.getElementById("title");
	//objGTitle  = document.getElementById("general_title");
	objReason  = document.getElementById("reason");
	objImpact  = document.getElementById("impact");
	objStatus  = document.getElementById("status");
	objSMS     = document.getElementById("sms");
	
	objSMS.value="";
	
	if(objNotice.value)
	{
	  if(objNotice.value == 'FN')
	    objSMS.value = "Fault Notification:";
	  else if(objNotice.value == 'FNU')
	    objSMS.value = "Fault Notification Update:";
	  else if(objNotice.value == 'FRN')
	    objSMS.value = "Fault Restoration Notification:";
	  else
	    objSMS.value = objNotice.value + ":";
	}	
	if(objTitle.value)
	{
	  objSMS.value   += "\n" + objTitle.value;
	  //objGTitle.value = objTitle.value;
	}
	if(objImpact.value)
	  objSMS.value += "\nImpact: " + objImpact.value;	
	if(objStatus.value)
	  objSMS.value += "\nStatus: " + objStatus.value;  
	if(objTextFT.value)
	{
	  if(objDateST.value != objDateET.value)
        objSMS.value += "\nST: " + objTextFT.value + " (" + objDateST.value + ")";
      else
	    objSMS.value += "\nST: " + objTextFT.value;
	}
	if(objTextET.value)
	{
	  if(objDateST.value != objDateET.value)
	    objSMS.value += "\nET: " + objTextET.value + " (" + objDateET.value + ")";
	  else
	    objSMS.value += "\nET: " + objTextET.value;
	}	
	if(objReason.value)
	  objSMS.value += "\nReason: " + objReason.value;
	  
	checkChCount();		  
}

function checkChCount()
{
	objSMS        = document.getElementById("sms");
	objSMS1       = document.getElementById("sms1");
	objSMS2       = document.getElementById("sms2");
	objNoticeType = document.getElementById('notice_type');
	smsText       = objSMS.value;	
	objLabelSMS   = document.getElementById("sms_text");
	objTRSMS      = document.getElementById("sms_tr");
	
	//notification text
	textNotification = '';
	if(objNoticeType.value == 'FN')
	  textNotification = "Fault Notification";
	else if(objNoticeType.value == 'FNU')
	  textNotification = "Fault Notification Update";
	else if(objNoticeType.value == 'FRN')
	  textNotification = "Fault Restoration Notification";
	else
	  textNotification = objNoticeType.value;
	  
	if(smsText.length >= 480)
	{
	  smsPart1                  = smsText.substr(0,460);
	  smsPart2                  = textNotification + "(Contd):\n" + smsText.substr(460,smsText.length);
	  objSMS.value              = smsPart1 + "\n(Contd.)";
	  objSMS1.style.display     = "block";
	  objSMS1.value             = smsPart2;
	  
	  objLabelSMS.innerText     = "Message:\nCharacter\nLimit 480\nExceeded";
	  objLabelSMS.style.color   = "white";
	  objTRSMS.style.background = "red";
	  
	  if(smsPart2.length >= 480)
	  {		  
		  smsPart3                  = smsPart2.substr(0,460);
	      smsPart4                  = textNotification + "(Contd):\n" + smsPart2.substr(460,smsText.length);    	  
		  objSMS1.value             = smsPart3 + "\n(Contd.)";
		  objSMS2.style.display     = "block";
		  objSMS2.value             = smsPart4;
		  
		  objLabelSMS.innerText     = "Message:\nCharacter\nLimit 960\nExceeded";
	  }
	  else
	  {
	     objSMS2.style.display     = "none";
		 objSMS2.value             = "";
	  }
	}
	else
	{
		objLabelSMS.innerText     = "Message:";
		objLabelSMS.style.color   = "#557799";
		objTRSMS.style.background = "#F8F8F8";
		objSMS1.style.display     = "none";
		objSMS1.value             = "";
	}
}

function chLimitExceedWorning(obj)
{
	if(obj.value.length>=480)
	{
		alert("Message Character Limit 480 Exceeded");
		obj.value = obj.value.substr(0,479);
	}	
}

function showHistory(url)
{
	window.open(url,'IncidentHistory','width=1100,height=450,left=0,top=0,scrollbars=yes,resizable=yes');
}

function doSubmit(objForm)
{
	message    = "The following fields can not be empty:";
	submitForm = false;
	incr       = 1;
	
	if(!objForm.group_name.value)
	{
		message   += "\n"+ incr + ". Group";
		submitForm = true;
		incr++;		
	}
	if(!objForm.notice_type.value)
	{
		message   += "\n"+ incr + ". Notice Type";
		submitForm = true;
		incr++;
	}
	if(!objForm.visible_list.value)
	{
		message   += "\n"+ incr + ". Notification";
		submitForm = true;
		incr++;
	}
	if(!objForm.fault_type.value)
	{
		message   += "\n"+ incr + ". Fault Type";
		submitForm = true;
		incr++;
	}
	if(!objForm.outage.value)
	{
		message   += "\n"+ incr + ". Outage";
		submitForm = true;
		incr++;
	}
	if(!objForm.general_title.value)
	{
		message   += "\n"+ incr + ". General Title";
		submitForm = true;
		incr++;
	}
	if(!objForm.recipient_list.length)
	{
		message   += "\n"+ incr + ". Recipient";
		submitForm = true;
		incr++;
	}	
	
	if(submitForm)
	{
		alert(message);
		return false;
	}
	else
	{ 
		for(i = 0; i < objForm.recipient_list.length; i++)
		{
			objForm.recipient_list.options[i].selected = true;			
		}
	  return doConfirm('You are going to submit. Continue?');
	}
}

function smsBox(action, obj)
{	
    addRemoveDiv = document.getElementById('add_remove');
	smsPart1     = document.getElementById('sms1');
	smsPart2     = document.getElementById('sms2');
	
	if(action == 'show_hide')
	{
		if(obj.value == 'Summer' || obj.value == 'Other')
		{
			currentTime = new Date()
			
			addRemoveDiv.style.display = 'block';		
			
			document.getElementById('text_ft').value = currentTime.getHours() + ':' + currentTime.getMinutes();
		}
		else
			addRemoveDiv.style.display = 'none';
	}
	else if(action == 'add')
	{
		if(smsPart1.style.display == 'none')
			smsPart1.style.display = 'block';
		else if(smsPart2.style.display == 'none')
			smsPart2.style.display = 'block';
	}
	else if(action == 'remove')
	{
		if(smsPart2.style.display == 'block')
		{
			smsPart2.style.display = 'none';
			smsPart2.value = "";
		}
		else if(smsPart1.style.display == 'block')
		{
			smsPart1.style.display = 'none';
			smsPart1.value = "";
		}
	}
}

function changeVisible(obj)
{
	objVisible             = document.getElementById('visible');
	objHiddenVisible       = document.getElementById('hidden_visible');
	
	if(obj.value == 'Fault')
	  visibility = 'Yes';
	else
	  visibility = 'No';
	  
	objVisible.value       = visibility;
	objHiddenVisible.value = visibility;	
}

//start functions by Amjad
function addSubRecipients(SubName)
{
	defaultRecipients = new Array();
	recipientList     = document.getElementById('recipient_list');
	noticeID          = document.getElementById("notice_id").value;
	
	if(SubName.value == "ROD_NORTH")
	  defaultRecipients = ROD_NORTH;
	else if(SubName.value == "ROD_SOUTH")
	  defaultRecipients = ROD_SOUTH;
	  else if(SubName.value == "ROD_WEST")
	  defaultRecipients = ROD_WEST;
	  else if(SubName.value == "ROD_LSC")
	  defaultRecipients = ROD_LALBAG;
	  else if(SubName.value == "ROD_JSC")
	  defaultRecipients = ROD_JATRABARI;
	  else if(SubName.value == "ROD_IBS_MC")
	  defaultRecipients = ROD_IBS_MC;
	  else if(SubName.value == "ROK_Khulna West")
	  defaultRecipients = ROK_KH_WEST;
	  else if(SubName.value == "ROK_Khulna East")
	  defaultRecipients = ROK_KH_EAST;
	  else if(SubName.value == "ROK_Jessore SC")
	  defaultRecipients = ROK_JESSORE;
	  else if(SubName.value == "ROK_Kushtia SC")
	  defaultRecipients = ROK_KUSTIA;
	  else if(SubName.value == "ROS_Sylhet_West SC")
	  defaultRecipients = ROS_SY_WEST;
	  else if(SubName.value == "ROS_Sylhet_East SC")
	  defaultRecipients =  ROS_SY_EAST;
	  else if(SubName.value == "ROS_Bhairab SC")
	  defaultRecipients = ROS_BHAIRAB;
	  else if(SubName.value == "ROS_Moulvibazar SC")
	  defaultRecipients = ROS_MOULOVIBAZAR;
	  else if(SubName.value == "ROMy_Mymensingh SC")
	  defaultRecipients = ROMy_MYMENSINGH;
	  else if(SubName.value == "ROMy_Gazipur SC")
	  defaultRecipients = ROMY_GAZIPUR;
	  else if(SubName.value == "ROMy_Tangail SC")
	  defaultRecipients = ROMy_TANGAIL;
	  else if(SubName.value == "ROMy_Savar SC")
	  defaultRecipients = ROMy_SAVAR;
	  else if(SubName.value == "ROB_Bogra_North")
	  defaultRecipients = ROB_BO_NORTH;
	  else if(SubName.value == "ROB_Bogra_South")
	  defaultRecipients = ROB_BO_SOUTH;
 	 else if(SubName.value == "ROB_Rajshahi_SC")
	  defaultRecipients = ROB_RAJSHAHI;
	  else if(SubName.value == "ROB_Rangpur_SC")
	  defaultRecipients = ROB_RANGPUR;
	  else if(SubName.value == "ROB_Thakurgaon_SC")
	  defaultRecipients = ROB_THAKURGAON;
	  else if(SubName.value == "ROC_NORTH")
	  defaultRecipients = ROC_CG_NORTH;
	  else if(SubName.value == "ROC_SOUTH")
	  defaultRecipients = ROC_CG_SOUTH;
	  else if(SubName.value == "ROC_COMILLA")
	  defaultRecipients = ROC_COMILLA;
	  else if(SubName.value == "ROC_CHOWMUHUNI")
	  defaultRecipients = ROC_CHOWMUHONI;
	  else if(SubName.value == "ROC_COXSBAZAR")
	  defaultRecipients = ROC_COXBAZAR;
	   else if(SubName.value == "ROBs_Barisal SC")
	  defaultRecipients = ROBS_BARISAL;
	   else if(SubName.value == "ROBs_Faridpur SC")
	  defaultRecipients = ROBS_FARIDPUR;
	   else if(SubName.value == "ROBs_Patuakhali SC")
	  defaultRecipients = ROBS_PATUAKHALI;
	
	  
	if(!noticeID)
	{
	  //make the recipient list empty
	  recipientList.length = 0;
	  
	  //add the new recipient list
	  for(i=0; i<defaultRecipients.length; i++)
	  {
	     newOpt = new Option(defaultRecipients[i], defaultRecipients[i]);
	     recipientList.options[recipientList.length] = newOpt;		 
	  }
    }
}

function check(faulttype)
{
	
if(faulttype.value == "Site Halt")

document.sendSMSForm.sub_name.disabled=false;
//document.sendSMSForm.title.innerText= "Site Name: ";

else
document.sendSMSForm.sub_name.disabled=true;
}

function haltSMS()
{
	
	objNotice  = document.getElementById("notice_type");
	objTextFT  = document.getElementById("text_ft");
	objLabelST = document.getElementById("label_st");
	objDateST  = document.getElementById("ft_date");
	objTextET  = document.getElementById("text_et");
	objLabelET = document.getElementById("label_et");
	objDateET  = document.getElementById("rt_date");
	objFaultType= document.getElementById("fault_type");
	objTitle   = document.getElementById("title");
	//objGTitle  = document.getElementById("general_title");
	objReason  = document.getElementById("reason");
	objImpact  = document.getElementById("impact");
	objStatus  = document.getElementById("status");
	objSMS     = document.getElementById("sms");
	
	objSMS.value="";
	
	if(objNotice.value)
	{
	  
		if(objNotice.value == 'Notice' && objFaultType.value== 'Site Halt')
		objSMS.value = "Site Halt Notice: ";
		else if(objNotice.value == 'Notice Update' && objFaultType.value== 'Site Halt')
		objSMS.value = "Site Halt Notice Update: ";
		
		
		//objSMS.value = "Cell Halt Notice: ";
	  else
	    objSMS.value = objNotice.value + ":";
	}	
	if(objTitle.value){
	if(objFaultType.value== 'Site Halt' && objTitle.value.length <= 6)
	
	  objSMS.value   += "\nSite Name: " + objTitle.value;
	  //objGTitle.value = objTitle.value;
	
	else if(objFaultType.value== 'Site Halt' && objTitle.value.length == 7)
	{
		if(objNotice.value == 'Notice'){
		objSMS.value = "Cell Halt Notice: ";
	objSMS.value   += "\nCell Name: " + objTitle.value;
	
		}
		else if(objNotice.value == 'Notice Update'){
		objSMS.value = "Cell Halt Notice Update: ";
		objSMS.value   += "\nCell Name: " + objTitle.value;
		}
		}
		else if(objFaultType.value== 'Site Halt' && objTitle.value.length > 7)
		 objSMS.value   += "\nSite Name: " + objTitle.value;
	
	//objSMS.value   += "\nCell Name: " + objTitle.value;
	//}
	else
	objSMS.value   += "\n"  + objTitle.value;
	
	}
	if(objImpact.value)
	  objSMS.value += "\nImpact: " + objImpact.value;	
	if(objStatus.value)
	  objSMS.value += "\nStatus: " + objStatus.value;  
	if(objTextFT.value)
	{
	  //if(objDateST.value != objDateET.value)
        objSMS.value += "\n" + objLabelST.innerText + " " + objTextFT.value + " (" + objDateST.value + ")";
      //else
	    //objSMS.value += "\n" + objLabelST.innerText + " " + objTextFT.value;
	}
	if(objTextET.value)
	{

             if((objTextET.value.length < 6))
	  //if(objDateST.value != objDateET.value)
	    objSMS.value += "\n" + objLabelET.innerText + " " + objTextET.value + " (" + objDateET.value + ")";
	  else
	    objSMS.value += "\n" + objLabelET.innerText + " " + objTextET.value;
	}	
	if(objReason.value)
	  objSMS.value += "\nReason: " + objReason.value;
	  
	checkChCount();		  
}
//end functions by Amjad