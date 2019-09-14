# Starting off with the Jenkins base Image
FROM jenkins/jenkins:2.192
 
# Installing the plugins we need using the in-built install-plugins.sh script
RUN /usr/local/bin/install-plugins.sh git mstest matrix-auth workflow-aggregator docker-workflow blueocean credentials-binding cucumber-reports maven pipeline-rest-api pipeline-input-step pipeline-stage-step pipeline-stage-view
RUN /usr/local/bin/install-plugins.sh pipeline-build-step pipeline-graph-analysis pipeline-maven ansicolor

# Setting up environment variables for Jenkins admin user
ENV JENKINS_USER admin
ENV JENKINS_PASS admin
 
# Skip the initial setup wizard
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false
 
# Start-up scripts to set number of executors and creating the admin user
COPY executors.groovy /usr/share/jenkins/ref/init.groovy.d/
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/
 
VOLUME /var/jenkins_home
