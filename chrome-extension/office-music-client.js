const BASE_WEBDIS_URL = 'http://raspberry:7379/LPUSH/current_song/';
const ESCAPED_YOUTUBE_URL = 'https:%2f%2fyoutu.be%2f';

function main() {
  const watchActionButtons = document.getElementsByClassName('watch-action-buttons')[0];
  addOfficeMusicButton(watchActionButtons);
}

function addOfficeMusicButton(watchActionButtons) {
  const button = document.createElement('button');
  button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup action-panel-trigger-share';
  const buttonText = document.createTextNode('office music');
  button.appendChild(buttonText);
  button.onclick = sendRequestToWebdis;
  watchActionButtons.appendChild(button);
}

function sendRequestToWebdis() {
  const youtubeId = youtubeGetId(window.location.href);
  const webdisUrl = `${BASE_WEBDIS_URL}${ESCAPED_YOUTUBE_URL}${youtubeId}`;
  chrome.runtime.sendMessage({webdisUrl});
}

// author: https://gist.github.com/takien/4077195
function youtubeGetId(url) {
  let id = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    id = url[2].split(/[^0-9a-z_\-]/i);
    id = id[0];
  }
  else {
    id = url;
  }
  return id;
}

main();
