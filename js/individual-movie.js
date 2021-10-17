$(function(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b";

    $.getJSON(url, function(result){
        console.log(result);

        movie_image = result.backdrop_path;
        movie_title = result.title;
        movie_genres = result.genre_ids;
        movie_date = result.release_date;

        console.log(movie_title);

    })

})

