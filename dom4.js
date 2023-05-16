var itemlist = document.querySelector('#items');
//parentNode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgrounfColor = '#f4f4f4';

console.log(itemlist.parentNode.parentNode.parentNode);
//parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgrounfColor = '#f4f4f4';

console.log(itemlist.parentElement.parentElement.parentElement);

//childNode
console.log(itemlist.childNodes);
console.log(itemlist.children);

//firstChild
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);

//lastchild
console.log(itemlist.lasttChild);//will give node
console.log(itemlist.lastElementChild);

//nextSibling
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

//previoussibling
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);


//create element
//create a div

var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
//add id
newDiv.id='hello1';
//addattribute
newDiv.setAttribute('title', 'Hello Div');

//create text node

var newDivText = document.createTextNode('Hello world');

//addd text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);
container.insertBefore(newDiv, li);

newDiv.style.fontSize ='30px';


