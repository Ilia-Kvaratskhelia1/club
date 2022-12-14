// window.addEventListener("scroll", function(){
//     let  header =document.querySelector("header");
//     let   events = document.querySelector(".events-nav");
//     header.classList.toggle("sticky" , window.scrollY > 0);
//     events.classList.toggle("sticky" , window.scrollY > 0);
// })




// const slide = document.querySelector('.slidewrapper');
// const menuitem = document.querySelectorAll('.menu-item');

// menuitem.forEach((item , index) =>{
//     item.addEventListener("click", ()=>{
//         slide.style.transform = `translateX(${-100 * index}vw)`
//     });
const form = document.getElementById("form")
const names = document.getElementById("names");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");

form.addEventListener('submit' ,(e)=>{
    let notmessage =[];

    if(names.value ==='' || names.value ===null){
        notmessage.push('Name is required');
        console.log('error');
    }
    
    if(password.value.length <= 6){
        notmessage.push('password must be less than 6 charactes');
        console.log('password must be less than 6 charactes');
    }
    if(password.value.length >=20){
        notmessage.push('password must be less than 20 charactes');
        console.log('password must be less than 20 charactes');
    }
    if(notmessage.length > 0){
        e.preventDefault()
        errorElement.innerHTML = notmessage.join(', ');
    }

})


