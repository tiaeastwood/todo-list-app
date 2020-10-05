// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let cross = document.createTextNode("\u00D7"); //unicode multiplication sign
  span.className = "close";
  span.appendChild(cross);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const taskButton = document.getElementById('addBtn');
taskButton.addEventListener("click", newTask)

function newTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let textInput = document.createTextNode(inputValue);
  li.appendChild(textInput);
  if (inputValue === '') {
    alert("You didn't write anything, silly!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // append the close function after each new list item 
  let span = document.createElement("SPAN");
  let cross = document.createTextNode("\u00D7"); 
  span.className = "close";
  span.appendChild(cross);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
