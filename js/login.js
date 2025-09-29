
//this is all temporary, im just testing stuff
let passwordForm = document.querySelector('#frontpage-form2');

let correctUser = 'warden';
let correctPassword = 'password';

let depthsPassword = '7777';

function enterPassword(){

    if(document.querySelector('#warden').value != correctPassword && document.querySelector('#warden').value != depthsPassword && document.querySelector('#user').value != correctUser){
        alert('Unrecognized User');
        return false;
    }
    else if(document.querySelector('#warden').value === correctPassword && document.querySelector('#user').value != correctUser){
        alert('Unrecognized User');
        return false;
    }
    else if(document.querySelector('#warden').value != correctPassword && document.querySelector('#warden').value != depthsPassword && document.querySelector('#user').value === correctUser){
        alert('Incorrect Password');
        return false;
    }
    else if(document.querySelector('#warden').value === correctPassword && document.querySelector('#user').value === correctUser){
        alert('Welcome back.');
        passwordForm.action = 'account.html';
        passwordForm.submit();
    }
    else if(document.querySelector('#warden').value === depthsPassword && document.querySelector('#user').value === correctUser){
        alert('further still');
        passwordForm.action = 'depths.html';
        passwordForm.submit(); 
    }
    
}