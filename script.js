fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1",
    {
        method: "GET",
    }
)
    .then((response) => response.json())
    .then(function (json) {
        let container = document.querySelector(".container");
        json.results.forEach(function (movie) {
            let div = document.createElement("div");
            div.classList.add("movie");
            div.insertAdjacentHTML(
                "beforeend",
                `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
        <h3 class="titulo_filme">${movie.title}</h3>
        <p class="descricao_filme">Descrição: <br>${movie.overview}</p>
      `
            );
            container.insertAdjacentElement("beforeend", div);

        });
        let images = document.querySelectorAll(".movie img");
        images.forEach(function(image){
            image.addEventListener("load", function(){
                if(image.width > 300) {
                    image.classList.add('large-image')
                }
            });
        });

    })
