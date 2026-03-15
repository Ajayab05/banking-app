resource "aws_instance" "main" {
  ami = "ami-0b6c6ebed2801a5cb"
  instance_type = "t2.large"

  tags = {
    key_name = "Dev"
  }