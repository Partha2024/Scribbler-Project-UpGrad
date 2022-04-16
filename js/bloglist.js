var Inclose = document.getElementsByClassName("inClose")[0];
var Upclose = document.getElementsByClassName("upClose")[0];
var signInModal = document.getElementsByClassName("signInModel")[0];
var signUpModal = document.getElementsByClassName("signUpModel")[0];
var notMember = document.getElementById("blueText");

var delBtn = document.getElementsByClassName("trash")[0];
var threeDot = document.getElementById("menu");

var delModel = document.getElementsByClassName("deleteModel")[0];
var noBtn = document.getElementById("closeBtn");

function signInFn(){
    signInModal.style.display = "block";
}

function signUpFn(){
    signUpModal.style.display = "block";
}

delBtn.onclick = () => {
    delModel.style.display = "block";
}

Inclose.onclick = () => {
    signInModal.style.display = "none";
}

Upclose.onclick = () => {
    signUpModal.style.display = "none";
}

noBtn.onclick = () => {
    delModel.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == signInModal || event.target == signUpModal) { 
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    }
}    

notMember.onclick = () => {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
}

threeDot.onclick = () =>{
    location.href = "../html/post.html"
}