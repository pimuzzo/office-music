const BASE_WEBDIS_URL = 'http://raspberry:7379/LPUSH/current_song/';
const ESCAPED_YOUTUBE_URL = 'https:%2f%2fyoutu.be%2f';
const YOUTUBE_MATCH = 'https://www.youtube.com/watch';

function main() {
  let _watch = null;
  setInterval(function() {
    let test = window.location.href;
    if(_watch !== test || _watch === null) {
      _watch = test;
      if(test.startsWith(YOUTUBE_MATCH)) setTimeout(addOfficeMusicButton, 500);
      else {
        const oldButton = document.getElementById('office-music');
        if(oldButton) oldButton.remove();
      }
    }
  }, 500);
}

function addOfficeMusicButton() {
  const body = document.getElementsByTagName('body')[0];
  const oldButton = document.getElementById('office-music');
  if(oldButton) return;
  const button = document.createElement('button');
  button.id = 'office-music';
  button.setAttribute('style', 'position:fixed;bottom:30px;right:30px;');
  const buttonText = document.createTextNode('office music');
  button.appendChild(buttonText);
  button.onclick = sendRequestToWebdis;
  body.appendChild(button);
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
