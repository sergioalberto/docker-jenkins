# Introduction to Kubernetes

Here's a simple Go API that returns the host's information. You can deploy the same container to any Kubernetes cluster. I use this guide to demo how to use Kubernetes locally, and then deploy the same app to AWS, GCP, and Azure.

## Build Docker Image

```
cd src
docker build -t sergiogq/api-hello-go .
docker run -d -p 8080:8080 sergiogq/api-hello-go
docker push sergiogq/api-hello-go
```

# Kubernetes as a Service

## GCP
Run the following commands in the Cloud Shell to create a Cluster:

```
gcloud config set project [project_id]
gcloud config set compute/zone [compute_zone]
gcloud container clusters create [custer_name]
gcloud container clusters get-credentials [custer_name]
```
Reference [link](https://cloud.google.com/kubernetes-engine/docs/quickstart)

## Deploy Kubernetes Objects
```
kubectl apply -f ./k8s/
kubectl get all
```

## Destroy Kubernetes Objects
```
kubectl delete -f ./k8s/
```

