function register()
{
    let first = document.querySelector('#Firstname').value
    let last = document.querySelector('#Lastname').value
    let team = document.querySelector('#Teamname').value

    alert(first + ' ' + last + ' of Team ' + team + ' is now registered with us. Thanks for joining. See you in the contests.')
}

function listen()
{
    document.querySelector('form').addEventListener('submit', register);
}

document.addEventListener('DOMContentLoaded', listen);