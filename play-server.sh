#!/bin/bash

# Start config - define your customizations inside .env.local
source "$(dirname "$0")/.env"
# End config

rm -f songs/*

while true; do
  echo "Searching for songs to play..."
  for file in songs/* ; do
    if [[ $file != "songs/*" && ${file: -5} != ".part" ]]; then
      filename=${file}
      echo "Playing $filename..."
      omxplayer -o "$SERVER_OMX_AUDIO_OUT_DEVICE" "$filename"
      rm -f "$filename"
    fi
  done
  sleep 1
done

