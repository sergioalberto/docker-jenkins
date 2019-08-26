# Newman

## Run locally
* Export a collection .json file from Postman
* Install Newman
```shell script
npm install -g newman
```
* Run the following command:
```shell script
newman run JenkinsTest.postman_collection.json 
```

## Run with Docker
```shell script
docker run -v "$(pwd)":/tmp -t postman/newman_ubuntu1404:3.8.2 run /tmp/JenkinsTest.postman_collection.json
```
or
```shell script
docker run -v "$(pwd)"/demos/Newman/:/tmp -t postman/newman_ubuntu1404:3.8.2 run /tmp/JenkinsTest.postman_collection.json
```
or
```shell script
docker-compose up
```

### Stop Docker image
```shell script
docker-compose down

```
###### Source:
- https://learning.getpostman.com/docs/postman/collection_runs/integration_with_jenkins/
