const  days   =document.querySelector("#days");
const  hours  =document.querySelector("#hours");
const  minuts =document.querySelector("#minuts");
const  seconds=document.querySelector("#seconds");

const getValue=document.querySelector(".getValue");
const getfun=document.querySelector(".function")
const getReset=document.querySelector(".getReset");

getValue.addEventListener('click',()=>{
    
    var getfunction=prompt("Would you mind entering what celebration ?")
    var getMonth=   prompt("Enter a Month in words exa 'jan' ");
    var getDate=    prompt("Enter a Date in number exa  '1'  ");
    var getYear=    prompt("Enter a Year in number exa '2000'");

    getfun.innerText=getfunction;
startTime=setInterval(()=>{
    // const currentYear=new Date().getFullYear();
    const celebrationDate=new Date(`${getMonth} ${getDate} ${getYear}`);
    const presentDate= new Date();
    const diffrence=celebrationDate-presentDate;
    
    const d=Math.floor(diffrence/1000/60/60/24);
    const h=Math.floor((diffrence/1000/60/60)%24);
    const m=Math.floor((diffrence/1000/60)%60);
    const s=Math.floor((diffrence/1000)%60);
    
    days.innerHTML   =(d<10? '0'+d:d);
    hours.innerHTML  =(h<10? '0'+h:h); 
    minuts.innerHTML =(m<10? '0'+m:m);
    seconds.innerHTML=(s<10? '0'+s:s);

    },1000)
})
getReset.addEventListener('click',()=>{
    clearInterval(startTime)
    d=h=m=s=0;
    days.innerHTML   =(d<10? '0'+d:d);
    hours.innerHTML  =(h<10? '0'+h:h);
    minuts.innerHTML =(m<10? '0'+m:m);
    seconds.innerHTML=(s<10? '0'+s:s);
    getfun.innerText='What special day'
})

/* 
    1000ms=1s
    60s=1m
    60m=1h
    24h=1d
*/
