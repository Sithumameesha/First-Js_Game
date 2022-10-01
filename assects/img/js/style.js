var chara =document.getElementById("cha");
var block =document.getElementById("block");
function jump(){
    if (chara.classList != "animate"){
        chara.classList.add("animate");
    }

    setTimeout(function (){
        chara.classList.remove("animate")
    },500);
}
var dead = setInterval(function (){
   var chatop =
       parseInt(window.getComputedStyle(chara).getPropertyValue("top"));

    var chaleft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (chaleft<20 && chaleft>0 &&
    chatop>=100){
        block.style.animation = "none";
        block.style.display ="none";
        Swal.fire('You Lose Try Again')
    }
},10);