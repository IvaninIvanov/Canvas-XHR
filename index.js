/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP778885";
}



// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawStickFigure(el, x, y, facing) {
  var c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face


  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-40)
    line(c, x+20, y, x, y-40)
  }

  function drawFace(c, x, y, facing) {
    // if the `facing` parameter is not given, the stick figure will face towards us
    if (facing == null) facing = 90;

    // make sure the `facing` parameter is between 0 and 360
    facing = facing % 360; // that's like the mathematical remainder after a division
    if (facing < 0) facing += 360;

    if (facing > 180) return;  // facing away from us, don't draw a face

    // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
    var faceOffset = 0;
    if (facing <= 180) {
      faceOffset = (facing-90)/9;
    }

    circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
    circle(c, x+7-faceOffset, y-5, 1)

    // decrease the smile size here
    var smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
    var startAngle = rad(90-smileSize/2-2*faceOffset)
    var endAngle   = rad(90+smileSize/2-2*faceOffset)
    arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
  }

  // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // draw a circle on canvas context `c`, centered on x,y, with radius r
  // also fill the circle with white (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath()
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
  }


  // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
  function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false)
    c.stroke();
  }

  // convert from degrees to radians
  function rad(x) {
    return x * Math.PI / 180;
  }

}

function drawLines(elem) {
  var c = elem.getContext("2d");
  c.beginPath();
  c.moveTo(100,100);
  c.lineTo(500,100);
  c.stroke();
  c.beginPath();
  c.moveTo(100,200);
  c.lineTo(300,200);
  c.stroke();
}

function drawTriangle(elem, x1, y1, x2, y2, x3, y3) {
  var c = elem.getContext("2d");
  c.beginPath();
  c.fillStyle = "#0f0";
  c.strokeStyle = "#f00";
  c.lineWidth = 2;
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.lineTo(x3,y3);
  c.lineTo(x1,y1);
  c.stroke();
  c.fill();
}


// ************************** //
// drawSpartacus task start  //
// ************************* //

function drawSpartacus(elem) {
  var x, y, facing;
  var c = elem.getContext("2d");
  // set drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face

}

function drawLimbs(c, x, y) {
  line(c, x-20, y, x, y-40)
  line(c, x+20, y, x, y-40)
}

function drawFace(c, x, y, facing) {
  // if the `facing` parameter is not given, the stick figure will face towards us
  if (facing == null) facing = 90;

  // make sure the `facing` parameter is between 0 and 360
  facing = facing % 360; // that's like the mathematical remainder after a division
  if (facing < 0) facing += 360;

  if (facing > 180) return;  // facing away from us, don't draw a face

  // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
  var faceOffset = 0;
  if (facing <= 180) {
    faceOffset = (facing-90)/9;
  }

  circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
  circle(c, x+7-faceOffset, y-5, 1)

  // decrease the smile size here
  var smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
  var startAngle = rad(90-smileSize/2-2*faceOffset)
  var endAngle   = rad(90+smileSize/2-2*faceOffset)
  arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
}

// draw a line on canvas context `c`, from point x1,y1 to point x2,y2
function line(c, x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.stroke();
}

// draw a circle on canvas context `c`, centered on x,y, with radius r
// also fill the circle with white (so it's not transparent)
function circle(c, x, y, r) {
  c.beginPath()
  c.fillStyle="#fff"
  c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
  c.fill()
  c.stroke()
}


// draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
function arc(c, x, y, r, angleStart, angleEnd) {
  c.beginPath();
  c.arc(x, y, r, angleStart, angleEnd, false)
  c.stroke();
}

// convert from degrees to radians
function rad(x) {
  return x * Math.PI / 180;
}

// ************************** //
//   drawSpartacus task END  //
// ************************* //



function drawGrid(elem) {
  var c = elem.getContext("2d");
  var step = 50;
  c.beginPath();
    for (var x=0;x<=elem.width;x+=step) {
      c.moveTo(x, 0);
      c.lineTo(x, elem.height);
    }
    c.strokeStyle = '#000';
    c.lineWidth = 1;
    c.stroke();

    c.beginPath();
    for (var y=0;y<=elem.height;y+=step) {
      c.moveTo(0, y);
      c.lineTo(elem.width, y);
    }
    c.strokeStyle = '#000';
    c.lineWidth = 1;
    c.stroke();
}

function drawCzechFlag(elem) {
  var c = elem.getContext("2d");
  var h = elem.height;
  var w = elem.width;
  // to do
}

function showMessage(elem, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
	xhr.send();
	elem.innerHTML = xhr.responseText;
}

function showList(target, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
	xhr.send();
	var data = JSON.parse(xhr.responseText);
  for (var i = 0; i < data.length; i++) {
    var elem = document.createElement("li");
    var t = document.createTextNode(data[i]);
    elem.appendChild(t);
    target.appendChild(elem);
  };
}

function startShowingMessage(target, url) {
  setInterval(
    function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send();
      target.innerHTML = xhr.response;
    }, 1000
  )
}

function handleError(target, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  target.innerHTML = xhr.response;
  if (xhr.status != 200) {
    target.innerHTML = "OH DEAR";
  }
}

function drawBox(context, url) {
  setInterval (
   function() {
      // get coordinates
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.send();

      // setup
      var c = context.getContext("2d");
      // var coordinates = xhr.response;
      // var x = coordinates.x;
      // var y = coordinates.y;
      c.strokestyle = "#000";

      //draw
      c.beginPath();
      c.rect(xhr.response.x,xhr.response.y,20,20);
      c.stroke;
   }, 1000
  )
}
