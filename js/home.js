import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const announcements =
    document.getElementById("homeAnnouncements");

const calendar =
    document.getElementById("homeCalendar");


// ============================
// LOAD ANNOUNCEMENTS
// ============================

async function loadAnnouncements() {

    announcements.innerHTML = "";

    try {

        const snapshot =
            await getDocs(collection(db, "announcements"));

        if (snapshot.empty) {

            announcements.innerHTML =
                "<p>No announcements available.</p>";

            return;
        }

        snapshot.forEach((doc) => {

            const data = doc.data();

            announcements.innerHTML += `

                <div class="card">

                    <h3>${data.title}</h3>

                    <p>${data.message}</p>

                </div>

            `;

        });

    } catch (error) {

        announcements.innerHTML =
            "<p>Unable to load announcements.</p>";

        console.error(error);

    }

}


// ============================
// LOAD CALENDAR
// ============================

async function loadCalendar() {

    calendar.innerHTML = "";

    try {

        const snapshot =
            await getDocs(collection(db, "calendar"));

        if (snapshot.empty) {

            calendar.innerHTML =
                "<p>No upcoming events.</p>";

            return;
        }

        snapshot.forEach((doc) => {

            const data = doc.data();

            calendar.innerHTML += `

                <div class="card">

                    <h3>${data.name}</h3>

                    <p>
                        📅 ${data.date}
                    </p>

                    <p>
                        Type: ${data.type}
                    </p>

                </div>

            `;

        });

    } catch (error) {

        calendar.innerHTML =
            "<p>Unable to load calendar.</p>";

        console.error(error);

    }

}


// Load everything

loadAnnouncements();
loadCalendar();
