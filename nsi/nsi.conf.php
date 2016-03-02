<?php
    // include the user class
    require_once(USER_CLASS);
    require_once(DOCUMENT_CLASS);
	require_once(EXT_DIR . '/smpp/smppclass.php');

    /**#@+
    * PATH Constant
    */

    // defines the template and template path
    define('TEMPLATE_DIR',                 APP_CONTENTS_DIR     . '/' . CURRENT_APP_PREFIX);
    define('REL_TEMPLATE_DIR',             REL_APP_CONTENTS_DIR . '/' . CURRENT_APP_PREFIX);    
     
    /**#@+
    * Template Constant
    */
    define('NSI_TEMPLATE',              TEMPLATE_DIR . '/nsi.html');
	define('INCIDENT_HISTORY_TEMPLATE', TEMPLATE_DIR . '/incident_history.html');    
    define('NSI_URL',                    REL_APP_DIR . '/nsi/nsi.php');        
	
	//initialization for SMS starts 
    define('SMPP_HOST', "10.184.67.20");
    define('SMPP_PORT', 5566);
    define('SYSTEM_ID', "grinms");
    define('PASSWORD', "sh9876");
    define('SMS_FROM', "GP-SOC");
    //initialization for SMS ends
?>