let events = [
    {
        title: "coding Workshop",
        date: "2026-10-15",
        category: "Technology",
        location: "Online"
    }
];

const eventForm = document.getElementById('event-form');
const eventsContainer = document.getElementById('events-container');
const totalCountEl = document.getElementById('total-count');
const upcomingCountEl = document.getElementById('upcoming-count');
const attendedCountEl = document.getElementById('attended-count');
const filterButtons = document.querySelectorAll('.filters button');

let currentFilter = 'all';

function renderEvents() {
    if (!eventsContainer) return;

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p style="text-align:center; color:white;">No events found.</p>';
    } else {
        let htmlContent = '';
        events.forEach((event, index) => {
            htmlContent += `
                <div class="event-card-item">
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Category:</strong> ${event.category}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <button onclick="deleteEvent(${index})">Delete</button>
                </div>
            ;`
        });
        eventsContainer.innerHTML = htmlContent;
    }

    if (totalCountEl) totalCountEl.textContent = events.length;
    if (upcomingCountEl) upcomingCountEl.textContent = events.length;
    if (attendedCountEl) attendedCountEl.textContent = 0;
}

if (eventForm) {
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('event-title').value;
        const date = document.getElementById('event-date').value;
        const category = document.getElementById('event-category').value;
        const location = document.getElementById('event-location').value;

        if (!title || !date || !location) {
            alert('Please fill in all fields');
            return;
        }

        const newEvent = {
            title,
            date,
            category,
            location
        };

        events.push(newEvent);
        eventForm.reset();
        renderEvents();
    });
}

window.deleteEvent = function(index) {
    events.splice(index, 1);
    renderEvents();
};

renderEvents();
