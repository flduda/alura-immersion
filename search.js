/*const resultArtist = document.getElementById('result-artist')
const playlistContainer = document.getElementById('result-playlist')
const searchInput = document.getElementById('search-input')

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  playlistContainer.classList.add('hidden')
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")

  results.forEach((element) => {
    artistImage.src = element.urlImg
    artistName.innerText = element.name
  });
 
  resultArtist.classList.remove("hidden")
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchInput === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});



/*const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultArtist.innerHTML = ''; // Clear previous results
  result.forEach(element => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    const artistImg = document.createElement('img');
    artistImg.src = element.urlImg;
    artistImg.alt = element.name;
    artistImg.classList.add('artist-img');

    const artistName = document.createElement('span');
    artistName.classList.add('artist-name');
    artistName.innerText = element.name;

    const artistCategory = document.createElement('span');
    artistCategory.classList.add('artist-category');
    artistCategory.innerText = element.genre;

    artistCard.appendChild(artistImg);
    artistCard.appendChild(artistName);
    artistCard.appendChild(artistCategory);

    resultArtist.appendChild(artistCard);
  });
}

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultArtist.innerHTML = ''; // Clear results when input is empty
    return;
  }

  requestApi(searchTerm);
});*/

const searchInput = document.getElementById("search-input")
const resultsArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("result-playlist")

function requestApi(searchTerm) {
  /*const url = `https://json-server-nine-xi.vercel.app/artists?name_like=${searchTerm}` /* rian is hosting*/
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}
function displayResults(results) {
  resultPlaylist.classList.add('hidden')

  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
  });

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm === "") {
    resultPlaylist.style.display = "grid"
    resultsArtist.style.display = "none"
    return
  }
  resultPlaylist.style.display = "none"
  resultsArtist.style.display = "grid"

  requestApi(searchTerm)
})