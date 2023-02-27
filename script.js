//your code here!

// select the list element
const list = document.querySelector('#infi-list');

const listItems = list.children;

function addItems() {
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = `List Item ${listItems.length + i + 1}`;
    list.appendChild(listItem);
  }
}

for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.innerText = `List Item ${i + 1}`;
  list.appendChild(listItem);
}

window.addEventListener('scroll', () => {
	if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight)
    addItems();
});
