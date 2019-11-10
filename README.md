# office-music
Simple redis-cli wrapper to play music from YouTube

## on server:
- install with pip: `youtube-dl`
- install with package manager: `redis-server redis-tools libav-tools`
- edit `/etc/redis/redis.conf` to `bind 0.0.0.0`
- edit `/etc/redis/redis.conf` to `requirepass YOUR_PASS` (optional)
- `nohup ./server.sh &`
- `nohup ./play-server.sh &`

### Icecast2:
You can enable Icecast2 support to stream your music from youtube on Icecast2 server
- install with package manager: `ffmpeg`
- edit `.env` to `SERVER_BACKEND=icecast2`
- edit all the Icecast2 related block in `.env`

## on client:
- install with package manager: `redis-tools`
- `./client.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ`

## override environment variables:
- you can override environment variables inside `.env` creating your own `.env.local` file

