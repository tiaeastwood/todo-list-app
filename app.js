const myNodelist = document.getElementsByTagName("LI");
const bin = document.getElementsByClassName("bin");
const list = document.querySelector('ul');
const taskButton = document.getElementById('addBtn');


taskButton.addEventListener("click", newTask)

// Create a "bin" button and append it to each list item
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let trash = document.createTextNode("🗑️");
  span.className = "bin";
  span.appendChild(trash);
  myNodelist[i].appendChild(span);
}


// Click on bin button to delete the current list item
for (let i = 0; i < bin.length; i++) {
  bin[i].onclick = function () {
    let listItem = this.parentElement;
    list.removeChild(listItem);
  }
}

// toggle checked css 
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button

function newTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("textInput").value;
  let textInput = document.createTextNode(inputValue);
  li.appendChild(textInput);
  if (inputValue === '') {
    alert("You didn't add a task!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("textInput").value = '';



  // append the bin function after each new list item 
  const span = document.createElement("span");
  const createBin = document.createTextNode("🗑️");
  span.className = "bin";
  span.appendChild(createBin);
  li.appendChild(span);

  for (let i = 0; i < bin.length; i++) {
    bin[i].onclick = function () {
      let listItem = this.parentElement;
      list.removeChild(listItem);
    }
  }
}
