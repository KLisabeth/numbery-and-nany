function resetHandler() {
   debugger;
   event.preventDefault();

    document.getElementById('input').value = '';
    document.getElementById('numbery-save').innerHTML = [];
    document.getElementById('nany-save').innerHTML = [];
  
log.push({handler: 'reset', entries: JSON.parse(JSON.stringify(entries))
    })
 }