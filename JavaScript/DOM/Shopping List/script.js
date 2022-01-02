let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let listItem = document.querySelectorAll("li");
let deleteBtns = document.getElementsByClassName("delete");

for (delBtn of deleteBtns) {
  delBtn.addEventListener("click", removeParent, false);
}

function removeParent(event) {
  event.target.removeEventListener("click", removeParent, false);
  event.target.parentNode.remove();
}

function createListElement() {
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = removeParent;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteBtn);

  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (input.value.length > 0) createListElement();
}

function addListAfterEnterPress(event) {
  if (input.value.length > 0 && event.keyCode === 13) createListElement();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnterPress);
