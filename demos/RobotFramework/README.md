# robot-framework-docker

Quick Start
===========

Clone this repository:
```shell script
git clone https://github.com/sergioalberto/docker-jenkins.git
```

Build the image:
```shell script
cd docker-jenkins/demos/RobotFramework
docker-compose build
```
    
Run the tests:
```shell script
docker-compose up
```
or
```shell script
./run_tests.sh
```
or
```
pip install -r requirements.txt
python -m robot --console verbose --outputdir reports/ test_cases/
```

Stop docker:
```shell script
docker-compose down
```
Contents
========

This image contains the following to facilitate robot testing

Xvfb
----

You can use it to start a visual display and fire up a browser for UI testing.
 
Example (suites/virtual_display.robot):

    Start Virtual Display    1920    1080
    
Selenium2Library
----------------

More details here  http://robotframework.org/Selenium2Library/Selenium2Library.html

Also have a look at **suites/virtual_display.robot**

HttpLibrary.HTTP
----------------

More details here https://github.com/peritus/robotframework-httplibrary

Example:

    Create Http Context     api.some-end-point.com
    GET                     /some/service/that/supports/get
    Verify Status           200
    ${response}=            Get Response Body
    [return]                ${response}
    
robotframework-sshlibrary
-------------------------

More details here: http://robotframework.org/SSHLibrary/latest/SSHLibrary.html

robotframework-excellibrary
---------------------------

More details here: http://navinet.github.io/robotframework-excellibrary/ExcelLibrary-KeywordDocumentation.html

###### Source
https://medium.com/@ypasmk/robot-framework-with-docker-in-less-than-10-minutes-7b86df769c22
