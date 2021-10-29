$(function(){

    $(".navbar-toggler").on("click", function(){
        $(".hamburger-items").toggleClass("dropdown");
    });
    

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b";

    const url2 = "https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&language=en-US";

    const imagePrefix = "https://image.tmdb.org/t/p/original";

    console.log(url);

    $.getJSON(url, function(result){
        console.log(result);

        movie_image = imagePrefix + result.backdrop_path;
        movie_title = result.title;
        movie_genre1 = result.genres[0].name;
        movie_genre2 = result.genres[1].name;
        movie_date =  result.release_date.split("-").slice(0, -2);
        movie_rate = result.vote_average;
        movie_desc = result.overview;
        movie_duration = result.runtime;
        
        sessionStorage.setItem("movieImg" , movie_image);
        sessionStorage.setItem("movieTitle" , movie_title);
        sessionStorage.setItem("movieGenre1" , movie_genre1);
        sessionStorage.setItem("movieGenre2" , movie_genre2);
        sessionStorage.setItem("movieDate" , movie_date);
        sessionStorage.setItem("movieRate" , movie_rate);
        sessionStorage.setItem("movieDesc" , movie_desc);

        

        $('.header-img').append(
            "<div class='col-12 movie-img row'>\
            <img src='"+ movie_image +"' alt='' height = '500px'/>\
            </div>"
        )

        $(".movie-details").append(
            "<h1 class=''>"+ movie_title +"</h1>\
            <h2>"+ movie_genre1 + " | "+ movie_genre2 +"</h2>\
            <h2>"+ movie_date +"</h2>\
            <div class='rating'>\
                <img src='../assets/icons/rating.svg' alt='rating' height='50px'>\
                <h2>Rating: "+ movie_rate +"</h2>\
            </div>"
        )

        $(".overview").append(
            " <div class='body-text col-xxl-6 col-12'>\
            <h4>"+ movie_desc +"</h4>\
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

        if(result.genres[0].id == "27"){
            $(".accessibility").text("SCARY");
            $(".accessibility").css("font-family", 'fjalla one');
            $(".accessibility").css("font-size", '24px');
            $(".accessibility").css("color", 'white');
            $(".accessibility").css("backgroundColor", '#D3418D');
            $(".accessibility").css("width", '100px');
            $(".accessibility").css("padding", '10px');
            $(".accessibility").css("text-align", 'center');
        } else{
            $(".accessibility").css("display", 'none');
        }
    })

    $.getJSON(url2, function(result){
        movie_trailer = result.results[0].key;

        console.log(movie_trailer);

        $('.trailer-sec').append(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie_trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`  
        )
    })


    var rowIndex = 0;    
    $(".watch-later-btn").click(function(){

        rowIndex ++;

        $.getJSON(url, function(result){
        

            movie_image = imagePrefix + result.backdrop_path;
            movie_title = result.title;
            movie_genre1 = result.genres[0].name;
            movie_genre2 = result.genres[1].name;
            movie_date =  result.release_date.split("-").slice(0, -2);
            movie_rate = result.vote_average;
            movie_desc = result.overview;
            movie_duration = result.runtime;
            
            sessionStorage.setItem("movieImg" , movie_image);
            sessionStorage.setItem("movieTitle" , movie_title);
            sessionStorage.setItem("movieGenre1" , movie_genre1);
            sessionStorage.setItem("movieGenre2" , movie_genre2);
            sessionStorage.setItem("movieDate" , movie_date);
            sessionStorage.setItem("movieRate" , movie_rate);
            sessionStorage.setItem("movieDesc" , movie_desc);

        });

        alert(movie_title + " Has been added to your Binge List!");
    });

    $(".icon").click(function(){

        rowIndex ++;

        $.getJSON(url, function(result){
        

            movie_image = imagePrefix + result.backdrop_path;
            movie_title = result.title;
            movie_genre1 = result.genres[0].name;
            movie_genre2 = result.genres[1].name;
            movie_date =  result.release_date.split("-").slice(0, -2);
            movie_rate = result.vote_average;
            movie_desc = result.overview;
            movie_duration = result.runtime;
            
            sessionStorage.setItem("movieImg" , movie_image);
            sessionStorage.setItem("movieTitle" , movie_title);
            sessionStorage.setItem("movieGenre1" , movie_genre1);
            sessionStorage.setItem("movieGenre2" , movie_genre2);
            sessionStorage.setItem("movieDate" , movie_date);
            sessionStorage.setItem("movieRate" , movie_rate);
            sessionStorage.setItem("movieDesc" , movie_desc);

        });

        alert(movie_title + " Has been added to your Binge List!");
    });

    $(".watch-later-btn").mouseenter(function(){
        $(this).css('transform', 'scale(1.2)');
        $(this).css('transition', '0.2s');
    })

    $(".watch-later-btn").mouseleave(function(){
        $(this).css('transform', 'scale(1)');
    })

    $('.trailer-btn').on("click", function(){
        $(".trailer-sec").slideDown();
    })
})