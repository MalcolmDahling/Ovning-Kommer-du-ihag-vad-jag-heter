let LS = JSON.parse(localStorage.getItem('names'));

if(LS){
    for(let i = 0; i < LS.length; i++){
        addName( LS[i], i ); //stored name and index
    }
}

else{
    LS = [];
}






document.getElementById('save').addEventListener('click', function(){

    LS.push(document.getElementById('text').value);
    addName( LS[LS.length -1], LS.length-1 ); //stored name and index

    localStorage.setItem('names', JSON.stringify(LS));

    document.getElementById('text').value = '';
    addEventListeners();
});








function addEventListeners(){
    for(let i = 0; i < LS.length; i++){
        document.getElementById(i).addEventListener('click', function(){
            LS.splice(i, 1);
            localStorage.setItem('names', JSON.stringify(LS));
            document.getElementById(i).parentElement.remove();
        });
    }
}
addEventListeners();







function addName(name, index){
    document.body.insertAdjacentHTML('beforeend', '<div>'+name+' <button id="'+index+'">Delete</button> </div>');
}