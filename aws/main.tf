provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-00beae93a2d981137" # Use a valid AMI ID
  instance_type = "t2.micro"

  count         = 3

  tags = {
    Name = "share-nights-instance-${count.index}"
  }

  key_name = "vockey" # Ensure you have a key pair created in AWS
}

output "instance_ips" {
  value = aws_instance.example[*].public_ip
}
