import { auth } from "./firebase.js";


import {

onAuthStateChanged,
signOut

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



const email = document.getElementById("teacherEmail");

const logout =
document.getElementById("logout");



onAuthStateChanged(auth,(user)=>{


if(user){

email.innerHTML =
"Logged in as: "+user.email;


}else{


window.location.href="teacherLogin.html";


}


});



logout.addEventListener("click",async()=>{


await signOut(auth);


window.location.href="teacherLogin.html";


});
