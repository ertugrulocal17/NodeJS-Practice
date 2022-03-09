// CALLBACK //
const blogPost = [
  { title: 'Software', img: 'img 1', date: '3/9/22' },
  { title: 'Computer', img: 'img 2', date: '4/9/22' },
  { title: 'Node JS', img: 'img 3', date: '5/9/22' },
  { title: 'React', img: 'img 4', date: '6/9/22' },
];

const listPost = () => {
  blogPost.map(blog => {
    console.log(blog.title);
  });
};

// listPost();

const addPost = (newPost, callback) => {
  blogPost.push(newPost);
  callback();
};

// addPost({ title: 'Express.js', img: 'img 5', date: '7/9/22' }, listPost);

// PROMISE //

const blogPost1 = [
  { title: 'Software', img: 'img 1', date: '3/9/22' },
  { title: 'Computer', img: 'img 2', date: '4/9/22' },
  { title: 'Node JS', img: 'img 3', date: '5/9/22' },
  { title: 'React', img: 'img 4', date: '6/9/22' },
];

const listPost1 = () => {
  blogPost1.map(blog => {
    console.log(blog.title);
  });
};

const addPost1 = newPost1 => {
  const promise1 = new Promise((res, rej) => {
    blogPost1.push(newPost1);
    res(blogPost1);
    rej('Something went wrong');
  });
  return promise1;
};
/*
addPost1({ title: 'Express.js', img: 'img 5', date: '7/9/22' })
  .then(() => {
    console.log('New Posts');
    listPost1();
  })
  .catch(err => console.log(err));
*/

// ASYNC //

const blogPost2 = [
  { title: 'Software', img: 'img 1', date: '3/9/22' },
  { title: 'Computer', img: 'img 2', date: '4/9/22' },
  { title: 'Node JS', img: 'img 3', date: '5/9/22' },
  { title: 'React', img: 'img 4', date: '6/9/22' },
];

const listPost2 = () => {
  blogPost2.map(blog => {
    console.log(blog.title);
  });
};

const addPost2 = newPost1 => {
  const promise1 = new Promise((res, rej) => {
    blogPost2.push(newPost1);
    res(blogPost2);
    rej('Something went wrong');
  });
  return promise1;
};

async function showAllPost() {
  try {
    await addPost2({ title: 'Express.js', img: 'img 5', date: '7/9/22' });
    listPost2();
  } catch (err) {
    console.log(err);
  }
}

showAllPost();
