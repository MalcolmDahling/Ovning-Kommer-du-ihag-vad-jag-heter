let names = JSON.parse(localStorage.getItem('names'));

function renderArray(){
    for(let i = 0; i < names.length; i++){
        addName(names[i], i);
    }
}

if(names){
    renderArray();
}
else{
    names = [];
}



let id = names.length; //++ makes sure all new buttons gets a new id.

document.getElementById('save').addEventListener('click', function(){
    names.push(document.getElementById('text').value);
    localStorage.setItem('names', JSON.stringify(names));
    
    addName(document.getElementById('text').value, id);
    id++;

    document.getElementById('text').value = '';

    addEventListeners();
});




function addEventListeners(){
    let del = document.getElementsByClassName('delete');

    for(let i = 0; i < del.length; i++){
        del[i].addEventListener('click', function(){
            names.splice(this.id, 1);
            localStorage.setItem('names', JSON.stringify(names));
            this.parentElement.remove();
        });
    }
}
addEventListeners();





function addName(name, id){
    document.body.insertAdjacentHTML('beforeend', '<div>'+name+' <button class="delete" id="'+id+'">Delete</button></div>');
}