<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents("php://input"), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON input"]);
    exit();
}

$firstName = trim($input["firstName"] ?? "");
$lastName = trim($input["lastName"] ?? "");
$email = filter_var($input["email"] ?? "", FILTER_SANITIZE_EMAIL);
$companySize = trim($input["companySize"] ?? "");
$salesforceInstance = trim($input["salesforceInstance"] ?? "");
$message = trim($input["message"] ?? "");

if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$to = "parambuddh26@gmail.com";
$subject = "New Contact Request from RVwebsite";

$body = "Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Company Size: $companySize\n";
$body .= "Salesforce Instance: $salesforceInstance\n";
$body .= "Message:\n$message\n";

$headers = "From: $email" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully using PHP mail()."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send message via mail()."]);
}
?>