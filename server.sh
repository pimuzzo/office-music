#!/bin/bash

# Start config
REDIS_HOST=localhost
# End config

while true; do 
  CURRENT_SONG=$(redis-cli -h "$REDIS_HOST" RPOP current_song)
  if [ "$CURRENT_SONG" != "" ]; then
    youtube-dl --extract-audio --audio-format best --output "current_song.%(ext)s" "$CURRENT_SONG"
    omxplayer -o local current_song.*
    rm current_song.*
  else
    sleep 1s
  fi
done

