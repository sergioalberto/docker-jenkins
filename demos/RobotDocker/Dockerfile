#Download images
FROM ubuntu:18.04

#update system
RUN apt update && apt install -y netcat

#Setup python environment
RUN apt install python3.7 -y
RUN apt install python3-pip -y

RUN mkdir auto

#Copy requirements.txt
COPY requirements.txt auto/

#Installing libraries
RUN pip3 install -r auto/requirements.txt

COPY wait-for.sh /usr/local/bin/wait-for
COPY entrypoint.sh /usr/local/bin/entrypoint

# ENTRYPOINT [ "tail","-f","/dev/null" ]
# ENTRYPOINT ["robot", "-d", "results", "-i", "test", "test_suites"]
ENTRYPOINT ["entrypoint"]
