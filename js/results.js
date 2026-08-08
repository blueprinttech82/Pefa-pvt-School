import { db } from "./firebase.js";


import {

collection,
getDocs,
addDoc

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";



const studentSelect =
document.getElementById("studentSelect");

const form =
document.getElementById("resultForm");



let students = [];



// Load students

async function loadStudents(){


const snapshot =
await getDocs(collection(db,"students"));



snapshot.forEach(doc=>{


const student = doc.data();


students.push(student);



studentSelect.innerHTML += `

<option value="${student.fullName}">

${student.fullName}

</option>


`;



});


}



loadStudents();




// Save result

form.addEventListener("submit",async(e)=>{


e.preventDefault();



const selected =
students.find(

s => s.fullName === studentSelect.value

);



const result = {


studentName:selected.fullName,


class:selected.class,


term:
document.getElementById("term").value,


year:
document.getElementById("year").value,


subject:
document.getElementById("subject").value,


marks:
Number(document.getElementById("marks").value),


createdAt:new Date()


};



await addDoc(

collection(db,"results"),

result

);



alert("Result Saved");


form.reset();



});
