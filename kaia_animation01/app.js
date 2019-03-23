// ***INTERACTIVE ANIM*** //

// 1. RESIZING THE CONTENT
// 2. HOVER ANIMATION
// 3. SCROLL ANIMATION
// 4. KEYDOWN ANIMATION
// 5. INFO



$(document).ready(function(){


// === 1. This is RESIZING THE CONTENT(.WRAPPER) === //
  var wrapper = $(".wrapper");
  var win = $(window);

  win.resize(function(){
    wrapper.css({
      left : win.width() / 2 - wrapper.outerWidth() / 2 ,
      top : win.height() / 2 - wrapper.outerWidth() / 2
    })
  }).trigger("resize");



// === 2. This is HOVER ANIMATION === //

  var spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ];

  var spriteFrames2 = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(0)' }
  ];


var hover = document.getElementById("hover");
var scroll = document.getElementById("scroll");
var keydown = document.getElementById("keydown");




$("#hover").hover(function(){
  //mouse in
  // console.log("hovering");

  hover.animate(
    spriteFrames, {
   easing: 'steps(13, end)',
   duration: 2600,
   playbackRate: 1,
   iterations: Infinity
 });

}, function(){
  //mouse out
  // console.log("out");

  hover.animate(
    spriteFrames2, {
   duration: 1,
   iterations: Infinity
 });

});




// === 3. This is SCROLL ANIMATION === //

var x = 1;

$(document).bind('mousewheel DOMMouseScroll', function(event){

    if (event.originalEvent.wheelx > 0 || event.originalEvent.detail < 0) {
        // scroll up = move frame backward
        x>=1 ? x +=(-1) : x = 12;
        // console.log("up");
        // console.log(x);
        var transVal = "translate( 0, " + (-400 * x) + "px)";
        $("#scroll").css("transform", transVal)
    }
    else {
        // scroll down = move frame forward
        x<=11 ? x += 1 : x = 0;

        // console.log(x);
        var transVal = "translate( 0, " + (-400 * x) + "px)";
        $("#scroll").css("transform", transVal)

    }

});





// === 4. This is KEYDOWN ANIMATION === //
// KAIA ORIGINAL:
// $(document).on("keydown", function(){
//
//   var keyCode = KeyboardEvent.charCode;
//   console.log(keyCode);
//   //I should get the keyCode but I'm only getting "undefined"
//
//
//   var y = 1;
//
//   // left arrow = 37, right arrow = 39
//
//   if( keyCode === 37 ) {
//     // left arrow = move frame backward
//     y>=1 ? y +=(-1) : y = 12;
//     // console.log(y);
//
//     var transVal = "translate( 0, " + (-400 * y) + "px)";
//     $("#keydown").css("transform", transVal)
//
//   } else if ( keyCode === 39 ) {
//     //right arrow = move frame forward
//     y<=11 ? y += 1 : y = 0;
//
//     // console.log(y);
//     var transVal = "translate( 0, " + (-400 * y) + "px)";
//     $("#keydown").css("transform", transVal)
//
//   };
//
// });
// JUSTIN:

// you need an 'event' to listen to, to grab 'which' event happened
var y = 1;

$(document).on("keydown", function( event ){
  // this is the key
  var key = event.which;
  // console.log(key);

  if( key === 37 ) {
    // left arrow = move frame backward
    y>=1 ? y +=(-1) : y = 12;
    // console.log(y);

    var transVal = "translate( 0, " + (-400 * y) + "px)";
    $("#keydown").css("transform", transVal);

  } else if ( key === 39 ) {
    //right arrow = move frame forward
    y<=11 ? y += 1 : y = 0;
    // console.log(y)
    ;
    var transVal = "translate( 0, " + (-400 * y) + "px)";
    $("#keydown").css("transform", transVal);

  };

});




// === 5. This is INFO === //

$("#hover").hover(function(){
  $("#info-0").css("display", "none")
  $("#info-2").css("display", "none")
  $("#info-3").css("display", "none")
}, function(){
  $("#info-0").css("display", "block")
  $("#info-2").css("display", "block")
  $("#info-3").css("display", "block")
});

$("#scroll").hover(function(){
  $("#info-0").css("display", "none")
  $("#info-1").css("display", "none")
  $("#info-3").css("display", "none")
}, function(){
  $("#info-0").css("display", "block")
  $("#info-1").css("display", "block")
  $("#info-3").css("display", "block")
});

$("#keydown").hover(function(){
  $("#info-0").css("display", "none")
  $("#info-1").css("display", "none")
  $("#info-2").css("display", "none")
}, function(){
  $("#info-0").css("display", "block")
  $("#info-1").css("display", "block")
  $("#info-2").css("display", "block")
});








});
