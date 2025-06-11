<?php

    $to = "rockybd1995@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $subject = $_REQUEST['subject'];
    $cmessage = $_REQUEST['message'];

    // Prepare email headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subjectLine = "You have a message from your portfolio website.";

    // Email body
    $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Contact Form Message</title></head><body>";
    $body .= "<table style='width: 100%;'>";
    $body .= "<tr><td><strong>Name:</strong> {$name}</td></tr>";
    $body .= "<tr><td><strong>Email:</strong> {$from}</td></tr>";
    $body .= "<tr><td><strong>Subject:</strong> {$subject}</td></tr>";
    $body .= "<tr><td><strong>Message:</strong><br>{$cmessage}</td></tr>";
    $body .= "</table>";
    $body .= "</body></html>";

    // Send the email
    $send = mail($to, $subjectLine, $body, $headers);

    if ($send) {
        echo "Success! Your message has been sent.";
    } else {
        echo "Error! Message could not be sent. Please try again later.";
    }

?>
