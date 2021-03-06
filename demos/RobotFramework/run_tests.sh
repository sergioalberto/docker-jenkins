#!/usr/bin/env bash

docker run --rm \
           -e USERNAME="SergioGQ" \
           --net=host \
           -v "$PWD/output":/output \
           -v "$PWD/suites":/test_cases \
           -v "$PWD/resources":/resources \
           -v "$PWD/scripts":/scripts \
           -v "$PWD/reports":/reports \
           --security-opt seccomp:unconfined \
           --shm-size "256M" \
           ypasmk/robot-framework
