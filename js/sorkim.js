var x = document.getElementById("myDIV");
var x1 = document.getElementById("myDIV1");
var x2 = document.getElementById("myDIV2");

x.style.display = "none";
x1.style.display = "none";
x2.style.display = "none";

function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction1() {
  if (x1.style.display === "none") {
    x1.style.display = "block";
  } else {
    x1.style.display = "none";
  }
}
function myFunction2() {
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
}