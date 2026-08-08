import { auth } from "./firebase.js";


import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



const form = document.getElementById("teacherLogin");



form.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



try{


await signInWithEmailAndPassword(
auth,
email,
password
);



alert("Login Successful");


window.location.href="teacherDashboard.html";



}catch(error){


alert("Login failed: "+error.message);


}



});
