var Seconditems =document.querySelector('.list-group-item:nth-child(2)');

var Thirditems =document.querySelector('.list-group-item:nth-child(3)');

Seconditems.style.backgroundColor ='green';

Thirditems.style.display ='none';

var list =document.querySelectorAll('#items li');
list[1].style.color = 'green';

var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}
