
document.addEventListener("DOMContentLoaded", function (){
    getMovies()
});

function getMovies(){
    fetch("https://my-json-server.typicode.com/josephmangara/week-3-code-challenge/films")
    .then(res => res.json())
    .then(data => {
        displayMovieDetails(data)
    })
}
//this function creates a list of all the films based on their title. 
function displayMovieDetails(data){
    for (let details of data){
        console.log(details);
        let list = document.getElementById("films");
        let li = document.createElement('li');
        li.textContent = details.title;
        li.addEventListener("click", () => displayFilmDetails(details));
        list.appendChild(li);

    }
}

// This function displays all movie details upon clicking the movie title.

function displayFilmDetails(details){
    let purchaseTickets = document.getElementById("buyTicket");
    purchaseTickets.innerHTML =`
    <ul id="films">
      <img src="${details.poster}">
      <p>${details.title}</p>
      <p>Description: ${details.description}</p>
      <p>Runtime: ${details.runtime}</p>
      <p>Showtime: ${details.showtime}</p>
      <p>Capacity: ${details.capacity}</p>
      <p>Tickets_sold: ${details.tickets_sold}</p>
      <button id="buyTicket">Buy Ticket</button>
      <p id="soldOutMessage" style="color: blue;"></p>
    </ul>
    `;
// the event listener updates the tickets counter and prints out "sold out" when the tickets are exhausted.
    let buyTicketButton = document.getElementById("buyTicket");
    buyTicketButton.addEventListener("click", () => {
        if(details.tickets_sold < details.capacity){
        return details.tickets_sold++;
       }else if(details.tickets_sold === details.capacity){
        soldOutMessage.textContent = "Sold out!";}
    })
};


function displayFilmDetails(details){
    let purchaseTickets = document.getElementById("purchaseTickets");
    purchaseTickets.innerHTML =`
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
// the event listener updates the tickets counter and prints out "sold out" when the tickets are exhausted.
    let buyTicketButton = document.getElementById("buyTicket");
    buyTicketButton.addEventListener("click", () => {
        if(details.tickets_sold < details.capacity){
        return details.tickets_sold++;
       }else if(details.tickets_sold === details.capacity){
        soldOutMessage.textContent = "Sold out!";}
    })
};

