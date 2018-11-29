#!/bin/bash

# Start config - define your customizations inside .env.local
source "$(dirname "$0")/.env"
# End config

if [ -z "$1" ]; then
  echo "You must supply a youtube URL like: ./client.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  exit 1;
fi

redis-cli -h "$CLIENT_REDIS_HOST" LPUSH current_song "$1"

