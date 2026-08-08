import { auth } from "./firebase.js";


import {

onAuthStateChanged,
signOut

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";



onAuthStateChanged(auth,(user)=>{


if(!user){


window.location.href="adminLogin.html";


}


});



const logout = document.getElementById("logout");


if(logout){


logout.onclick = async()=>{


await signOut(auth);


window.location.href="adminLogin.html";


};


}
