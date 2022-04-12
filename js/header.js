var Inclose = document.getElementsByClassName("inClose")[0];
var Upclose = document.getElementsByClassName("upClose")[0];
var signInModal = document.getElementsByClassName("signInModel")[0];
var signUpModal = document.getElementsByClassName("signUpModel")[0];


function signInFn(){
    console.log("in")
    signInModal.style.display = "block";
}

function signUpFn(){
    console.log("up")
    signUpModal.style.display = "block";
}

Inclose.onclick = () => {
    signInModal.style.display = "none";
}

Upclose.onclick = () => {
    signUpModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == signInModal || event.target == signUpModal) { 
        
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    }
}    
