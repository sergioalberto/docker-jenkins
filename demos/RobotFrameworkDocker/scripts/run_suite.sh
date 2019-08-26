#!/bin/sh

set -e

CMD="robot --console verbose --outputdir /reports /suites"

echo ${CMD}

``${CMD}``
