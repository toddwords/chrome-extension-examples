//This is the code that will be injected on any page

//put the changes you want to make here
//put a unique chunk of the url inside checkWebAddress, make sure to surround with quotes
//to edit a new website, copy and past the three lines starting with if() and ending with }
if(checkWebAddress("scp-wiki.wikidot.com")){
	setTimeout(function(){alert("something spooky is happening at scp")}, 2000)
}
if(checkWebAddress("tacobell.com")){
	alert("haunted stomach feelings")
}

//you can ignore everything below here


function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}
function replaceText(findWord, replaceWord){
 var textnodes = getTextNodes();
 var findRE = new RegExp(findWord, "gi")
 for (var i = 0; i < textnodes.length; i++) {
   var text = textnodes[i].nodeValue;
   textnodes[i].nodeValue = text.replace(findRE, replaceWord);
 }
}
function replaceImages(imgLinkArray){
	//change images on page
	var images = $('img,picture, picture source')
	for (var i = 0, l = images.length; i < l; i++) {
	  console.log(imgLinkArray[i % imgLinkArray.length])
	  console.log(images[i].src)
	  images[i].src = imgLinkArray[i % imgLinkArray.length]
	  images[i]["data-src"] = imgLinkArray[i % imgLinkArray.length]
	  images[i].srcset = imgLinkArray[i % imgLinkArray.length]
	  console.log(images[i].src)
	}
}
function replaceText(findWord, replaceWord){
 var textnodes = getTextNodes();
 var findRE = new RegExp(findWord, "gi")
 for (var i = 0; i < textnodes.length; i++) {
   var text = textnodes[i].nodeValue;
   textnodes[i].nodeValue = text.replace(findRE, replaceWord);
 }
}
 function getTextNodes() {
 // get all html elements
 var elements = document.querySelectorAll("body, body *");
 var results = [];


 //loop through the elements children nodes
 for (var i = 0; i < elements.length; i++) {
   var child = elements[i].childNodes[0];

   // grab everything that's a textNode (nodeType is "3")
   if (elements[i].hasChildNodes() && child.nodeType == 3) {
     results.push(child);
   }
 }

 return results;
}