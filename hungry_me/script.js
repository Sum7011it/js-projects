let trendfood = document.querySelectorAll(".trendfood");
let foodcard = document.querySelectorAll(".foodcard");


let count = 0;

trendfood.forEach((imgs, index)=>{
    imgs.style.left=`${index*100}%`;
})
const myFun  = ( ) =>{
    trendfood.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}
setInterval(()=>{
    count++;
    if(count == trendfood.length){
        count=0
    }
    myFun()
},4000)

//food details
foodcard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias, est excepturi inventore id minus! Aliquid at facilis quam a hic debitis?</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})