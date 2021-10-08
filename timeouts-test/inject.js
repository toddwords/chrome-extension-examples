//This is the code that will be injected on any page
if(checkWebAddress("chess.com")){
	setTimeout(function(){
		alert("Shouldn't you be doing something else?")
	}, 5000)
	
	setTimeout(function(){
		alert("why are you still playing?") 
	}, 10000)
	
	setTimeout(function(){
		alert("let's take a break")
		location.href = "https://www.google.com/maps/@21.2549473,-157.807105,3a,75y,302.67h,101.39t/data=!3m8!1e1!3m6!1sAF1QipNN8t9C7PvYLUI4thPpdqFIKWHwoXATvaSTdJ0l!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNN8t9C7PvYLUI4thPpdqFIKWHwoXATvaSTdJ0l%3Dw203-h100-k-no-pi-10-ya20-ro0-fo100!7i4096!8i2048"
	}, 15000)
}


function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}