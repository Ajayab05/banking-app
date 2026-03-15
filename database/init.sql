CREATE DATABASE IF NOT EXISTS banking;

USE banking;

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    balance DECIMAL(10,2)
);