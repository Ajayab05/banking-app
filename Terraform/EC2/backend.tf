terraform {
  backend "s3" {
    bucket = "dev-aman-tf-bucket2026"
    key    = "path/to/my/key"
    region = "us-east-1"
  }
}
