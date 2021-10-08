//This is the code that will be injected on any page
var airhorn = new Audio(chrome.runtime.getURL("airhorn.mp3"));
Mousetrap.bind("`", function(){
	playSound(airhorn);
})

function playSound(sound){
	if(sound.currentTime > 0){
  		sound.currentTime = 0;
  	}
  	if(sound.currentTime == 0){
  		sound.play();
  	}
}
  		