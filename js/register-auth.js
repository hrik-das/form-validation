document.querySelector('.btn').addEventListener("click", () => {
    let error = document.querySelector('.error');
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('con-password').value;
    
    if(!user && !email && !pass && !conpass){ 
        error.style.backgroundColor = "rgb(255, 63, 63)";
        error.style.display = "block";
        error.innerHTML = "Fill in all the Fields!";
    }else{
        if(!user){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Choose an username!";
        }else if(!email){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Email Address is Required!";
        }else if(!pass){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Please Choose a Strong Password!";
        }else if(!conpass){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Kindly Confirm Your Password!";
        }else{
            error.style.display = "none";
        }
    }
    
    let verifyEmail;
    if(email){
        let verify = email.toLowerCase().indexOf('@gmail.com') !== -1;
        if(!verify){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Incorrect Email Address!";
        }else{
            verifyEmail = email;
        }
    }
    
    if(user && verifyEmail && pass && conpass){
        if(pass.length >= 8 && conpass.length >= 8){
            if(pass == conpass){
                error.style.backgroundColor = "rgb(76, 255, 76)";
                error.style.display = "block";
                error.innerHTML = "Registration Completed!";
                setTimeout(() => {
                    window.location.replace("../login.html");
                }, 2000);
            }else{
                error.style.backgroundColor = "rgb(255, 63, 63)";
                error.style.display = "block";
                error.innerHTML = "Password do not Match!";
            }
        }else{
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Password should Greater than 8 Characters!";
        }
    }
});