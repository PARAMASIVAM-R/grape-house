/*------variable declaration for times-------*/ 
let hours  =document.querySelectorAll('.h');
let minutes=document.querySelectorAll('.m');
let seconds=document.querySelectorAll('.s');

var text=document.querySelector('.txt');
/*------variable declaration for dates-------*/ 
let d =document.querySelector('.numDate');
let m =document.querySelector('.numMonth');
let y =document.querySelector('.numYear');

function digitalTime(){
    var time=new Date();
    let hrs=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    // console.log(hrs)
    sec=sec<10?'0'+sec:sec;
    min=min<10?'0'+min:min;
    hrs=hrs<10?'0'+hrs:hrs;
    // console.log(hrs,typeof(hrs))

    if(hrs>12){
        var txt='PM';
        hrs=hrs-12;
    }else if(hrs==12){
        txt='PM'
        hrs=12
    }
    else if(hrs==0){
        txt='AM';
        hrs=12;
    }
    else if(hrs<12){
        txt='AM'
    }
    // console.log(hrs,typeof(hrs))
    hrs=hrs<10?'0'+hrs:hrs;

    hrs=hrs.toString()
    hours[0].innerHTML=hrs[0];
    hours[1].innerHTML=hrs[1];

    min=min.toString()
    minutes[0].innerHTML=min[0];
    minutes[1].innerHTML=min[1];

    sec=sec.toString()
    seconds[0].innerHTML=sec[0];
    seconds[1].innerHTML=sec[1];

    text.innerHTML=txt;
};
digitalTime();
setInterval(digitalTime,1000);

function digitalDate(){
    var time=new Date();
    let date =time.getDate();
    let month=time.getMonth()+1;
    let year =time.getFullYear();
 
    date=date<10?'0'+date:date;
    month=month<10?'0'+month:month;
  
    d.innerHTML=date;
    m.innerHTML=month;
    y.innerHTML=year;
};
  digitalDate();
  setInterval(digitalDate,1000);

var dayNum_0=document.querySelector('.day-1');
var dayNum_1=document.querySelector('.day-2');
var dayNum_2=document.querySelector('.day-3');
var dayNum_3=document.querySelector('.day-4');
var dayNum_4=document.querySelector('.day-5');
var dayNum_5=document.querySelector('.day-6');
var dayNum_6=document.querySelector('.day-7');
function daySelect(){
    var time=new Date();
    let date=time.getDay();
    date=date.toString();
    switch (date)
    {
        case '0':
            let n0=date+1/1;
            dayNum_0.style.setProperty('--bright',n0);/*---sunday---0*/
            break;
        case '1':
            let n1=date/1;
            dayNum_1.style.setProperty('--bright',n1);
            break;
        case '2':
            let n2=date/2;
            dayNum_2.style.setProperty('--bright',n2);
            break;
        case '3':
            let n3=date/3;
            dayNum_3.style.setProperty('--bright',n3);
            break;
        case '4':
            let n4=date/4;
            dayNum_4.style.setProperty('--bright',n4);
            break;
        case '5':
            let n5=date/5;
            dayNum_5.style.setProperty('--bright',n5);
            break;
        case '6':
            let n6=date/6;
            dayNum_6.style.setProperty('--bright',n6);/*---saturday----6-- */
            break;
       }
}
daySelect(); 
setInterval(daySelect,3500000);
/* 3500000ms=1h ,35000ms=1m,50000ms=1s,1000ms=1s*/
var month_0 =document.querySelector('.month-0 ');
var month_1 =document.querySelector('.month-1 ');
var month_2 =document.querySelector('.month-2 ');
var month_3 =document.querySelector('.month-3 ');
var month_4 =document.querySelector('.month-4 ');
var month_5 =document.querySelector('.month-5 ');
var month_6 =document.querySelector('.month-6 ');
var month_7 =document.querySelector('.month-7 ');
var month_8 =document.querySelector('.month-8 ');
var month_9 =document.querySelector('.month-9 ');
var month_10=document.querySelector('.month-10');
var month_11=document.querySelector('.month-11');

function monthSelect(){
    var time=new Date();
    let monthNum=time.getMonth();

    monthNum=monthNum.toString();
    switch(monthNum)
    {
        case '0':
            let m0=monthNum+1/1;
            month_0.style.setProperty('--brighten',m0);
            break;
        case '1':
            let m1=monthNum/monthNum;
            month_1.style.setProperty('--brighten',m1);
            break;
        case '2':
            let m2=monthNum/monthNum;
            month_2.style.setProperty('--brighten',m2);
            break;
        case '3':
            let m3=monthNum/monthNum;
            month_3.style.setProperty('--brighten',m3);
            break;
        case '4':
            let m4=monthNum/monthNum;
            month_4.style.setProperty('--brighten',m4);
            break;
        case '5':
            let m5=monthNum/monthNum;
            month_5.style.setProperty('--brighten',m5);
            break;
        case '6':
            let m6=monthNum/monthNum;
            month_6.style.setProperty('--brighten',m6);
            break;
        case '7':
            let m7=monthNum/monthNum;
            month_7.style.setProperty('--brighten',m7);
            break;
        case '8':
            let m8=monthNum/monthNum;
            month_8.style.setProperty('--brighten',m8);
            break;
        case '9':
            let m9=monthNum/monthNum;
            month_9.style.setProperty('--brighten',m9);
            break;
        case '10':
            let m10=monthNum/monthNum;
            month_10.style.setProperty('--brighten',m10);
            break;
        case '11':
            let m11=monthNum/monthNum;
            month_11.style.setProperty('--brighten',m11);
            break;

    }
    // console.log(monthNum,typeof(monthNum));   
}
monthSelect();
setInterval(monthSelect,3500000);
