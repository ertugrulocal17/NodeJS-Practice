function getData(data) {
  return new Promise((res, rej) => {
    console.log('Veriler Aliniyor');

    if (data) {
      res('Veriler Alindi');
    } else {
      rej('Veriler Alinamadi');
    }
  });
}

function cleanData(receivedData) {
  return new Promise((res, rej) => {
    console.log('Veriler düzenleniyor...');
    if (receivedData) {
      res('Veriler düzenlendi.');
    } else {
      rej('Veriler düzenlenemedi');
    }
  });
}

/*
getData(true)
  .then(result => {
    console.log(result);
    return cleanData(false);
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
*/

// Async - Await //
/*
async function processData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (err) {
    console.log(err);
  }
}
processData();
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

async function showBooks() {
  try {
    await addBook({ name: 'Kitap 12', author: 'Yazar 12' });
    listBooks();
  } catch (err) {
    console.log(err);
  }
}
showBooks();
