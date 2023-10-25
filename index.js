
document.addEventListener("DOMContentLoaded", function () {
    getMovies();
});

function getMovies() {
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
            console.log(data);
        })
        .catch(error => console.error("Error fetching movies:", error));
}

function displayMovieDetails(data) {
    let list = document.getElementById("films");
    for (let details of data) {
        console.log(details);
        let li = document.createElement('li');
        li.textContent = details.title;
        li.addEventListener("click", () => displayFilmDetails(details));
        list.appendChild(li);
    }
}

function displayFilmDetails(details) {
    let purchaseTickets = document.getElementById("purchaseTickets");
    purchaseTickets.innerHTML = `
    <ul id="films">
      <img src="${details.poster}">
      <p>${details.title}</p>
      <p>Description: ${details.description}</p>
      <p>Runtime: ${details.runtime}</p>
      <p>Showtime: ${details.showtime}</p>
      <p>Capacity: ${details.capacity}</p>
      <p>Tickets_sold: ${details.tickets_sold}</p>
      <button id="buyTicket">Buy Ticket</button>
      <p id="soldOutMessage" style="color: brown;"></p>
    </ul>
    `;

    let buyTicketButton = document.getElementById("buyTicket");
    let soldOutMessage = document.getElementById("soldOutMessage");

    buyTicketButton.addEventListener("click", () => {
        if (details.tickets_sold < details.capacity) {
            details.tickets_sold++;
            purchaseTickets.innerHTML = `
            <ul id="films">
              <img src="${details.poster}">
              <p>${details.title}</p>
              <p>Description: ${details.description}</p>
              <p>Runtime: ${details.runtime}</p>
              <p>Showtime: ${details.showtime}</p>
              <p>Capacity: ${details.capacity}</p>
              <p>Tickets_sold: ${details.tickets_sold}</p>
              <button id="buyTicket">Buy Ticket</button>
              <p id="soldOutMessage" style="color: brown;"></p>
            </ul>
            `;
        } else if (details.tickets_sold === details.capacity) {
            soldOutMessage.textContent = "Sold out!";
        }
    });
}
