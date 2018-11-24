#!/bin/bash

# Start config - define your customizations inside .env.local
source .env
# End config

while true; do 
  CURRENT_SONG=$(redis-cli -h "$REDIS_HOST" RPOP current_song)
  if [ "$CURRENT_SONG" != "" ]; then
    youtube-dl --extract-audio --audio-format best --output "current_song.%(ext)s" "$CURRENT_SONG"
    omxplayer -o "$OMX_AUDIO_OUT_DEVICE" current_song.*
    rm current_song.*
  else
    sleep 1s
  fi
done

