document.getElementById('loginbtn').addEventListener('click' , function (){
    //get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log (useremail);
    // get user password
    const passwordfield = document.getElementById('user-password')
    const userPassword = passwordfield.value ;
    // check email and password 
    if ( userEmail == 'eva@gmail.com' && userPassword == 'secret'){
        console.log ('validuser');
        window.location.href = 'banking.html' ;
    }
})