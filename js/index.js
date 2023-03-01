console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // log the entire data object
    console.log(data.results[0].name); // log the name of the first character
    console.log(data.results[2].gender); // log the gender of the third character
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log(r2d2.eye_color); // log the eye color of R2-D2
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

fetchData(); // call the fetchData function to start the fetch and log the data to the console.
