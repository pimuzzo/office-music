# office-music
Simple redis-cli wrapper to play music from youtube

## on server:
- install with pip: `youtube-dl`
- install with package manager: `redis-server redis-tools libav-tools`
- edit `/etc/redis/redis.conf` to `bind 0.0.0.0`
- `nohup ./server.sh &`
- `nohup ./play-server.sh &`

## on client:
- install with package manager: `redis-tools`
- `./client.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ`

## override environment variables:
- you can override environment variables inside `.env` creating your own `.env.local` file

