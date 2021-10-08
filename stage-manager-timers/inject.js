//This is the code that will be injected on any page

$(document).keydown(function(e){
	//this gets the keycode of the last key pressed
	//lookup at keycode.info
	//the '\' key
	if(e.which == 220){
		chrome.runtime.sendMessage({toggleScript:true})
		//then we do some other code
	}

})

//put the changes you want to make here
changeWebContent();
setTimeout(changeWebContent, 3000)


function changeWebContent(){
	if(checkWebAddress("nytimes.com")){
		$('h1').text("hey I'm on new york times!")
	}

	if(checkWebAddress("craigslist")){
		$('h1,h2,h3').text("buy buy buy")
	}

	if(checkWebAddress("lingscars.com")){
		
	}

	if(checkWebAddress("foodnetwork.com")){
		$('.superLeadHero .m-MediaBlock__m-MediaWrap a').css('background-image', 'url(https://media1.giphy.com/media/l0OWiMGpoC6apZFXG/giphy.gif)')
	}
}

function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}
	
