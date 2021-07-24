// Listen for button click

var btn = $('.submit-btn');
var container = $('.container');

var noteInput = $('.note');

btn.on("click", appendToDo);



// Event Handler:
  // grab input
  // append a new element to card-container element

function appendToDo() {
  event.preventDefault();
  console.log("hi");
  var note = $('.note').val();

  container.append(`
  <section class="card-container">
    <p>${note}</p>
    <button class="delete">Delete</button>
  </section>
  
`);
  noteInput.val("");
}

// deleting ToDo:

container.on("click", deleteCard);

function deleteCard() {
  // event.target refers to the element that was clicked on
  // className checks the class that is on an element
  // if it was an element with the class of delete...
  if (event.target.className === "delete") {
    // parentNode travels up and looks for the direct parent element
    // then we will remove its PARENT element, which will be a card
    event.target.parentNode.remove();
  }
}