 import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const btn = document.getElementById("searchBtn");
const reportCard = document.getElementById("reportCard");


btn.addEventListener("click", async()=>{


const name = document
.getElementById("searchName")
.value
.toLowerCase();


reportCard.innerHTML = "";


const snapshot = await getDocs(
collection(db,"results")
);


let allResults = [];



snapshot.forEach((doc)=>{

allResults.push(doc.data());

});


// Find student's class

const studentData = allResults.find(
r => r.studentName.toLowerCase() === name
);



if(!studentData){

reportCard.innerHTML="Student not found";
return;

}



const studentClass = studentData.class;



// Get same class students

let classStudents = [];



allResults.forEach(result=>{


if(result.class === studentClass){

classStudents.push(result);

}


});



// Calculate totals

let totals = {};



classStudents.forEach(student=>{


if(!totals[student.studentName]){

totals[student.studentName] = 0;

}


totals[student.studentName] += Number(student.marks);


});



// Sort highest marks first

let ranking = Object.entries(totals)
.sort((a,b)=>b[1]-a[1]);



// Find position

let position = ranking.findIndex(
item => item[0].toLowerCase() === name
)+1;



// Student subjects

let total = totals[studentData.studentName];

let subjects = Object.keys(totals).length;


let average = total / classStudents.length;



let status = average >= 40
? "PASS"
: "FAIL";



reportCard.innerHTML = `

<div class="card">

<h2>PEFA PVT SCHOOL</h2>

<h3>${studentData.studentName}</h3>

<p>
Class: ${studentClass}
</p>


<p>
Total Marks: ${total}
</p>


<p>
Position: ${position}
</p>


<p>
Average: ${average.toFixed(2)}%
</p>


<p>
Status: ${status}
</p>


</div>

`;



});
