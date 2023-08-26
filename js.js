let string=" ";
  let buttons=document.querySelectorAll('button');
  //audio function
  function playaudio(){
const audio= new Audio("click2.mp3");
audio.play();
  }
  for(items of buttons){
    items.addEventListener('click',(e)=>{
     playaudio();
      if(e.target.innerHTML=='='){
        string=eval(string);
      }
      else if(e.target.innerHTML=='AC'){
        string=" ";
      }
      else if(e.target.innerHTML=='DE'){
        string=string.slice(0,-1);
      }
      else{
        string=string +e.target.innerHTML;
        
  
      }
      document.querySelector('input').value=string;
      
    })

  }
  