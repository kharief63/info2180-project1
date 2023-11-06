/* Add your JavaScript to this file */
window.onload=function(){
    var sub=document.querySelector("button")
    var mail=document.querySelector("input")
    var mess=document.getElementsByClassName("message")
    var f=document.querySelector("form")
    var e;
    e='';
    console.log(sub)
    console.log(mail)
    console.log(mess)
    console.log(f)
    console.log(mess)
 
     
    mail.addEventListener("input",function(){
         e=mail.value
         console.log(e)
    })
    
    sub.addEventListener("click",function(event){
       event.preventDefault()
       console.log(e)
       if (e==""){
         mail.setAttribute("placeholder","Please enter a valid email address")
       }
       else{
           var welcome=document.createTextNode("Thank You, Your email address " + e + " has been added to our mailing list!")
           mess[0].append(welcome)
       }
 
    })
 
    
    
    
    
 }