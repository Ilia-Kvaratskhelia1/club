window.addEventListener("scroll", function(){
    let  header =document.querySelector("header");
    let   events = document.querySelector(".events-nav");
    header.classList.toggle("sticky" , window.scrollY > 0);
    events.classList.toggle("sticky" , window.scrollY > 0);
})

window.addEventListener("scroll" ,function(){
    let   events = document.querySelector(".events-nav");
    events.classList.toggle("stcky", this.window.scroll>0);

})


const mainslider=document.querySelector(".main-slider");
const sl1=document.querySelectorAll(".menu-item");

sl1.forEach((item , index) =>{
    item.addEventListener("click", ()=>{
        mainslider.style.transform = `translateX(${-100* index}vw)`;
        mainslider.style.transition = "1s";
    });
});


// login.......///////////////////
const slide = document.querySelector(".slide-sect");
function updatePage(e){
    e = e || window.event;
    let target = e.target || e.srcElement;
    console.log(target);
    document.querySelector("#loginvalue").innerHTML= `  <form action="/" method="get" id="form">
    <div id="reg">
        <div id="mail">
            <label for="names"></label>
            <input type="mail" placeholder="Enter Your Mail" id="names"  >
            </div>
        
            <div id="pass">
             <label for="password"></label>
             <input type="password" placeholder="Enter Your Passwod" id="password">
              </div>
        
              <div  id="btn">
                <button type="submit">Log in</button>
              </div>

              
              <div id="forgpass">
                  <a href="#">Forgot Passwod</a>
                </div>
                <div  id="creat" class="reg">
                  <button onclick="signinForm(event)" >Creat New Account</button>
              </div>
            </form> `;

            slide.style.display="none"
    
}
updatePage();

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
function signinForm(e){
    e = e || window.event;
    let target = e.target || e.srcElement;
    console.log(target);
    document.querySelector("#reg__form") =`<form action="/" method="get" id="form">
   <div id="reg">
       <div id="mail">
           <label for="names"></label>
           <input type="mail" placeholder="Enter Your Mail" id="names"  >
           </div>
       
           <div id="pass">
            <label for="password"></label>
            <input type="password" placeholder="Enter Your Passwod" id="password">
             </div>
       
             <div  id="btn">
               <button type="submit">Log in</button>
             </div>

             
             <div id="forgpass">
                 <a href="#"> ${ forgot }</a>
               </div>
               <div  id="creat" class="reg">
                 <button ><a style="text-decoration:none ; color:white;" href="../registration/index.html">Creat New Account</a></button>
             </div>
           </form>`
}


