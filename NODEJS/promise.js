// ***************** PROMISE ****************** //
// Bir işlemin sonucunu temsil eden bir js objesidir
/*
const promise1 = new Promise((resolve, reject) => {
  //resolve('Veriler Alındı');
  //reject('Hata');
});
console.log(promise1);
*/
/*
const promise1 = new Promise((resolve, reject) => {
  resolve('Veriler Alindi');
  reject('Baglanti Hatasi');
});

promise1.then(value => console.log(value)).catch(err => console.log(err));
*/
const books = [
  { name: 'Kitap 1', author: 'Yazar 1' },
  { name: 'Kitap 2', author: 'Yazar 2' },
  { name: 'Kitap 3', author: 'Yazar 3' },
];

const listBooks = () => {
  books.map(book => {
    console.log(book.name, book.author);
  });
};

const addBook = newBook => {
  const promise1 = new Promise((res, rej) => {
    books.push(newBook);
    res(books);
    rej('Hata');
  });
  return promise1;
};

addBook({ name: 'Kitap 10', author: 'Yazar 10' })
  .then(() => {
    console.log('Yeni Liste');
    listBooks();
  })
  .catch(err => console.log(err));
