/*
h3.book-card
p.author
div.footer
    <img alt="Delete book" src="assets/trash.svg">
    <p class="no-pages">255 pages</p>
    <img alt="Read" src="assets/book-open-check.svg">
*/

let bookLibrary = document.querySelector('#book-library')
let formContainer = document.querySelector('#form-container')
formContainer.style.transform = 'translateY(0px)'
let header = document.querySelector('#header')
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let submitBtn = document.querySelector('#submit-btn')
