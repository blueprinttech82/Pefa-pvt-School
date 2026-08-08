import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const studentsList = document.getElementById("studentsList");

async function loadStudents(){

    const snapshot = await getDocs(collection(db,"students"));

    snapshot.forEach((doc)=>{

        const student = doc.data();

        studentsList.innerHTML += `

        <div class="card">

        <h3>${student.fullName}</h3>

        <p><strong>Class:</strong> ${student.class}</p>

        <p><strong>Gender:</strong> ${student.gender}</p>

        <p><strong>Admission No:</strong> ${student.admissionNumber}</p>

        <p><strong>Parent Phone:</strong> ${student.parentPhone}</p>

        </div>

        <br>

        `;

    });

}

loadStudents();
