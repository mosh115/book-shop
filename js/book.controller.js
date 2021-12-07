'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks();

    const srtHTMLs = books.map(book => {
        return `<tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.price}</td>
                    <td>${book.rate}</td>
                    <td class="btn-action flex">
                        <button onClick ="onReadBook('${book.id}')" class="read">Read</button>
                        <button onClick ="onUpdateBook('${book.id}')" class="update">Update</button>
                        <button onClick ="onRemoveBook('${book.id}')" class="delete">Delete</button>
                    </td>
                </tr>`
    })

    document.querySelector('.table-content').innerHTML = srtHTMLs.join('');
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    const title = prompt('Title book?');
    const price = +prompt('price?');
    if (title && price) {
        addBook(title, price)
        renderBooks();
    }
}

function onUpdateBook(bookId) {
    const bookPrice = +prompt('price?');
    if (bookPrice) {
        updateBook(bookId, bookPrice);
        renderBooks();
    }

}

function onReadBook(bookId) {
    const book = getBook(bookId);
    openModal(book);

}

function onSetRate(elRate) {
    setRate(elRate.value, elRate.dataset.id)
    renderBooks();
}

function openModal(book) {
    console.log(book)
    var modal = document.querySelector('.modal')
    modal.style.display = 'block'
    document.querySelector('.title-modal').innerText = book.title;
    document.querySelector('.price-modal').innerText = book.price;
    document.querySelector('.desc-modal').innerText = book.description;
    document.querySelector('.rate').value = book.rate;

    //add book id to rate button
    var elRate = document.querySelector('.rate')
    elRate.dataset.id = book.id;
}

function closeModal() {

    var modal = document.querySelector('.modal')
    modal.style.display = "none";
}





