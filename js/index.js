$(function(){
    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1";

    const imagePrefix = "https://image.tmdb.org/t/p/original";
    

    $.getJSON(url, function(result){

        for( i = 0; i < 12; i++){


            var card = $(".movie-cards").append(`

                <div class="col-xxl-2 col-md-3 col-12 movie>
                    <div class="overlay">
                        <a href= '../pages/individual-movie.html?id='${result.results[i].id}'><img src="${imagePrefix + result.results[i].poster_path}" alt="movie_card height="323px" width="100%"></a>
                        <div class="movie-details" style="text-align: center; height:150px">
        
                            <h5>${result.results[i].title}</h5>
                            <h2>${result.results[i].release_date}</h2>
                            <h7>${result.results[i].vote_average}</h7>
        
                        </div>
                    </div>
                
                </div>
                <br>
    
               `);

            console.log(result.results[i].id);

        }

    });

    // Toggle the hamburger button
    $(".navbar-toggler").on("click", function(){
        $(".hamburger-items").toggleClass("dropdown");
    });
    

   

    

});