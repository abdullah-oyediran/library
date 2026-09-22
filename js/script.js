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
let hideFormBtn = document.querySelector('#hide-form')
let emptyLibMarkup = document.querySelector('#empty-lib-markup')


let books = [];

// Functions
function displayBooks() {
    bookLibrary.innerHTML = ''
    emptyLibMarkup.classList.toggle('hidden', books.length !== 0)

    for (let bookItem of books) {
        let book = document.createElement('div')
        book.classList.add('book')
        book.dataset.id = bookItem.id

        let bookCard = document.createElement('h3')
        bookCard.textContent = bookItem.title + book.id
        bookCard.classList.add('book-card')
        book.appendChild(bookCard)

        let author = document.createElement('p')
        author.classList.add('author')
        author.textContent = bookItem.author
        book.appendChild(author)

        let footer = document.createElement('div')
        footer.classList.add('footer')

        let deleteIconBtn = document.createElement('button')
        deleteIconBtn.title = 'Delete this book'
        let deleteIcon = document.createElement('img')
        deleteIcon.src = './../assets/trash.svg'
        deleteIcon.alt = 'Delete this book'
        deleteIconBtn.appendChild(deleteIcon)
        deleteIconBtn.addEventListener('click', () => {
            deleteBook(deleteIconBtn.parentElement.parentElement.dataset.id)
            displayBooks()
        })
        footer.appendChild(deleteIconBtn)

        let pages = document.createElement('p')
        pages.classList.add('no-pages')
        pages.textContent = `${bookItem.pages} pages`
        footer.appendChild(pages)

        let bookIconBtn = document.createElement('button')
        bookIconBtn.title = 'Mark this book as read'
        let bookIcon = document.createElement('img')
        bookIcon.src = './../assets/book-open-check.svg'
        bookIcon.alt = 'Read'
        bookIconBtn.appendChild(bookIcon)
        footer.appendChild(bookIconBtn)

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
    book.id = crypto.randomUUID()

    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''

    books.unshift(book)

    displayBooks()
}

function showForm() {
    app.classList.add('form-visible')

    setTimeout(() => {
        titleInput.focus()
    }, 600)
}

function hideForm() {
    app.classList.remove('form-visible')
}

function deleteBook(id) {
    let index = books.findIndex(book => book.id === id)
    if (index !== -1) {
        books.splice(index, 1)
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', displayBooks)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addNewBook();
})

showFormBtn.addEventListener('click', showForm)

hideFormBtn.addEventListener('click', hideForm)