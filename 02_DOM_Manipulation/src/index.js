//BookStore has been moved to data.js 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// TODO CRUD

// TODO 💡 Create a function that sets the text content of the header to the bookstore name.
{/* <h1 id="store-name"></h1> */}
(() => {
  // querySelector => targets elements by ANYTHING
  // getElementById => ONLY targets elements by id (if any)

  //! innerText -> is also aware of style and will not return the text of hidden elements, whereas textContent will.
  //! textContent -> gets the content of all elements, including <script> and <style> elements
  //! innerHTML -> includes the HTML markup and deserves a special WARNING

  // document.getElementById('store-name').innerText = bookStore['name']
  document.querySelector('#store-name').innerText = bookStore['name']
})()
// setHeader()

// TODO 💡 Create a function that grabs all the divs from the footer. 
// TODO Render the bookstore name, address, and hours
const setFooter = () => {
  // step 0. target the elements
  // document.querySelector('#name').innerText = bookStore.name
  // document.querySelector('#number').innerText = bookStore.number
  // document.querySelector('#address').innerText = bookStore.address

  document.querySelectorAll("footer div").forEach(div => div.innerText = bookStore[div.id])
  //! querySelectorAll returns a NodeList which IS NOT an array but you can make it one using Array.from(nodeListVar)
}
setFooter()

// TODO 💡 Create a new Node with some random text and append it to the DOM
const addParagraph = () => {
  const p = document.createElement("p") //! it creates a new Node
  p.innerText = 'random'
  document.querySelector('main').appendChild(p)
  // document.querySelector('main').insertAdjacentElement('afterend', p)
}
// addParagraph()
// TODO 💡 Update the existing header and replace its text content to anything you like

// TODO 💡 Remove an element of your choice from the DOM
const removeFooter = () => { 
  document.querySelector('footer').remove()
}
// removeFooter()

// TODO 💡 Exercise After Break
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!

function renderBook(book) {
  const li = document.createElement('li')
  li.className += ' list-li'
  // li.classList.add('list-li')

  // li.setAttribute('class', 'list-li')
  const h3 = document.createElement('h3')
  h3.innerText = book.title
  
  const authorP = document.createElement('p')
  authorP.innerText = book.author
  
  const priceP = document.createElement('p')
  priceP.innerText = formatPrice(book.price)
  
  const img = document.createElement('img')
  img.src = book.imageUrl
  img.alt = `${book.title} cover`
  
  const button = document.createElement('button')
  button.innerText = 'Delete'

  li.append(h3, authorP, priceP, img, button)
  document.querySelector('#book-list').appendChild(li)
}
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>

  const renderBookHTML = (book) => {
    const booksUl = document.querySelector('#book-list')
    booksUl.innerHTML += `
      <li class="list-li">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.price}</p>
        <img src='${book.imageUrl}'/>
        <button>Delete</button>
      </li>
    `
  }

bookStore['inventory'].forEach(renderBookHTML)
// bookStore['inventory'].forEach(book => renderBookHTML(book))