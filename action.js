const startProgress = ()=>{
	let myProgressBar = document.querySelector('.progress');
  let value =  document.querySelector('.value');
	  //let label = document.querySelector('label');
	  let displayVal = 0;
    let timer;
	  timer = setInterval(()=>{
    if(displayVal===90){
    clearInterval(timer)
    }
	    displayVal = displayVal + 10;
        //label.textContent = displayVal;
        myProgressBar.style.width = `${displayVal}%`;
        value.textContent = `${displayVal}%`;
        
     
       console.log("myProgressBar",displayVal);
	  },1000)
	 

}

