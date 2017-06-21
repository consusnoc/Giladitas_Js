

setInterval(function(){
  var x= Math.round(Math.random() *255);
  var y= Math.round(Math.random() *255);
  var z= Math.round(Math.random() *255);
  var bg="background:rgb("+x+", "+y+", "+z+"); ";
  var element=document.getElementById('random_background');
  element.style=bg;
}, 1000);

