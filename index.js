const text = document.querySelector(".second-text")
const textLoader = ()=>{
    setTimeout(()=>{
        text.textContent  = "Developer"
    },0);
    setTimeout(()=>{
        text.textContent  = "Frontend Developer"
    },4000);
    setTimeout(()=>{
        text.textContent  = "Freelancer"
    },8000)
}
textLoader();
setInterval(textLoader,12000)