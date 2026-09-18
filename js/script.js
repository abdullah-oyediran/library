let bookLibrary = document.querySelector('#book-library')
let formContainer = document.querySelector('#form-container')
formContainer.style.transform = 'translateY(0px)'
let header = document.querySelector('#header')
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let submitBtn = document.querySelector('#submit-btn')

let books = [];

/*
h3.book-card
p.author
div.footer
    <img alt="Delete book" src="assets/trash.svg">
    <p class="no-pages">255 pages</p>
    <img alt="Read" src="assets/book-open-check.svg">
*/

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
        pages.textContent = bookItem.pages
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
        titleInput.value.trim() === '' && authorInput.value.trim() === '' && pagesInput.value.trim() === ''
    ) return

    let book = {}
    book.title = titleInput.value.trim()
    book.author = authorInput.value.trim()
    book.pages = pagesInput.value.trim()

    books.unshift(book)
    
    displayBooks()
}

document.addEventListener('DOMContentLoaded', displayBooks)
