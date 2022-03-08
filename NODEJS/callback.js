/* ******** CALLBACK ********* */
/*
console.log('1. Görev');
console.log('2. Görev');
console.log('3. Görev');
*/

/*
const func1 = () => {
  console.log('Func 1 tamamlandı');
};

const func2 = () => {
  console.log('Func 2 tamamlandı');
};

func2();
func1();
*/

/*
const func2 = () => {
  console.log('Func 2 tamamlandı');
  func3();
};
const func1 = () => {
  console.log('Func 1 tamamlandı');
  func2();
};
const func3 = () => {
  console.log('Func 3 tamamlandı');
};

func1();
*/
/*
const func1 = () => {
  console.log('Func 1 tamamlandı');
  func3();
};
const func2 = () => {
  console.log('Func 2 tamamlandı');
};
const func3 = () => {
  console.log('Func 3 tamamlandı');
  func2();
};
func1();
*/
// JS her zaman senkron ve single thread olarak çalışır
// Single thread aynı anda tek bir işlem yapabilmesi

/*
let x = 5;
console.log('1. Gelen Veri: ', x);

setTimeout(() => {
  x += 5;
  console.log('2. Gelen Veri: ', x);
}, 5000);

x += 5;
console.log('3. Gelen Veri: ', x);
*/
/*
const books = [
  { name: 'Book 1', author: 'Yazar 1' },
  { name: 'Book 2', author: 'Yazar 2' },
  { name: 'Book 3', author: 'Yazar 3' },
];
const listBooks = () => {
  books.map(book => {
    console.log(book.name);
  });
};

const addBook = newBook => {
  books.push(newBook);
};
listBooks();
// console.log(books[3]); // Undefined
addBook({ name: 'Book 4', author: 'Yazar 4' });
// console.log(books[3]); // { name: 'Book 4', author: 'Yazar 4' }
*/

const books = [
  { name: 'Book 1', author: 'Yazar 1' },
  { name: 'Book 2', author: 'Yazar 2' },
  { name: 'Book 3', author: 'Yazar 3' },
];
const listBooks = () => {
  books.map(book => {
    console.log(book.name);
  });
};
const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};
addBook({ name: 'Book 4', author: 'Yazar 4' }, listBooks);
