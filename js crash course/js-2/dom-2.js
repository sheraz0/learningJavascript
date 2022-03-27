var itemlist = document.querySelector('#items');
//parentNode
console.log(itemlist.parentnode);
itemlist.parentnode.style.backgroundcolor = '#f4f4f4';
console.log(itemlist.parentnode.parentnode.parentnode);

//parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children.style.backgroundColor = '#f4f4f4';

//Firstchild
console.log(itemlist.firstChild);
//FirstElementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'hello';

//lastchild
console.log(itemlist.lastChild);
//lastElementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'hello2';

//nextsibling
console.log(itemlist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElemnetSibling);

//PreviousSibling
console.log(itemlist.previousSibling);
//PreviousElementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'blue';

//create a div
var newdiv = document.createElement('div');
console.log(newdiv);

//ADDclass
newdiv.className = 'hello';

// ADD ID
newdiv.id = 'hello2';

//ADD title
newdiv.setAttribute('title', 'hellodiv');

//ADD text Node
var newdivText = document.createTextNode('hello world');

//ADD text to div
newdiv.appendChild('newdivchild');

var container = document.querySelector('header.container');
var h1 = document.querySelector('header, h1');
newdiv.style.fontSize = '30px';
container.insertBefore(newdiv, h1); 

