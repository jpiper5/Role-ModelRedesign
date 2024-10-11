// global use strict
"use strict";

//light/dark mode
document.getElementById("darkMode").addEventListener("click", darkMode);

function darkMode() {
   document.querySelector("body").classList.toggle("darkMode");
}

//form validation 
function validateForm(e){
   e.preventDefault();
   
   let myForm = document.querySelector("#contactUs");
   
   let errorSpans = document.querySelectorAll("#contactUs .message");
   
   let isValid = true;
   
   myForm.fullName.classList.remove("errorInput");
   myForm.myEmail.classList.remove("errorInput");
   myForm.myPhone.classList.remove("errorInput");
   myForm.prefEmail.classList.remove("errorInput");
   myForm.prefPhone.classList.remove("errorInput");
   myForm.comments.classList.remove("errorInput");
   
   
   errorSpans.forEach(function(span){
     span.classList.remove("error");
   });
   
   document.querySelector("#success").classList.remove("show");
   document.querySelector("#success").classList.add("hide");
   
   let fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   let phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;
   
   if(myForm.fullName.value === "" || !(fullNameRegex.test(myForm.fullName.value))) {
     myForm.fullName.classList.add("errorInput");
       
     errorSpans[0].classList.add("error");
       
     isValid = false;
   }

   if(myForm.prefEmail.checked && (myForm.myEmail.value === "" || !(emailRegex.test(myForm.myEmail.value)))) {
         myForm.prefEmail.classList.add("errorInput");
         myForm.myEmail.classList.add("errorInput");
       
         errorSpans[1].classList.add("error");
           
         isValid = false;
      } else  if(myForm.prefPhone.checked && (myForm.myPhone.value === "" || !(phoneRegex.test(myForm.myPhone.value)))) {
         myForm.prefPhone.classList.add("errorInput");
         myForm.myPhone.classList.add("errorInput");
       
         errorSpans[2].classList.add("error");
           
         isValid = false;
      }
      
   if(myForm.comments.value === ""){
     myForm.comments.classList.add("errorInput");
       
     errorSpans[3].classList.add("error");
       
     isValid = false;
   }
   
   if(isValid){
      document.querySelector("#success").classList.remove("hide");
      document.querySelector("#success").classList.add("show");
     
      document.getElementById("formSub").innerHTML = `<strong>Full Name: </strong>${myForm.fullName.value}<br><strong>Email: </strong>${myForm.myEmail.value}<br><strong>Phone: </strong>${myForm.myPhone.value}<br><strong>Comments: </strong>${myForm.comments.value}`;
     
     // reset the form
       myForm.reset();
   }
 }
 document.getElementById("contactUs").addEventListener("submit", validateForm);


// function validateForm() {
//    let fullName = document.getElementById("fullName").value;
//    let myEmail = document.getElementById("myEmail").value;
//    let myPhone = document.getElementById("myPhone").value;
//    let comments = document.getElementById("comments").value;
//    let errorMsgName = document.querySelector("#nameMessage");
//    let errorMsgEmail = document.querySelector("#emailMessage");
//    let errorMsgComments = document.querySelector("#commentsMessage");

//    if (fullName == "") {
//       alert("Please enter your full name");
//       return false;
//    }
//    if (myEmail == "" && myPhone == "") {
//       alert("Please enter your email or phone number");
//       return false;
//    }
   
//    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//    if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address");
//       return false;
//    }

//    if (comments == "") {
//       alert("Please enter your comments");
//       return false;
//    }
//    return true;
// }  
