// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#id_password');

// togglePassword.addEventListener('click', function (e) {
//   // toggle the type attribute
//   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//   password.setAttribute('type', type);
//   // toggle the eye slash icon
//   this.classList.toggle('fa-eye-slash');
// });


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

$(function(){

    $(".log-in-btn").click(function(){

        var username = $(".username").val();
        var password = $(".password").val();
        url = "https://owmakerspace.co.za/users/data.json";

        $.getJSON(url, function(result){
            console.log(result.users);


            for(i=0; i < result.users.length; i++){

                if(result.users[i].username === username){
                    console.log("user exists");

                    if(result.users[i].password === password){
                        console.log("password match");

                        if(result.users[i].account === "active"){
                            window.location.href = "http://www.binge-movies.co.za";
                            sessionStorage.setItem("username", username);
                        } else{
                            $(".message").css('background-color', 'tomato');
                            alert("This account does not exist.");
                            console.log('account suspended')
                        }

                    } else{
                        $(".message").css('background-color', 'tomato');
                        alert("Email or Password does not match");
                    }
                } else{
                    $(".message").css('background-color', 'tomato');
                    alert("Email or Password does not match");
                }

                
            }
        });



    });//end of click function

});
