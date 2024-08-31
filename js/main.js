let btn = document.querySelector(".btn");
let sub = document.querySelector(".cta-button");
let body = document.querySelector("#bb");

let colors = [
    {backgroundColor: "#c1ffa2",text:"#252525"},
    {backgroundColor: "linear-gradient(90deg, #1f3c88, #00bfa6)"},
    {backgroundColor: "#505ec8"}
];

let currentIndex = 0; 

btn.addEventListener("click", function() {
   
    
    body.style.background = colors[currentIndex].backgroundColor;
    if(currentIndex == 0){
    body.style.color = colors[currentIndex].text;
}else{
    body.style.color = "#fff";

}
if(currentIndex == 1 ){
    sub.style.background = '#3858df';
}
if(currentIndex == 2 ){
    sub.style.background = '#3858df';
}else{
    sub.style.background = '#2c00d0';
}

    currentIndex = (currentIndex + 1) % colors.length;
});
