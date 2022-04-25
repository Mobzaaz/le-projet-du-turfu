import axios from 'axios';

const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {

    e.preventDefault()

    const birthdate = document.getElementById('birthdate')

    axios.post('http://localhost:7070/createAccount',
        {
            lastname: document.getElementById('lastname').value,
            firstname: document.getElementById('firstname').value,
            birthdate: document.getElementById('birthdate').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
    ).then(data => {
        console.log(data)
        alert('Compte créé !')
    })
    .catch(err => {alert(err.message)})
})