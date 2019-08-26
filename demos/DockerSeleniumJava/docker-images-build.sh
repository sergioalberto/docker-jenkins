#!/usr/bin/env bash

cd docker

docker build --rm -t sergiogq/oracle-jdk8 -f oracle-jdk8.dockerfile .

docker build --rm -t sergiogq/tomcat7-jdk8 -f tomcat7-jdk8.dockerfile .

docker build --rm -t sergiogq/mvn3-jdk8 -f mvn3-jdk8.dockerfile .

docker build --rm -t sergiogq/ui-tests -f ui-tests.dockerfile .
