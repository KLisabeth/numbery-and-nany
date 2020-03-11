window.onload = () => {
    //debugger;
   event.preventDefault();

    document.getElementById('input').value = '';
    document.getElementById('numbery-save').innerHTML = [];
    document.getElementById('nany-save').innerHTML = [];
   
    const copyOfState = JSON.parse(JSON.stringify(entries));
    log.push({
      initialNumbers: copyOfState
    });
  }