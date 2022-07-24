
function makeBox() {
  var height=100;
  var width=200;
  var depth=150;
  var top = document.getElementById("top");
  top.width=depth;
  top.height=height;
  top.x=height;
  top.y=0;
  var middle = document.getElementById("middle");
  middle.width=depth;
  middle.height=width;
  middle.x=height;
  middle.y=height;
  var bottom = document.getElementById("bottom");
  bottom.width=depth;
  bottom.height=height;
  bottom.x=height+width;
  bottom.y=height;
  var left = document.getElementById("left");
  left.width=height;
  left.height=width;
  left.x=height;
  left.y=height;
  right.x=height+depth;
  var right = document.getElementById("right");
  right.width=depth;
  right.height=height;
  right.y=height;
}

makeBox()
