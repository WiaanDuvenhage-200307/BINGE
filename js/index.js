$(function(){
    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&language=en-US&page=8";

    const imagePrefix = "https://image.tmdb.org/t/p/original";

    
    

    $.getJSON(url, function(result){

        for( i = 0; i < 12; i++){

            var year = result.results[i].release_date.split("-").slice(0, -2);


            console.log(result);

            var card = $(".movie-cards").append(
                `<div class="col-xxl-2 col-md-3 col-12 movie">
                    <div class="overlay">
                        <a href= "../pages/individual-movie.html?id= `+ result.results[i].id +`"><img src="${imagePrefix + result.results[i].poster_path}" alt="movie_card height="323px" width="100%"></a>
                        <div class="movie-details" style="text-align: center;">
        
                            <h5>${result.results[i].title}</h5>
                            <h2>${year}</h2>
                            <h7>BINGE SCALE: ${result.results[i].vote_average}</h7>
        
                        </div>
                    </div>
                
                </div>`);

            

        }

    });

    // Toggle the hamburger button
    $(".navbar-toggler").on("click", function(){
        $(".hamburger-items").toggleClass("dropdown");
    });
    

   

    

});