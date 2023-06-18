const form = document.getElementById('#addForm');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const userlist = document.querySelector('#users');

form.addEventListener('submit',  onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value==='' || phoneNumber==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}-${emailInput.value}-${phoneNumber.value}`));
        localStorage.setItem('nameInput','nameInput.value');
        localStorage.setItem('emailInput','emailInput.value');
        localStorage.setItem('phoneNumber','phoneNumber.value');
        userlist.appendChild(li);

        //clear the field
        nameInput.value ='';
        emailInput.value ='';
        phoneNumber.value ='';

    }
}