chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if(request.webdisUrl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', request.webdisUrl, true);
    xhr.onreadystatechange = function() {
      if(this.readyState == 4) {
        if(this.status == 200) alert('request sent');
        if(this.status != 200) alert('something went wrong');
      }
    };
    xhr.send();
  }
});
