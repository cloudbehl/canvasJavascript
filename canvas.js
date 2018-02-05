var image = new Image();
var img = document.getElementById("abc")

image.crossOrigin = "anonymous";
image.onload = function(){
  var imgWidth = img.clientWidth;
  var imgHeight = img.clientHeight;   
  var canvasInWidth = imgWidth/10;
  var canvasInHeight = imgHeight/10;
  var perPeice = (imgWidth * imgHeight)/100;
  var images = [];
   for(var i=0; i<Math.ceil(canvasInHeight); i++){ 
     for(var j=0; j<Math.ceil(canvasInWidth); j++){ 
       var canvas = document.createElement("canvas")
       var context = canvas.getContext("2d");
       context.drawImage(this, 10*j, 10*i, 10 , 10, 30, 0, 10, 10);
       images.push(canvas.toDataURL());
      }
     console.log(images.length)
   }
  for(var i = 0; i < images.length; i++){
    $(".sample-div").append("<img src='"+images[i]+"' />");
  }
};

image.src = 'https://www.gravatar.com/avatar/7b67c827ee1671ba3b43f4aebf6794fb?s=128&d=identicon&r=PG';


