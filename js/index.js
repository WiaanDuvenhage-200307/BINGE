$(function (e) {
    // Getting all the images of all the movies
    // Accessing 8th page of the popular movies
    //     <div class="button-group">
    //     <a href="pages/login-and-register.html"><button class="btn btn-primary">
    //             <p>REGISTER</p>
    //         </button></a>
    // </div>
    
    
//MARCO  & SHANRE - Code that enables logout via logout button//
$('.logout-btn').on('click', function () {
    //this code is to unset a session (storage) --take code from above and add remove(where get/setItem is)

    $(".acc-name").text("LOG IN");
});
$('.hamburger-log-out').on('click', function () {
    //this code is to unset a session (storage) --take code from above and add remove(where get/setItem is)

    $(".hamburger-log-out").text("LOG IN");
});
//MARCO  & SHANRE - End of Logout btn function//

const url = "https://api.themoviedb.org/3/movie/popular?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&language=en-US&page=2";

const imagePrefix = "https://image.tmdb.org/t/p/original";






    $.getJSON(url, function (result) {

        for (i = 0; i < 12; i++) {

            var year = result.results[i].release_date.split("-").slice(0, -2);


            console.log(result);

            var card = $(".movie-cards").append(
                `<div class="col-xxl-2 col-md-3 col-12 movie">
                        <div class="overlay">
                            <a href= "../pages/individual-movie.html?id= `+ result.results[i].id + `"><img src="${imagePrefix + result.results[i].poster_path}" alt="movie_card height="323px" width="100%"></a>
                            <div class="movie-details" style="text-align: center;">
            
                                <h5>${result.results[i].title}</h5>
                                <h2>${year}</h2>
                                <h7>BINGE SCALE: ${result.results[i].vote_average}</h7>
            
                            </div>
                        </div>
                    
                    </div>`);

            // $(".carousel-inner").append(`
            //     <div class="carousel-item active" data-bs-interval="5000">
            //         <img src="https://image.tmdb.org/t/p/original${result.results[i].poster_path}" class="d-block w-100" alt="first-image">
            //     </div>

            // `)

        }

    });

    // Toggle the hamburger button
    $(".navbar-toggler").on("click", function () {
        $(".hamburger-items").toggleClass("dropdown");
    });


    // Closing the welcome message
    $(".btn-exit").click(function(){
        $(".welcome-msg").fadeOut();
    })

    $(".instagram").mouseenter(function(){
        $(this).attr('src', '../assets/icons/instagram-hover.svg')
    })

    $(".instagram").mouseleave(function(){
        $(this).attr('src', '../assets/icons/instagram.svg')
    })

    
    $(".facebook").mouseenter(function(){
        $(this).attr('src', '../assets/icons/facebook-hover.svg')
    })

    $(".facebook").mouseleave(function(){
        $(this).attr('src', '../assets/icons/facebook.svg')
    })

    
    $(".twitter").mouseenter(function(){
        $(this).attr('src', '../assets/icons/twitter-hover.svg')
    })

    $(".twitter").mouseleave(function(){
        $(this).attr('src', '../assets/icons/twitter.svg')
    })

    
    $(".youtube").mouseenter(function(){
        $(this).attr('src', '../assets/icons/youtube-hover.svg')
    })

    $(".youtube").mouseleave(function(){
        $(this).attr('src', '../assets/icons/youtube.svg')
    })

})

