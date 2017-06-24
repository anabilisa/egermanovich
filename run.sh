#!/usr/bin/env bash
docker build -t egor . && docker run -d -p 3000:80 --rm --name egor-running egor
