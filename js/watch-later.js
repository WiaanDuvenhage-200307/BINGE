$(function(){
    // Getting all the images of all the movies
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=2b5c4ad7d6c5ddafd1383a90b3aca91b&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1";

    const imagePrefix = "https://image.tmdb.org/t/p/original";
    

    $.getJSON(url, function(result){

        for( i = 0; i < 12; i++){


            $(".binge-item").append(`


            <div class="col-sm-2 binge-item-text" style="height: 300px;"><a href= '../pages/individual-movie.html?id='${result.results[i].id}'><img src="${imagePrefix + result.results[i].poster_path}" alt="movie_card height="300px" width="100%"></a></div>
            <div class="col-sm-6 binge-item-text" style="background-color: transparent; height: 200px; margin-left: 50px;"><h5 style="text-align: left;">${result.results[i].title}</h5>
            <h5 style="text-align: left; float: left; margin-right: 10px;">RELEASE DATE: </h5><h2 style="text-align: left; margin-left: 10px;">${result.results[i].release_date}</h2><br><h2 style="float: none; text-align: left;">${result.results[i].overview}</h2><br><h7>BINGE RATING: ${result.results[i].vote_average}</h7></div>
            <div class="col-sm-2 binge-item-remove" style="background-color: teal; height: 50px; margin-left: 100px;"></div>
                
                
    
               `);

            console.log(result.results[i].id);

        }

        

    });


    

    const movieDetails = "https://api.themoviedb.org/3/movie/";

    $.getJSON(movieDetails, result =>{

        console.log(result);

    });


    

})