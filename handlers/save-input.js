function saveHandler() {
    debugger;
    event.preventDefault();

    const input = document.getElementById('input').value;
    const numberyUl = document.getElementById('numbery-save');
    const nanyUl = document.getElementById('nany-save');
    const newNumbery = entries.numbery;
    const newNany = entries.nany; 

    const newInput = input.trim();
    if (newInput === " " || newInput === null || newInput === '') {
        alert("Please type some characters");
        return false;
    }
    if (newNumbery.filter(function (i) { return i === newInput; }).length > 0) {
        alert('This character already exists!');
        return false
    }
    if (newNany.filter(function (i) { return i === newInput; }).length > 0){
        alert('This character already exists!');
        return false
    }
 
   function processText(input) {
        var output = [];
        var json = input.split(' ');
        json.forEach(function (item) {
            output.push(item.replace(/\'/g, '').split(/(\d+)/).filter(Boolean)); // to separate 
        });
        return output;
    }
    
    console.log(JSON.stringify(processText(input)));

    let numbers = Number(input);
    let words = String(input);
    if (numbers) { 
        const li = document.createElement('li');
        li.innerHTML = numbers;
        numberyUl.appendChild(li);
        entries.numbery.push(numbers)
    }else if (words) {
        const li = document.createElement('li');
        li.innerHTML = words;
        nanyUl.appendChild(li); }
        entries.nany.push(words)
   
     
    log.push({
            handler: 'save',
            input,
            newInput,
            newNumbery,
            newNany
 });

}
