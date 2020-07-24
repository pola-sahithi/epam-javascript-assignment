function validateForm() {
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var email = document.getElementById('mail');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('confirmpass');

    var letters=new RegExp(/^[A-Za-z]+$/);

    var regux = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
    var df = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    
    if(!email.value.match(df))
    {
        alert("Invalid email");
    }
    if(!letters.test(fname.value))
    {
        alert("Must Contain Only Letters in First Name");
        return false;
    }
    if(!lname.value.match(letters))
    {
        alert("Must Contain Only Letters in Last Name");
        return false;
    }

    //console.log(pass.value);
    //console.log(cpass.value);
    if(pass.value != cpass.value)
    {
        
        alert("Password is not same");
        return false;
    }


    document.writeln("You have successfully registered")
}