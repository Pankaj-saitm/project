const apodContent = document.getElementById("apod-content");

async function fetchAPOD() {
  const apiKey = "DEMO_KEY"; // Replace with your NASA API key
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    apodContent.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.date}</p>
      <img src="${data.url}" alt="${data.title}" style="max-width: 100%; border-radius: 8px;" />
      <p>${data.explanation}</p>
    `;
  } catch (error) {
    apodContent.innerHTML =
      "<p>Failed to load Astronomy Picture of the Day.</p>";
    console.error(error);
  }
}
