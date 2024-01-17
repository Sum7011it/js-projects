const getcolor = ()=>{
    const randomno = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomno.toString(16);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color").innerText=randomcode;

}
document.getElementById("btn").addEventListener("click",getcolor)

//init call form funtion
getcolor();