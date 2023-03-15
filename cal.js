let display= document.querySelector('.down');
let buttons =  document.querySelectorAll('.bbb');

Array.from( buttons).forEach((button)=> {
  button.addEventListener('click',(e)=>{
   switch(e.target.innerText){
     case '=':{
      try{   display.innerText= eval(display.innerText);
         }
   catch{
        display.innerText= "error";
   }
    
             break;
     }
     case 'AC':
            
       {       display.innerText = "";
            break;
            
       }
     case 'DC':
       
       {
        display.innerText = display.innerText.slice(0,-1);
             break;
       }   
            
default :
   {  display.innerText=  display.innerText + e.target.innerText;
 
             break;
   }
   }
 })
    
})