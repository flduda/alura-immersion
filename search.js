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
      artistName.innerText = element.Name;
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