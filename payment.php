<?php

 $ch = curl_init();
$data=new stdClass();

$data->customer=array("name"=>"jyoti","email"=>"jyoti.pixolo@gmail.com","contact"=>"9768941186");
$data->type="link";
$data->view_less=1;
$data->amount=1000;
$data->currency="INR";
$data->description="Test description";
$data->receipt="#12342";
$data->reminder_enable=true;
$data->sms_notify=1;
$data->email_notify=1;
$data->expire_by=1793630556;
$data->callback_url="http://ekonomo.in/callback.php";
$data->callback_method="get";
         curl_setopt($ch, CURLOPT_URL, 'https://api.razorpay.com/v1/invoices/');
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); //razorpay accepts money in paise
         curl_setopt($ch, CURLOPT_POST, 1);
         curl_setopt($ch, CURLOPT_USERPWD, 'rzp_test_O5cSqumkJi41db' . ':' . 'qb4iO4ZApsrDIE077fjFyaRW'); //API KEY AND API SECRET RESPECTIVELY

         $headers = array();
         $headers[] = 'Content-Type: application/json';
         curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

         $result = curl_exec($ch);
         $result=json_decode($result);
         
         print_r($result);
         if (curl_errno($ch)) {
             echo 'Error:' . curl_error($ch);
         }
         curl_close($ch);



?>

