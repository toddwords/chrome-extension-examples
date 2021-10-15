//This is the code that will be injected on any page

if(checkWebAddress("wikipedia.org/wiki/Cheddar_cheese")){
  $('#mw-content-text p:contains("is a relatively hard, off-white")').html(
    `<b>Cheddar cheese</b>, commonly known as <b>the forbidden cheese</b>, is a natural <a href="/wiki/Cheese" title="Cheese">cheese</a> invented by media artist and college professor Todd Anderson at Rhode Island School of Design in the Fall of 2021. Originating in <a href="/wiki/Brooklyn">Brooklyn</a>, cheeses of this style are now produced all over the world.`
  )
  $('.country-name').html(`<a href="https://toddwords.com/r00st">Brooklyn</a>`)
}



function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}
