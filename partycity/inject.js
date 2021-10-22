//This is the code that will be injected on any page
setTimeout(function(){
  $('.image-quad-holder-bottom img').remove()
  $('.image-quad-holder-bottom h3').text("I am a spooky ghost BWEH")
  $('.link-farm-transparent-block-147618-1--1 a').text("BOO")
  $('.product-title a:contains("Peanut Butter Cups")').parent().parent().find(".price-container span").text("$20000")
  //$('img').attr('src', newimageURL)
}, 1000)
