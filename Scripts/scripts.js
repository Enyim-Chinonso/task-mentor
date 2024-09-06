
//  function displayUserDetails(){
//     //Enter username
//     let username = prompt("Enter your username")
   
//     while (validateUsername(username) == false) {
//        username = prompt("Username is invalid. Enter a valid username")
//     }
//    if (username == null) {
//     return
//    }

//   //Enter password
//     let password = prompt("Enter your Password")
//    console.log(validatePassword(password))
   
//    while (validatePassword(password) == false) {
//        password = prompt("Password is wrong. Enter a valid password!")
//    }
 
//    if (password == null) {
//     return
//    }

//    //Confirm password
//    let passwordConfirm = prompt("Confirm your password")

//    while (passwordConfirm !== password)
//     passwordConfirm = prompt("Please confirm password correctly")

//    if (passwordConfirm == null) {
//     return
//    }


//  console.log(username, password)
// }

//  displayUserDetails()
// alert("Oil dey your head")



// function validateUsername(username){
//     if (username == null){
//         return true
//     }

//     if (username.length > 10){
//         return false
//     } else {
//         return true
//     }
// }



// function validatePassword(password){
//     if (password == null){
//         return true
//     }

//     if (password.length < 6){
//         return false
//     } else {
//         return true
//     }
// }



var a = 5;

function foo() {
  console.log(a);

}

foo()