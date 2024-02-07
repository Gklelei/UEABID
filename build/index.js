var num = 0;
document.addEventListener("DOMContentLoaded", function(){
   let mynum =()=>{
        num++
        count = document.querySelector('h1');
        count.innerHTML = num;

        if(num % 5 === 0){
            alert(`THE COUNT IS: ${num}`);
        }
    }
    document.querySelector('button').onclick = mynum;
})