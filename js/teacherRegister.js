import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const form = document.getElementById("teacherForm");


form.addEventListener("submit", async(e)=>{

e.preventDefault();


const teacher = {

name: document.getElementById("name").value,

phone: document.getElementById("phone").value,

email: document.getElementById("email").value,

subject: document.getElementById("subject").value,

class: document.getElementById("class").value,

createdAt: new Date()

};


try{


await addDoc(collection(db,"teachers"),teacher);


alert("Teacher Registered Successfully");


form.reset();



}catch(error){

alert(error.message);

}


});
