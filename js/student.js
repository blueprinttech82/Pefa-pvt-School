import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        fullName: document.getElementById("fullname").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        class: document.getElementById("class").value,
        parentPhone: document.getElementById("parentPhone").value,
        address: document.getElementById("address").value,
        admissionNumber: document.getElementById("admission").value,
        createdAt: new Date()
    };

    try{

        await addDoc(collection(db,"students"),student);

        alert("Student Registered Successfully.");

        form.reset();

    }catch(error){

        alert(error.message);

    }

});
