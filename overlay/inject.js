//This is the code that will be injected on any page
$('body').prepend(`
  <div style="
  position:fixed; 
  top:0;left:0; 
  width:100vw; 
  height:100vh; 
  background:url(https://media3.giphy.com/media/pePvFuY35MP4sRt6Kt/giphy.gif?cid=ecf05e47577tctifar9ix13wvj3oqobn9w3jjwhryl3ogvjp&rid=giphy.gif&ct=s) no-repeat center center fixed; 
  background-size:cover; 
  z-index:99999;
  pointer-events:none"></div>
`)
