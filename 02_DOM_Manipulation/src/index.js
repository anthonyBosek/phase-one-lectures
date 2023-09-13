//BookStore has been moved to data.js 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// TODO CRUD

// TODO 💡 Create a function that sets the text content of the header to the bookstore name.
// TODO 💡 Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours

// TODO 💡 Create a new Node with some random text and append it to the DOM

// TODO 💡 Update the existing header and replace its text content to anything you like

// TODO 💡 Remove an element of your choice from the DOM

// TODO 💡 Exercise After Break
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>