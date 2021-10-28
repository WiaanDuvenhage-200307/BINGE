


// {/* <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" /> */}
// $(document).ready(function(){
//     console.log("werk");

//     if ($("#reg-log").checked){
//         $(".logSpan").css("backgroundColor","#D3418D")
//     } else {
//         $(".regSpan").css(color, "#D3418D")
//     }

// if($('#reg-log').is(":checked")){
// var checked = true;
// } else {
//     var checked = false;
// };
// if(checked){
// $('.logSpan').css("color", "green")
// }

// if (label === checked ){
//     $('checkbox').css("color","green");
// } else {
//     $('logSpan').css("color","black");
// };
// $('#logSpan').checked.css("color", "green"); THESE WERE ALL EXPERIMENTAL CODES. 
// });  LITERALLY TRYING BUT NOT GETTING TO WHERE THE RESULTS ARE>>>>YET. 

// FUNCTIONS:
// $(function(){

//     $('.btn prim mt-4').on("click", function () {
// //globl variables .. outside of a function. we can access this anywhere now
//         var username =$(".firstname").val();
//         var password =$(".psw").val();

//         url = "https//owmakerspace.co.za/user/data.json";

//         $.getJSON(url, function (result) {
//             console.log(result.users);

//             for ( i=0; i < results.user.lenght; i++){//users..is the array, result is just the return obj {}
// //some logic (nested if statements, primary if statement>>>checking for the user<<<)
//                 if(result.user[i].username === username) {
//                     console.log("The user exists");
//                 } else //if we dont have such a person/user in the datavase
//                     console.log("The user does not exist");

//             } 


//         }); //end of http request

//     }); // end of click event

// });
//WAT GAAN HIER BO AAN? ONS OEFEN EN OEFEN EN OEFEN, MAAR TOE, BREAKTHROUGH. LEARING CURVE. 

//<SHANRE & MARCO>
$(function () {


    url = "https://owmakerspace.co.za/users/data.json";

    $(".log-in-btn").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        //prevent refresh
        // var isloggedin = true;

        searchedUsers = 0
        var username = $("#logname").val();
        var password = $(".pswlog").val();



        $.getJSON(url, function (json) {

            console.log(json.users);
            json.users.every(user => {
                searchedUsers++
                if (user.username === username && user.password === password) {
                    if (user.account === "active") {
                        sessionStorage.setItem("username", username);
                        console.log("logged in");

                        //inside same statement
                        enableLogInSession();
                        return false;
                    } else {
                        $(".message").css("background-color", "peach");
                        $(".message").text("Your Account Is Not Active");
                        return false;
                    }
                } else if (searchedUsers >= json.users.length) {
                    $(".message").css("color", "orange");

                    $(".message").text("Your Email or Password Does Not Match");
                    return false;
                }
                else {
                    return true;
                }
            })
        });
        // if (isloggedin == true){
        //     $(".welcome-msg").hide(); 

    });
    // $('.log-in-btn').on('click', function () {
    //     $(".welcome-msg").remove(".welcome-msg");


});



//add updated info to the index.html to show logged in user's name
$('.acc-name').text(sessionStorage.getItem('username'));
$('.acc-name').css("font-size", "10px");
$('.acc-name').css("margin-left", "-4%");
$('.acc-name').append(`
        <img class="logout-btn" src="../assets/icons/logout.svg" alt="icon" height="30px" style="float: right; margin-top: -50%; margin-right: -30%">
    `

);
$('.hamnav-text').text(sessionStorage.getItem('username'));
$('.ham-text').text("LOG OUT");


function enableLogInSession() {
    window.location.href = "../pages/login-and-register.html";



};



    // $(".acc-name").append(

    //     "<h1 class=''>"+ movie_title +"</h1>\




