//This is the code that will be injected on any page


// $(target).trigger('click')

if(checkWebAddress("risdedu.instructure.com")){
  $('#global_nav_profile_link').trigger("click")

  setTimeout(function(){
    $('button:contains("Logout")').trigger('click')
  },500)
}


function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0
}