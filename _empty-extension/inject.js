//This is the code that will be injected on any page
$('h1,h2,h3,h4').text("Hello There!")

function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}