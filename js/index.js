$(function(){

    $(".profile-icon").hover(function(){
        $(this).attr("src", "assets/icons/account-hover.svg");
        }, function(){
        $(this).attr("src", "assets/icons/account.svg");
    });


    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1";

    const imagePrefix = "https://image.tmdb.org/t/p/original";

    $.getJSON(url, result =>{
        console.log(result);

        result.results.forEach(i => {
            console.log(i.poster_path);
            $(".movie-cards").append(`

                <div class="col-xxl-2 col-md-3 col-12 movie">
                    <img src=${imagePrefix + i.poster_path} alt="movie_card height="323px" width="100%">
                </div>

           `);
        });

    });

    $(".navbar-toggler").on("click", function(){
        $(".hamburger-items").slideDown();
    });

    

   

    

})

// word => means function(word) 