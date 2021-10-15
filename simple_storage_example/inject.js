//This is the code that will be injected on any page
chrome.storage.local.get(function(data){
	console.log(data)
	if(data.isRisdStudent){
		if(checkWebAddress("youtube.com")){
			alert("shouldn't you be working on something, risd student??")
		}
	}
})


if(checkWebAddress("risd.edu")){
	$('a:contains("Explore our Programs")').click(function(){
		chrome.storage.local.set({isRisdStudent:true})
	})
	$('a:contains("Explore our Programs")').text("Are you a RISD student?")

	$('.primary-nav__rail').prepend(`<button id='risdButton'>Are you a student?</button>`)

	$('#risdButton').click(function(){
		chrome.storage.local.set({isRisdStudent:true})
	})
	
}

function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}


