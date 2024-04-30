const results = document.querySelector("#results");

async function asyncFetch(value) {
  const resp = await fetch(`https://swapi.py4e.com/api/${value}/`);
  const data = await resp.json();
  // console.log(data);
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";

  // console.log(data);

  if (value === "films") {
    data.results.forEach((item) => {
      output += `
            <div class="card " >
                <h2 class="card-title text-center">${item.title}</h2>
                <div class="card-content">
                <p> PRODUCER: ${item.producer}</p>
                <p> DIRECTOR: ${item.director}</p>
                <p> DATE: ${item.release_date}</p>
                <p> EPISODE ID: ${item.episode_id}</p>
                </div>
                </div>
            `;
    });
  }

  if (value === "people") {
    data.results.forEach((item) => {
      output += `
            <div class="card" >
                <h2 class="card-title text-center">${item.name}</h2>
                <div class="card-content">
                 <p> BIRTH-YEAR: ${item.birth_year}</p>
                  <p> GENDER: ${item.gender}</p>
                 <p> HEIGHT: ${item.height}</p>
                 <p> MASS: ${item.mass}</p>
                </div>
               </div>
            `;
    });
  }

  if (value === "vehicles") {
    data.results.forEach((item) => {
      output += `
          <div class="card" >
              <h2 class="card-title text-center">${item.name}</h2>
              <div class="card-content">
              <p> MODEL: ${item.model}</p>
              <p> MANUFACTURER: ${item.manufacturer}</p>
              <p>CLASS: ${item.vehicle_class}</p>
              <p>LENGTH: ${item.length}</p>
              </div>
              </div>
          `;
    });
  }

  results.innerHTML = output;
}
// Fetch People data by default on pageload
document.addEventListener("DOMContentLoaded", () => {
  asyncFetch("people"); // Display people data by default
});

//Event Listener for Buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
