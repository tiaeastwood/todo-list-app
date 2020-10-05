// Create a "bin" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let trash = document.createTextNode("🗑️");
  span.className = "bin";
  span.appendChild(trash);
  myNodelist[i].appendChild(span);
}


// Click on bin button to delete the current list item
const bin = document.getElementsByClassName("bin");
const list = document.querySelector('ul');
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
const taskButton = document.getElementById('addBtn');
taskButton.addEventListener("click", newTask)

function newTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("textInput").value;
  let dateValue = document.getElementById("dateInput").value;
  let textInput = document.createTextNode(dateValue + ' - ' + inputValue);
  li.appendChild(textInput);
  if (inputValue === '') {
    alert("You didn't add a task!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  //clear the input boxes ready for a new task
  document.getElementById("textInput").value = '';
  document.getElementById("dateInput").value = '';


  // append the bin function after each new list item 
  let span = document.createElement("span");
  let bin = document.createTextNode("🗑️");
  span.className = "bin";
  span.appendChild(bin);
  li.appendChild(span);

  for (let i = 0; i < bin.length; i++) {
    bin[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

