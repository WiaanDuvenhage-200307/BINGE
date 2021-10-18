$(function(){

    $(".navbar-toggler").on("click", function(){
        $(".hamburger-items").toggleClass("dropdown");
    });
    

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b";

    const imagePrefix = "https://image.tmdb.org/t/p/original";

    console.log(url);

    $.getJSON(url, function(result){
        

        movie_image = imagePrefix + result.backdrop_path;
        movie_title = result.title;
        movie_genre1 = result.genres[0].name;
        movie_genre2 = result.genres[1].name;
        movie_date =  result.release_date.split("-").slice(0, -2);
        movie_rate = result.vote_average;
        movie_desc = result.overview;
        movie_duration = result.runtime;
        
        

        $('.header-img').append(
            "<div class='col-12 movie-img row'>\
            <img src='"+ movie_image +"' alt='' height = '500px'/>\
            </div>"
        )

        $(".movie-details").append(
            "<h1>"+ movie_title +"</h1>\
            <h2>"+ movie_genre1 + " | "+ movie_genre2 +"</h2>\
            <h2>"+ movie_date +"</h2>\
            <div class='rating'>\
                <img src='../assets/icons/rating.svg' alt='rating' height='50px'>\
                <h2>Rating: "+ movie_rate +"</h2>\
            </div>"
        )

        $(".overview").append(
            " <div class='body-text col-xxl-6 col-12'>\
            <h3>"+ movie_desc +"</h3>\
            </div>"
        )

        $(".runtime").append(
            "<h2>"+ movie_duration +" mins</h2>\
            "
        )

        if(movie_rate === 0){
            $(".rating").text("NO RATING!")
            $(".rating").css("font-family", 'cantarell');
            $(".rating").css("color", 'white');
            $(".rating").css("backgroundColor", '#D3418D');
            $(".rating").css("width", '200px');
            $(".rating").css("borderRadius", '100px');
            $(".rating").css("padding", '10px');
            $(".rating").css("text-align", 'center');
        } else{
            $(".rating").text(movie_rate);
            $(".rating").css("font-family", 'Fjalla One');
            $(".rating").css("font-size", '36px');
            $(".rating").css("color", 'white');
            $(".rating").css("width", '100px');
            $(".rating").css("backgroundColor", '#D3418D');
            $(".rating").css("borderRadius", '50px');
            $(".rating").css("padding", '10px');
            $(".rating").css("text-align", 'center');
        }

        if(movie_image === null){
        } else{
            movie_image;
        }
    })

})

