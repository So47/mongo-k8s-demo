## Description

A simple application to work with MongoDB on Kubernetes.


## Dockerfile

- Uses the node:14-alpine image for a base.
- Sets /usr/src/app as the working directory.
- Copies the package.json and package-lock.json files and installs dependencies.
- Copies the rest of your application.
- Exposes port 3000.
- Sets the command to start your app.

## Build and Push Your Docker Image

```
docker build -t <your-username>/mongo-k8s-example:<your-tag> .
docker push <your-username>/mongo-k8s-example:<your-tag>

```
