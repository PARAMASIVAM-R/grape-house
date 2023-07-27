 var hours=document.querySelectorAll(".h");
 var minuts=document.querySelectorAll(".m");
 var seconds=document.querySelectorAll(".s");
 var text=document.querySelector(".txt");
 
function currentTime(){
    var time=new Date();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var hrs=time.getHours();
    var txt="AM";
    // console.log(hrs,typeof(hrs));
    if(hrs>12){
        hrs=hrs-12;
        txt='PM';
    }else if(hrs==0){
        hrs=12;
        txt='AM';
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    hrs=hrs.toString();
    hours[0].innerHTML=hrs[0];
    hours[1].innerHTML=hrs[1];

    min=min.toString();
    minuts[0].innerHTML=min[0];
    minuts[1].innerHTML=min[1];

    sec=sec.toString();
    seconds[0].innerHTML=sec[0];
    seconds[1].innerHTML=sec[1];

    text.innerHTML=txt;
}
setInterval(currentTime,1000);
