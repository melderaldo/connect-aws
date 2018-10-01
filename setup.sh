#!/bin/sh

sudo yum update -y
sudo yum install -y docker
sudo service docker start

sudo yum install -y git

git clone https://github.com/melderaldo/connect-aws.git

sudo docker build -t connect/connect-aws connect-aws/

sudo docker run -d -p 3000:3000 connect/connect-aws