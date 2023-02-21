// Fetch
// Sebuah method pada API javascript untuk mengambil resources dari jaringan, 
// dan mengambalikan promise yang selesai (fullfilled) ketika ada response yang tersedia
// fetch(resources, imit);
// resources => url, request Object
// ini (optional) => method, headers, body, mode, cache, referrer referrerPolicy, integrity, keepalive, signal
// response hasil dari fetch berupa promise
// property => headers, ok, redirected, status, statusText, type, url, body
// method => clone(), error(), redirect(), blob(), formData(), json(), text()

// Fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      //   Ketika tombol detaik di-klik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const moovieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = moovieDetail;
            });
        });
      });
    });
});

function showCards(value) {
  return `<div class="col-md-4 my-5">
    <div class="card">
      <img src="${value.Poster}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${value.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${value.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" data-imdbid="${value.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showMovieDetail(value) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${value.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${value.Title} (${value.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong> ${value.Director}</li>
          <li class="list-group-item"><strong>Actor : </strong> ${value.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong> ${value.Writer}</li>
          <li class="list-group-item"><strong>Plot :</strong> <br />${value.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
