//This is the code that will be injected on any page
chrome.storage.sync.get(function(data){
	$('h1,h2,h3,h4').text("Hello There!").click(function(){
		data.clickCounter += 1;
		console.log(data.clickCounter);
		chrome.storage.sync.set({clickCounter: data.clickCounter})
	})
	$('body').prepend("<textarea id='noteText'></textarea>")
	$('#noteText').val(data.noteText)
	$('#noteText').keyup(function(){
		data.noteText = $('#noteText').val();
		chrome.storage.sync.set({noteText: data.noteText})
	})
})
	

