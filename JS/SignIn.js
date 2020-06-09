let username = document.getElementById("username");
let usererror = document.getElementById("user-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");


function redirect(){

    function validate(callback){
    if((username.value == "admin")&&(password.value == 12345)){
        username.style.border = "2px solid green";
        password.style.border = "2px solid green";
        passworderror.innerHTML = "Username & Password is Right ☺";
        passworderror.style.color = "green";
        callback();
        // alert("You are Redirecting...");
        }
    else{
        username.style.border = "2px solid red";
        password.style.border = "2px solid red";
        passworderror.innerHTML = "Username or Password is Wrong ☹";
        passworderror.style.color = "red";
        }
    }

    function homepage(){
        window.location.href = "Home.html";
    }
    validate(homepage);
}