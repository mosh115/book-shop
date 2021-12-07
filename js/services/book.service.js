'use strict'

const STORAGE_KEY = 'DB-Books'

var gBooks
const gTitels = ['Green Theft', 'Moons Of Thoughts', 'The Seventh Dreams', 'Windows In The Hunter', 'Child In The Hustler']

_createBooks()


function getBook(bookId) {
    const book = gBooks.find(book => bookId === book.id)
    return book;
}

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => bookId === book.id)
    gBooks.splice(bookIdx, 1);
    _saveBooksToStorage();
}

function addBook(title, price) {
    const book = _createBook(title, price);
    gBooks.unshift(book);
    _saveBooksToStorage();
    return book;
}

function updateBook(bookId, bookPrice) {
    const book = gBooks.find(book => bookId === book.id)
    book.price = bookPrice
    _saveBooksToStorage();
    return book
}

function setRate(rate, bookId) {
    const book = gBooks.find(book => bookId === book.id)
    book.rate = rate
    _saveBooksToStorage();
    return book
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = []

        for (let i = 0; i < 10; i++) {
            var title = gTitels[getRandomInt(0, gTitels.length)]
            books.push(_createBook(title))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _createBook(title, price = getRandomInt(50, 201)) {
    return {
        id: makeId(),
        title: title,
        price: price,
        description: makeLorem(),
        rate: 0
    }
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}