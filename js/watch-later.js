$(document).ready(function(e){



    $(".binge-later-container").append(`

    <div class="binge-item row" style="padding: 10%; text-align: left;">
    <div class="col-sm-2 binge-item-text" style="height: 300px;"><img src="${sessionStorage.getItem("movieImg")}" alt="movie_card height="300px" width="100%"></div>
    <div class="col-sm-6 binge-item-text" style="background-color: transparent; height: 200px; margin-left: 50px;"><h5 style="text-align: left;">${sessionStorage.getItem("movieTitle")}</h5>
    <h5 style="text-align: left; float: left; margin-right: 10px;">RELEASE DATE: </h5><h2 style="text-align: left; margin-left: 10px;">${sessionStorage.getItem("movieDate")}</h2><br><h2 style="float: none; text-align: left;">${sessionStorage.getItem("movieDesc")}</h2><br><h7>BINGE RATING: ${sessionStorage.getItem("movieRate")}</h7></div>
    <div class="col-sm-2 binge-item-remove btn prim" style="margin-left: 100px;"><h7>Remove</h7></div>
        <br>
    </div>
        <hr>
        <br>
        

       `);

       $(".binge-item-remove").click(function(){
           $(this).closest(".binge-item").fadeOut(200);
       })
})