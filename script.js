/*const resultArtist = document.getElementById('result-artist')
const playlistContainer = document.getElementById('result-playlists')
const searchInput = document.getElementById('search-input')

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  resultPlaylists.classList.add('hidden')
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")

  results.forEach((element) => {
    artistImage.src = element.urlImg
    artistName.innerText = element.name
  });
 
  resultArtist.classList.remove("hidden")
}

/*function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}*/

/*document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchInput === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});*/