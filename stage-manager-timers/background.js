
//this is a background script, it runs consistently in the background,
//useful if you need to keep track of info between pages
//or have stuff you don't want to load on every page

var timeouts = [];
var scriptRunning = false;

chrome.extension.onMessage.addListener(
  function(message, sender, sendResponse) {
  	if(message.toggleScript){
      if(!scriptRunning){
        runScript()
      } else {
        resetScript()
      }
      scriptRunning = !scriptRunning
    }
});
function runScript(){
  changeUrl("www.lingscars.com", 0)
  changeUrl("http://nytimes.com", 2)
  openNewTab("https://google.com", 7)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 10, 300,600, 200, 700)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 15, 500,200, 300, 300)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 19, 400,100, 200, 500)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 22, 100,300, 500, 400)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 24, 200,400, 400, 200)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 25, 600,200, 100, 400)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 27, 500,500, 200, 500)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 28, 400,200, 300, 600)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 29, 500,600, 400, 300)
  openNewWindow("https://www.youtube.com/watch?v=2vuaqDDr--Q", 31, 200,800, 300, 600)
}

//these functions take in a url and a time in seconds
function changeUrl(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.tabs.update({ url: newUrl });
  }, time * 1000)
  timeouts.push(newTimeout)
}
function openNewTab(newUrl, time){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.tabs.create({ url: newUrl });
  }, time * 1000)
  timeouts.push(newTimeout)
}
function openNewWindow(newUrl, time, left=0, top=0, width=500, height=400 ){
  var newTimeout = setTimeout(function(){
    if(newUrl.slice(0,4) != "http"){newUrl = "http://"+newUrl}
    chrome.windows.create({ url: newUrl, left:left, top:top, width:width, height:height });
  }, time * 1000)
  timeouts.push(newTimeout)
}

function checkWebAddress(url) {
    return window.location.href.indexOf(url) >= 0
}

function resetScript(){
  for(var i = 0; i < timeouts.length; i++){
    clearTimeout(timeouts[i])
  }
}