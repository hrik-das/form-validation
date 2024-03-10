document.querySelector('.btn').addEventListener("click", (event) => {
    event.preventDefault();
    let error = document.querySelector('.error');
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(!user && !password){
        error.style.backgroundColor = "rgb(255, 63, 63)";
        error.style.display = "block";
        error.innerHTML = "Fill in all Fields!";
    }else{
        if(!user){
        error.style.backgroundColor = "rgb(255, 63, 63)";
        error.style.display = "block";
        error.innerHTML = "Email Address is Required!";
        }else if(!password){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Correct Password is Required!";
        }else{
            error.style.display = "none";
        }
    }

    let verifyEmail;
    if(user){
        let verify = user.toLowerCase().indexOf('@gmail.com') !== -1;
        if(!verify){
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Email is Not Correct!";
        }else{
            verifyEmail = user;
        }
    }
    
    if(verifyEmail && password){
        if(password.length >= 8){
            error.style.backgroundColor = "rgb(76, 255, 76)";
            error.style.display = "block";
            error.innerHTML = "Registration Completed!";
            setTimeout(() => {
                window.location.replace("../home.html");
            }, 2000);
        }else{
            error.style.backgroundColor = "rgb(255, 63, 63)";
            error.style.display = "block";
            error.innerHTML = "Password should be Greater than 8 Characters!";
        }
    }
});