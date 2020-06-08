let username = document.getElementById("username");
let usererror = document.getElementById("user-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");


function redirect(){

    function validate(callback){
    if((username.value == "admin")&(password.value == 12345)){
        passworderror.innerHTML = "Username & Password is Right ☺";
        passworderror.style.color = "green";
        callback();
        }
    else{
        passworderror.innerHTML = "Username or Password is Wrong ☹";
        passworderror.style.color = "red";
        }
    }

    function homepage(){
        window.location.href = "Home.html";
    }

validate(homepage);
}