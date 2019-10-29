## Setup

1st time:
create github repo
clone
create 'serverless create --template aws-nodejs' // ref https://serverless.com/framework/docs/providers/aws/cli-reference/create/

work on existing
1. clone
2. go to folder
3. npm install


Testing
# Local
sls invoke local --function hello // we can use serverless/sls


Test Cognito using CLI
aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id 6nu10vhcmmjrrgsjkru8ascbb3 \
  --username mani@example.com \
  --password Passw0rd!

  aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id  us-east-1_Us1T5AZvU \
  --username mani@example.com



## DB Operations
 
1. Create a Model with migration file
npx sequelize-cli model:generate --name Puja --attributes name:string