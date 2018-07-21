chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.webdisUrl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', request.webdisUrl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        // var resp = JSON.parse(xhr.responseText);
      }
    };
    xhr.send();
    return xhr.responseText;
  }
});
