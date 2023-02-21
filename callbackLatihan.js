$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((value) => {
        cards += showCards(value);
      });
      $(".movie-container").html(cards);

      // Ketika tombol detail di klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
            $(this).data("imdbid"),
          success: (value) => {
            const movieDetail = showMovieDetail(value);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
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
