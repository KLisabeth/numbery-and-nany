function removeHandler() {
  debugger;
  event.preventDefault();

  let removed = [];
   const removeInput = document.getElementById('input').value;
   const newNumbery = entries.numbery;
   const newNany = entries.nany; 
 
 if (!isNaN(removeInput)) {
       let indexOfremoveInput = '';
       if (newNumbery.includes(removeInput)) {
           indexOfremoveInput = entries.numbery[indexOf(Number(removeInput))];
           removed = newNumbery.splice(indexOfremoveInput,1);
       }
       let ulEl = document.getElementById('numbery-save'); 
       ulEl.removeChild(ulEl.childNodes[0]);

   } else {
       let indexOfremoveInput = '';
       if (newNany.includes(removeInput)) {
           indexOfremoveInput = newNany.indexOf(removeInput);
           removed = newNany.splice(indexOfremoveInput, 1);
       }
       let ulEl = document.getElementById('nany-save');
       ulEl.removeChild(ulEl.childNodes[indexOfremoveInput]);
       
   }

   document.getElementById('input').value = '';  
  
    log.push({
            handler:'remove',
            removeInput,
            newNumbery,
            newNany,
            removeInput,
           
 });
  
 
}
