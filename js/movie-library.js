$(function(){

    //on click function for filter buttons//
    $(".filter-button").click(function(){
        $(".filter-button").removeClass("filter-active");
        $(this).addClass("filter-active");
    });

    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1";

    const imagePrefix = "https://image.tmdb.org/t/p/original";

    $.getJSON(url, result =>{
        console.log(result);

        result.results.forEach(i => {
            console.log(i.poster_path);
            $(".movie-cards").append(`

                <div class="col-xxs-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2 movie">
                    <br> <a href="/pages/individual-movie.html"><img class="card" src=${imagePrefix + i.poster_path} alt="movie_card height="20%" width="100%"></a>
                </div>

           `);
        });

    });


    // getting details of movie

    

    const movieDetails = "https://api.themoviedb.org/3/movie/";

    $.getJSON(movieDetails, result =>{

        console.log(result);

    });


    

})