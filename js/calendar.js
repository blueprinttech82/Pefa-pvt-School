import { db } from "./firebase.js";


import {

collection,
addDoc,
getDocs

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";



const form =
document.getElementById("calendarForm");


const list =
document.getElementById("calendarList");




// Add event

form.addEventListener("submit",async(e)=>{


e.preventDefault();



const event = {


name:
document.getElementById("eventName").value,


date:
document.getElementById("eventDate").value,


type:
document.getElementById("eventType").value,


createdAt:
new Date()


};



await addDoc(

collection(db,"calendar"),

event

);



alert("Event Added");


form.reset();


loadEvents();


});





// Display events

async function loadEvents(){


list.innerHTML="";


const snapshot =
await getDocs(
collection(db,"calendar")
);



snapshot.forEach(doc=>{


const data = doc.data();



list.innerHTML += `


<div class="card">


<h3>
${data.name}
</h3>


<p>
Date: ${data.date}
</p>


<p>
Type: ${data.type}
</p>


</div>


<br>


`;


});


}



loadEvents();
