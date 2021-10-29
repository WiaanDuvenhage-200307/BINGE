$(function(){
    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1";
    const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=2";
    const url3 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=3";
    const url4 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=4";
    const url5 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=5";
    const url6 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=6";
    const url7 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=7";
    const url8 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=8";
    const url9 = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=9";

    const imagePrefix = "https://image.tmdb.org/t/p/original";
    

    $.getJSON(url, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url2, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url3, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url4, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url5, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url6, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url7, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url8, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $.getJSON(url9, function (result) {

        for (i = 0; i < result.results.length; i++) {

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

    $(".deep-filter").on("click", function(){
        $(".filter-block").slideDown();
    })

    // let allMovies = [];

    // year Filter function
    var enteredYear = null;
    console.log(enteredYear);

    
    $(".year-filter").on('keyup', function(){
        enteredYear = $(".year-filter").val();
        const filteredMovies = allMovies.filter(movieYear => {
            return movieYear.name.includes(enteredYear)
        })
        console.log(filteredMovies);
    })

    //title search function
    var enteredTitle = "";

    $(".title-search").on("keyup", function(){
        enteredTitle = $(this).val();
        console.log(enteredTitle);
    })



    

    const movieDetails = "https://api.themoviedb.org/3/movie/";

    $.getJSON(movieDetails, result =>{

        console.log(result);

    });

    $(".navbar-toggler").on("click", function () {
        $(".hamburger-items").toggleClass("dropdown");
    });


    

})