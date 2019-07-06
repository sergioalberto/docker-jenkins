# Docker-images
Process to build/run your CI environment.

### Build master
``cd master && docker build -t jenkins-master .``

### Build slave/node
``cd slave && docker build -t jenkins-slave .``

### Run
``docker-compose up -d ``

Now, go to http://localhost:8080/ (admin/admin)

### Stop
``docker-compose down -v``
