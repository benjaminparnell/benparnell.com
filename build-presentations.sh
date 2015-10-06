#!/bin/bash

find ./presentations -name "*.md" -type f -exec sh -c 'cleaver $0 --output ./public/presentations/`basename $0`.html' {} \;
