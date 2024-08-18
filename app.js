let btn=document.querySelector("#main_box button");
btn.addEventListener("click",changecolor);
function changecolor(){
    let r=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    document.querySelector("#main_box div").style.backgroundColor=`rgb(${r},${g},${b})`;
    document.querySelector("h1").innerText=`rgb(${r},${g},${b})`;
}