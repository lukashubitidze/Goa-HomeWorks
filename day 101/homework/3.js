class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const book1 = new Book("1984", "George Orwell", 328);

console.log(book1.title);
console.log(book1.author);
console.log(book1.pages);