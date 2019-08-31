#!/bin/sh

set -e

CMD="robot --console verbose --outputdir /reports /test_cases"

echo ${CMD}

``${CMD}``
