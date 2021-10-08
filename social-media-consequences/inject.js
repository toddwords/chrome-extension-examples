//This is the code that will be injected on any page
setTimeout(function(){
	alert("Get out while you can!")
}, 5000)

setTimeout(function(){
	//chrome.runtime.sendMessage({timeUp: true})
	location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}, 10000)