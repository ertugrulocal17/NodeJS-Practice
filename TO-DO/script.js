const ulDOM = document.querySelector('#list');
const textDOM = document.querySelector('#task');

let listArr = localStorage.getItem('Items')
  ? JSON.parse(localStorage.getItem('Items'))
  : [];
showItem();

function showItem() {
  if (localStorage.getItem('Items')) {
    listArr.forEach((task, index) => {
      addItem(task, index);
    });
  }
}
function addItem(task, index) {
  let liDOM = document.createElement('li');
  let textLiDOM = document.createTextNode(task);
  let icon = document.createElement('i');
  icon.classList.add('fas', 'fa-times', 'close');
  icon.addEventListener('click', function () {
    sutDown(index, icon);
  });
  liDOM.addEventListener('click', completeTask);
  liDOM.append(textLiDOM);
  liDOM.append(icon);
  ulDOM.append(liDOM);
}

function newElement() {
  if (textDOM.value.trim('').length != 0) {
    listArr.push(textDOM.value);
    localStorage.setItem('Items', JSON.stringify(listArr));
    addItem(textDOM.value, listArr.length - 1);
  }
  textDOM.value = '';
}
function sutDown(index, task) {
  listArr.splice(index, 1);
  localStorage.setItem('Items', JSON.stringify(listArr));
  task.parentElement.remove();
}
function completeTask() {
  this.classList.toggle('checked');
}
