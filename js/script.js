// window.onload=function() {
    
// }
 const btn=document.querySelector('.bar-box ');
 const mobile_menu=document.querySelector('.mobile-menu ');

 btn.addEventListener('click',()=>{
    btn.classList.toggle('is-active');

    mobile_menu.classList.toggle('is-active');

 })

 const un_order=document.querySelector('.un-order');
  
 un_order.addEventListener('click',()=>{
   btn.classList.toggle('is-active');

   mobile_menu.classList.toggle('is-active');
 })