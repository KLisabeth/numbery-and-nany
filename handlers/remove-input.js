function removeHandler() {
  debugger;
  event.preventDefault();

  let removed = [];
   const removeInput = document.getElementById('input').value;
   const newNumbery = entries.numbery;
   const newNany = entries.nany; 

  
 
 if (Number(removeInput)) {
       let indexOfremoveInput = '';
       if (newNumbery.includes(removeInput)) {
           indexOfremoveInput = newNumbery[indexOf(!isNaN(removeInput))];
           removed = newNumbery.splice(indexOfremoveInput,1);
       }
       let ulEl = document.getElementById('numbery-save'); 
       ulEl.removeChild(ulEl.children[0]);

   } else {
       let indexOfremoveInput = '';
       if (newNany.includes(removeInput)) {
           indexOfremoveInput = newNany[indexOf(isNaN(removeInput))];
           removed = newNany.splice(indexOfremoveInput, 1);
       }
       let ulEl = document.getElementById('nany-save');
       ulEl.removeChild(ulEl.children[0]);
       
   }
   
   document.getElementById('input').value = '';  
  
    log.push({
            handler:'remove',
            removeInput,
            newNumbery,
            newNany,
            
           
 });
  
 
}
