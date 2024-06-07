


let container = document.getElementById("container");
let doneTxt=document.getElementById("done");
let imageTag = document.getElementById("image");

function numGenerator() {
    var n = Math.floor((Math.random() * 6)+1);
    imageTag.setAttribute("src",`image/dice-${n}.png`);    
}

function imgGenerator() {
    doneTxt.innerText = "";
    let sumDelay = 0;
    for (var i = 0; i < 12; i++) {
        setTimeout(() => { numGenerator() }, 500 * i);
       
        //seconde = 300 300 600 1800 
    }
    sumDelay=(i * 500);
   setTimeout(()=> doneTxt.innerText="Roll again!!" ,sumDelay )
    

}
container.addEventListener("click", () => {
    imgGenerator();
});
