#!/bin/bash

# Start config - define your customizations inside .env.local
source "$(dirname "$0")/.env"
# End config

while true; do 
  CURRENT_SONG=$(redis-cli -h "$SERVER_REDIS_HOST" -a "$REDIS_PASSWORD" RPOP current_song)
  if [ "$CURRENT_SONG" != "" ]; then
    youtube-dl -f bestaudio -i --output "songs/%(epoch)s.%(id)s.%(ext)s" "$CURRENT_SONG"
  else
    sleep 1s
  fi
done

