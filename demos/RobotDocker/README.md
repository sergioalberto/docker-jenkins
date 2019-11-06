# **Robotframework + Docker **

## Description
Welcome to the basic automation tips with robotframework as an automation tool and docker for tests excution
environment

### Robotframework
Robot Framework is a generic open source automation framework for acceptance testing, acceptance test driven
development (ATDD), and robotic process automation (RPA). It has easy-to-use tabular test data syntax and it
utilizes the keyword-driven testing approach. Its testing capabilities can be extended by test libraries
implemented either with Python or Java, and users can create new higher-level keywords from existing ones using
the same syntax that is used for creating test cases

```shell script
pip3 install pipenv
pipenv --three
pipenv shell
pipenv install selenium
pipenv install robotframework
pipenv install robotframework-seleniumlibrary
pipenv install robotframework-pabot
pipenv graph
python3 example.py
```

Run it:

Execute Robotframework project
> robot -d {results output} -i {test tags}  {robot suites location}
> pabot --processes {number of threads} -d {results output} -i {test tags}  {robot suites location}

Examples:
> robot -d results -i test test_suites
> pabot --processes 2 -d results -i test test_suites

Generate `requirements.txt` file:
> pip freeze > requirements.txt

### Docker
Package Software into Standardized Units for Development, Shipment and 
Deployment
> docker network create docker_default
> docker-compose build
> docker-compose up -d
> docker-compose exec automation bash
> docker-compose down

> docker-compose build
> docker-compose up -d
> docker-compose down

Docker Tool: `Portainer.io`
