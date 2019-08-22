# Docker-Images
Process to build/run your CI environment.

### Build master
``cd master && docker build -t jenkins-master .``

### Build slave/node
``cd slave && docker build -t jenkins-slave .``

### Run Jenkins
```shell script
docker-compose up -d
```
or
```shell script
docker-compose -f docker-compose-gcloud.yml up -d
```

Now, go to [http://localhost:8080/](http://localhost:8080/) (admin/admin)

###### Notes: 
- Use `docker` label on the `Restrict where this project can be run` job field.
- If you want to use `gcloud`,  you need to install [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu) in you local machine and log intro to save your credentials here `$HOME/.config/gcloud` before to run the docker containers.

### Stop Jenkins
``docker-compose down``
