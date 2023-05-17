const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit',  onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        localStorage.setItem('nameInput','nameInput.value');
        localStorage.setItem('emailInput','emailInput.value');
        userlist.appendChild(li);

        //clear the field
        nameInput.value ='';
        emailInput.value ='';

    }
}