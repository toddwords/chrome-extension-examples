
//this is a background script, it runs consistently in the background,
//useful if you need to keep track of info between pages
//or have stuff you don't want to load on every page

//this code listens for messages from our inject script and does things based on them
chrome.extension.onMessage.addListener(
  function(message, sender, sendResponse) {
  	if(message.text){
  		//do something
  	}
  });

chrome.storage.sync.get(function(data){
	if(!data.clickCounter){
		chrome.storage.sync.set({clickCounter: 0, noteText:""})
	}
})