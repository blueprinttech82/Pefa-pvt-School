import { db } from "./firebase.js";


import {

collection,
addDoc,
getDocs

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";



const form =
document.getElementById("announcementForm");


const list =
document.getElementById("announcementList");



// Add announcement

form.addEventListener("submit",async(e)=>{


e.preventDefault();



const announcement={


title:
document.getElementById("title").value,


message:
document.getElementById("message").value,


date:
new Date()


};



await addDoc(

collection(db,"announcements"),

announcement

);



alert("Announcement Published");


form.reset();


loadAnnouncements();


});




// Display announcements

async function loadAnnouncements(){


list.innerHTML="";


const snapshot =
await getDocs(
collection(db,"announcements")
);



snapshot.forEach(doc=>{


const data = doc.data();



list.innerHTML += `


<div class="card">


<h3>
${data.title}
</h3>


<p>
${data.message}
</p>


<small>
${data.date.toDate().toDateString()}
</small>


</div>


<br>


`;


});


}



loadAnnouncements();
