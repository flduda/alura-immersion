const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  // Assuming you want to display multiple artists
  // Create a container to hold multiple artists
  const artistsContainer = document.createElement('div');

  result.forEach((element) => {
    const artistDiv = document.createElement('div');

    const artistName = document.createElement('span');
    artistName.innerText = element.name;

    const artistImage = document.createElement('img');
    artistImage.src = element.urlImg;

    artistDiv.appendChild(artistImage);
    artistDiv.appendChild(artistName);

    artistsContainer.appendChild(artistDiv);
  });

  // Clear existing content in resultArtist
  resultArtist.innerHTML = '';

  // Append the container with multiple artists to resultArtist
  resultArtist.appendChild(artistsContainer);

  // Show the resultArtist container
  resultArtist.classList.remove('hidden');
}

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;
  }

  requestApi(searchTerm);
});
