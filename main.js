let input=document.getElementById("password")
let message=document.getElementById("message");
let strength=document.getElementById("strength");
console.log(input);
input.addEventListener("input",()=>{
    let lenPass=input.value.length;
    if (lenPass>0){
        message.style.display="block";
        console.log(input.value.length)

    }
    else{
        message.style.display="none"
    }
    if(lenPass>8){
        strength.innerHTML="Strong";
        message.style.color="green";

    }
    else if (lenPass<=8 && lenPass>=4){
        message.style.color="white";
        strength.innerHTML="medium"

    }
    else if (lenPass<4){
        message.style.color="red";
        strength.innerHTML="Weak"
        
    }

})