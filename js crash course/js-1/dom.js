/*Examine the document object
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 'hello';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.form);
console.log(document.links);
console.log(document.image);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
var headertitle = document.getElementById('header-title');
console.log(headertitle);
headertitle.textcontent = 'Hello';
headertitle.innertext= 'hello world';
console.log(headertitle.textcontent);
headertitle.style.borderBottom = '2px solid black';

//GET ELEMENT BY CLASS NAME
var items = document.getElementById('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textcontent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundcolor = 'yellow';

//gives error
//items.style.background = 'coral';

for(var i=0; i < items.length; i++){
    items[i].style.backgroundcolor = 'coral';
}

//GET ELEMENT BY TAG NAME

var li = document.getElementById('li');
console.log(li);
console.log(li[1]);
li[1].textcontent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundcolor = 'yellow';

//gives error
//li.style.background = 'coral';

for(var i=0; i < items.length; i++){
    li[i].style.backgroundcolor = 'coral';
}

//QUERY SELECTOR

var header = document.querySelector('#main-header');
header.style.borderBottom = '2px solid #ccc';

var input = document.querySelector('input');
input.value = 'hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'send';

var item = document.querySelector('list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('list-group-item');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('list-group-item(2)');
item.style.color = 'coral';

//QUERY SELECTOR ALL

var title = document.querySelectorAll('title');
console.log(title);
title[0].textcontent = 'hello';

var odd = document.querySelectorAll('li-nth-child(odd)');
var even = document.querySelectorAll('li-nth-child(even)');

for(var i=0; i < odd.length; i++){
    odd[i].style.backgroundcolor = '#f4f4f4';
    even[i].style.backgroundcolor = '#ccc';
}*/

//let firstName = "Buttler";
//let secondName = "Ben stoke";
//let thirdName = "audi"

//console.log(firstName)
//console.log(secondName)
//console.log(thirdName)
//document.write(firstName)
//let javascript = "amazing";
//document.write(javascript)
//if(javascript === 'amazing') alert('dynamic language');

//primitive datatype
/*let numberd = 123;
console.log(numberd)
console.log(typeof numberd)

let stranger = "sheraz rajput";
console.log(stranger)
console.log(typeof stranger)

let dynamicLanguage = true;
console.log(dynamicLanguage)
console.log(typeof dynamicLanguage)

let cats;
console.log(typeof cats)

cats = "123";
console.log(cats)
console.log(typeof cats)*/



