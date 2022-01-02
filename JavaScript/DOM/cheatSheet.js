// window.document --> javascript object of html file
// window is by default but we always have to type document

// SELECTORS ---------------------------------------------------------

// These two returns an array of elements
getElementsByTagName("");
getElementsByClassName("");
// This return one element
getElementById("");

//finds the first item it finds
querySelector("tagName");
// selects all items
querySelectorAll("tagName1, tagName2");

// gets attribute value of an item
querySelector("a").getAttribute("href");
// changes attribute
querySelector("a").setAttribute("href");

// changes styles using inline
querySelector("").style.background = "yellow";
// changes styles by adding a class to the element
querySelector("").className = "className";
// changes styles using editing/removing/toggling class list
querySelector("").classList.add("className");

// changing content of element
querySelector("h1").innerHTML = "<strong>Changed!!</strong>";
// getting the parent element (can be nestd e.g. parentELement.parentElement)
querySelector("h1").parentElement;
// getting the children elements
querySelector("h1").children;

// ** IMPORTANT to cache selectors in variables

// EVENTS ---------------------------------------------------------------------
var button = document.getElementsByTagName("button")[0];
// other events besides "click": "mouseenter," "mouseleave"
button.addEventListener("click", function () {
  console.log("clicked");
});
