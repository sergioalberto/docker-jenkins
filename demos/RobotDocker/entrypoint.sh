#!/bin/sh

wait-for --timeout "${WAIT_FOR_TIMEOUT:-10}" $WAIT_FOR_HOSTS -- \
  robot -d results -i test test_suites
