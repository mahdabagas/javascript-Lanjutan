/*
<div class="row">
        <div class="col-md-4 my-5">
          <div class="card">
            <img src="..." class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Avengers</h5>
              <h6 class="card-subtitle mb-2 text-muted">2016</h6>
              <a href="#" class="btn btn-primary">Show Details</a>
        </div>
    </div>
    </div>
</div>
*/

const col = document.createElement("div");
col.classList.add("col-md-4", "my-5");

const card = document.createElement("div");
card.classList.add("card");
const img = document.createElement("img");
img.classList.add("card-img-top");
// img.setAttribute("src", "");
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
const h5 = document.createElement("h5");
h5.classList.add("card-title");
const h6 = document.createElement("h6");
h6.classList.add("card-subtitle", "mb-2", "text-muted");
const a = document.createElement("a");
a.classList.add("btn", "btn-primary");
// a.setAttribute("href", "#");
cardBody.append(h5, h6, a);
card.append(img, cardBody);
col.append(card);

const container = document.querySelector(".container");

$.ajax({
  url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avenger",
  success: (results) => {
    console.log(results);
    const movies = results.Search;
    movies.forEach((value) => {
      img.setAttribute("src", `${value.Poster}`);
      h5.innerHTML = value.Title;
      h6.innerHTML = value.Year;
      
      container.append(col);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
