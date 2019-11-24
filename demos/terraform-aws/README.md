## What is Terraform? 

[Terraform](https://www.terraform.io) is a tool made by Hashicorp for building, changing, and versioning infrastructure safely and efficiently.
Terraform can manage existing and popular service providers ( AWS, Azure, Google Cloud) as well as custom in-house solutions.

## Steps to provision
```shell script
export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
export AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"

# Initialize a Terraform working directory
terraform init

# Builds or changes infrastructure
terraform apply

# Inspect Terraform state or plan
terraform show

# Generate and show an execution plan
terraform plan

# Destroy Terraform-managed infrastructure
terraform destroy
```

###### Note:
You need to create a [Security Group](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#SecurityGroups:sort=groupId).

## SSH connection example
```shell script
chmod 600 ~/.ssh/id_rsa.pub
ssh -i "~/.ssh/id_rsa.pub" ubuntu@ec2-34-230-82-216.compute-1.amazonaws.com
```

##### Reference:
- https://www.terraform.io/docs/providers/aws/index.html
- https://learn.hashicorp.com/terraform/getting-started/intro
- https://github.com/aws-samples/apn-blog/tree/tf_blog_v1.0/terraform_demo
- https://medium.com/@hmalgewatta/setting-up-an-aws-ec2-instance-with-ssh-access-using-terraform-c336c812322f
- https://github.com/terraform-providers/terraform-provider-aws/tree/master/examples
- https://github.com/Cloud-Yeti/aws-labs/tree/master/terraform-aws
