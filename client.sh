#!/bin/bash

# Start config
REDIS_HOST=raspberry
# End config

if [ -z "$1" ]
  then
    echo "You must supply a youtube URL like: ./client.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ"
fi

redis-cli -h "$REDIS_HOST" LPUSH current_song "$1"

