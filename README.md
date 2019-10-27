# office-music
Simple redis-cli wrapper to play music from youtube

## override environment variables:
- you can override environment variables inside `.env` creating your own `.env.local` file

## bash only:

### server:
- install with pip: `youtube-dl`
- install with package manager: `redis-server redis-tools libav-tools`
- edit `/etc/redis/redis.conf` to `bind 0.0.0.0`
- `nohup ./server.sh &`
- `nohup ./play-server.sh &`

### bash client:
- install with package manager: `redis-tools`
- `./client.sh https://www.youtube.com/watch?v=dQw4w9WgXcQ`

## with chrome extension:

### server:
- follow instructions for bash only server
- install and execute [webdis](http://webd.is)

### chrome extension client (beta)
- in `manifest.json > permissions` edit `http://raspberry:7379/*` with your webdis server
- in `office-music-client.js` edit `BASE_WEBDIS_URL` with your webdis server
- load manually the extension in chrome as a unpacked extension

