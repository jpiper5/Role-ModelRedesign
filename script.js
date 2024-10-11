// global use strict
"use strict";

// event handlers
// for dark mode 
document.getElementById("darkMode").addEventListener("click", darkMode);
// for form validation 
document.getElementById("contactUs").addEventListener("submit", validateForm);
//for product switcher
document.getElementById("btn1").addEventListener("click", showProduct1);
document.getElementById("btn2").addEventListener("click", showProduct2);
document.getElementById("btn3").addEventListener("click", showProduct3);
document.getElementById("btn4").addEventListener("click", showProduct4);

//light/dark mode toggle
function darkMode() {
   document.querySelector("body").classList.toggle("darkMode");
}

//form validation 
function validateForm(e) {
   // prevents default form submission
   e.preventDefault();
   
   //set form as a variable
   let myForm = document.querySelector("#contactUs");
   
   //set error messages as a variable to use on inputs
   let errorSpans = document.querySelectorAll("#contactUs .message");
   
   //tracks form validity
   let isValid = true;
   
   //resets error input displays
   myForm.fullName.classList.remove("errorInput");
   myForm.myEmail.classList.remove("errorInput");
   myForm.myPhone.classList.remove("errorInput");
   myForm.prefEmail.classList.remove("errorInput");
   myForm.prefPhone.classList.remove("errorInput");
   myForm.comments.classList.remove("errorInput");
   
   //resets error message displays
   errorSpans.forEach(function(span) {
     span.classList.remove("error");
   });
   
   //hides success section
   document.querySelector("#success").classList.remove("show");
   document.querySelector("#success").classList.add("hide");
   
   //regular expressions for validation
   let fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   let phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;
   
   //validates name matches regex and isn't blank
   if (myForm.fullName.value === "" || !(fullNameRegex.test(myForm.fullName.value))) {
     
     //adds errorInput class if name isn't valid
      myForm.fullName.classList.add("errorInput");
     
      //adds error message
     errorSpans[0].classList.add("error");

     //sets form validation variable to false
     isValid = false;
   }

   // validates email matches regex and isn't blank when email radio button is selected
   if (myForm.prefEmail.checked && (myForm.myEmail.value === "" || !(emailRegex.test(myForm.myEmail.value)))) {

         //adds errorInput class to radio button if email isn't valid  
         myForm.prefEmail.classList.add("errorInput");

         //adds errorInput class to email input if email isn't valid
         myForm.myEmail.classList.add("errorInput");
       
         //adds error message
         errorSpans[1].classList.add("error");
           
         //sets form validation variable to false
         isValid = false;

      //if phone radio button is selected this validates phone number matches regex and isn't blank
      } else  if (myForm.prefPhone.checked && (myForm.myPhone.value === "" || !(phoneRegex.test(myForm.myPhone.value)))) {

         //adds errorInput class to phone radio button if phone isn't valid
         myForm.prefPhone.classList.add("errorInput");

         //adds errorInput class to phone input if phone isn't valid
         myForm.myPhone.classList.add("errorInput");
       
         //adds error message
         errorSpans[2].classList.add("error");
         
         //sets form validation variable to false
         isValid = false;
      }

   //validates comments aren't blank
   if (myForm.comments.value === "") {

      //adds errorInput class if comments isn't valid
     myForm.comments.classList.add("errorInput");
       
     //adds error message
     errorSpans[3].classList.add("error");

   //sets form validation variable to false
     isValid = false;
   }
   
   if (isValid) {

      //shows success section
      document.querySelector("#success").classList.remove("hide");
      document.querySelector("#success").classList.add("show");
     
      //shows the data they submitted
      document.getElementById("formSub").innerHTML = `<strong>Full Name: </strong>${myForm.fullName.value}<br><strong>Email: </strong>${myForm.myEmail.value}<br><strong>Phone: </strong>${myForm.myPhone.value}<br><strong>Comments: </strong>${myForm.comments.value}`;
     
     // reset the form
       myForm.reset();
   }
 }

//product switcher 
function showProduct1() {
   document.querySelector("#video1").classList.remove("hiddenItem");
   document.querySelector("#video1").classList.add("currentItem");
   document.querySelector("#video2").classList.remove("currentItem");
   document.querySelector("#video2").classList.add("hiddenItem");
   document.querySelector("#video3").classList.remove("currentItem");
   document.querySelector("#video3").classList.add("hiddenItem");
   document.querySelector("#video4").classList.remove("currentItem");
   document.querySelector("#video4").classList.add("hiddenItem");
}

function showProduct2() {
   document.querySelector("#video2").classList.remove("hiddenItem");
   document.querySelector("#video2").classList.add("currentItem");
   document.querySelector("#video1").classList.remove("currentItem");
   document.querySelector("#video1").classList.add("hiddenItem");
   document.querySelector("#video3").classList.remove("currentItem");
   document.querySelector("#video3").classList.add("hiddenItem");
   document.querySelector("#video4").classList.remove("currentItem");
   document.querySelector("#video4").classList.add("hiddenItem");
}

function showProduct3() {
   document.querySelector("#video3").classList.remove("hiddenItem");
   document.querySelector("#video3").classList.add("currentItem");
   document.querySelector("#video1").classList.remove("currentItem");
   document.querySelector("#video1").classList.add("hiddenItem");
   document.querySelector("#video2").classList.remove("currentItem");
   document.querySelector("#video2").classList.add("hiddenItem");
   document.querySelector("#video4").classList.remove("currentItem");
   document.querySelector("#video4").classList.add("hiddenItem");
}
function showProduct4() {
   document.querySelector("#video4").classList.remove("hiddenItem");
   document.querySelector("#video4").classList.add("currentItem");
   document.querySelector("#video1").classList.remove("currentItem");
   document.querySelector("#video1").classList.add("hiddenItem");
   document.querySelector("#video2").classList.remove("currentItem");
   document.querySelector("#video2").classList.add("hiddenItem");
   document.querySelector("#video3").classList.remove("currentItem");
   document.querySelector("#video3").classList.add("hiddenItem");
}






//  //merch cost calculator

// //stores product buttons in a variable
//  let products = document.querySelectorAll("#products button");

//  //array for cart items
//  let cartItems = [];

//  //
//  function merchCart(e) {
//    console.log(e);

//    let cart = document.querySelector("#itemsList li");

//    let output = "";
   
//    let currentProduct = e.target;

//    if(currentProduct)
//  }








