#!/usr/bin/env bash
docker build -t egor . && docker run -d -p 3000:300 --rm --name egor-running egor
