<?php
// submit_inquiry.php

// Include your database connection file
include('db_connection.php');

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$section = $_POST['section'];
$package = $_POST['package'];

$sql = "INSERT INTO inquiries (name, email, message, section, package) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $message, $section, $package);

$response = [];

if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['success'] = false;
}

$stmt->close();
$conn->close();

echo json_encode($response);
?>