

var form = document.getElementById('form')

function validateForm() {
    var email = document.getElementById('email').value
    var regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    
    if(!regx.test(email))
    {
        alert("Invalid e-mail");
        
    }
    else {
        alert("You are successfully logged in");
    }



}