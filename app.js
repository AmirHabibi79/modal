const modal_parent=document.querySelector(".modal-parent");
const modal=document.querySelector(".modal");
const button=document.querySelector(".modal-show");
const bar=document.querySelector(".bar");
const count=document.querySelector(".count");
let isopned=false
let num=10
let interval;
count.innerHTML=num
const toggleModal=()=>{
isopned=!isopned
if(isopned){
    modal_parent.style.opacity="1"
    modal_parent.style.visibility="visible"
    modal.style.transform="scale(.9)"
    modal.style.opacity="1"
     setTimeout(()=>{
            bar.style.animationDuration=num+"s"
            bar.style.animationName="bar"
            interval=setInterval(()=>{
                num-=1
                count.innerHTML=num;
                if(num===0){
                    toggleModal()
                }
            },1000)
        },300)
}
else{
    clearInterval(interval)
   modal.style.transform="scale(1)";
   modal.style.opacity="0"
   bar.style.animationName=""
   setTimeout(()=>{
    modal_parent.style.opacity="0"
    modal_parent.style.visibility="hidden"
    num=10;
    count.innerHTML=num
   },300)
}
}

button.addEventListener("click",()=>{
    toggleModal()
})

document.addEventListener("pointerdown",(e)=>{
    if(e.target.closest(".modal")){
        return
    }else{
        if(isopned===true){
            toggleModal()
        }
    }
})