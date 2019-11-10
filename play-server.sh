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

      if [ "$SERVER_BACKEND" == "local" ]; then
        omxplayer -o "$SERVER_OMX_AUDIO_OUT_DEVICE" "$filename"
      else
        ffmpeg -re -i "$filename" -vn -codec:a libmp3lame -b:a 64k -f mp3 -content_type audio/mpeg -ice_name "$SERVER_ICECAST2_NAME" -ice_description "$SERVER_ICECAST2_DESCRIPTION" icecast://source:"$SERVER_ICECAST2_SOURCE_PASSWORD"@"$SERVER_ICECAST2_HOST":"$SERVER_ICECAST2_PORT"/"$SERVER_ICECAST2_MOUNTPOINT"
      fi

      rm -f "$filename"
    fi
  done
  sleep 1s
done

