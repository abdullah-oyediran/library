let app = document.querySelector('#app')
let bookLibrary = document.querySelector('#book-library')
let formContainer = document.querySelector('#form-container')
let header = document.querySelector('#header')
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let submitBtn = document.querySelector('#submit-btn')
let form = document.querySelector('form')
let showFormBtn = document.querySelector('#show-form')

let books = [];

// Functions
function displayBooks() {
    for (let bookItem of books) {
        let book = document.createElement('div')
        book.classList.add('book')

        let bookCard = document.createElement('h3')
        bookCard.textContent = bookItem.title
        bookCard.classList.add('book-card')
        book.appendChild(bookCard)

        let author = document.createElement('p')
        author.classList.add('author')
        author.textContent = bookItem.author
        book.appendChild(author)

        let footer = document.createElement('div')
        footer.classList.add('footer')

        let deleteIcon = document.createElement('img')
        deleteIcon.src = '../assets/trash.svg'
        deleteIcon.alt = 'Delete this book'
        footer.appendChild(deleteIcon)

        let pages = document.createElement('p')
        pages.classList.add('no-pages')
        pages.textContent = `${bookItem.pages} pages`
        footer.appendChild(pages)

        let bookIcon = document.createElement('img')
        bookIcon.src = '../assets/book-open-check.svg'
        bookIcon.alt = 'Read'
        footer.appendChild(bookIcon)

        book.appendChild(footer)

        bookLibrary.appendChild(book)
    }
}

function addNewBook() {
    if (
        titleInput.value.trim() === '' || authorInput.value.trim() === '' || pagesInput.value.trim() === ''
    ) return

    let book = {}
    book.title = titleInput.value.trim()
    book.author = authorInput.value.trim()
    book.pages = Number(pagesInput.value.trim())

    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''

    books.unshift(book)

    displayBooks()
}

function showForm() {
    app.classList.add('form-visible')
}

// Event Listeners
document.addEventListener('DOMContentLoaded', displayBooks)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addNewBook();
})

showFormBtn.addEventListener('click', showForm)