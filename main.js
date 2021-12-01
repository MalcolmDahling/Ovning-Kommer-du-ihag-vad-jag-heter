let LS = JSON.parse(localStorage.getItem('names'));

if(LS){
    for(let i = 0; i < LS.length; i++){
        document.body.innerHTML += '<div>'+LS[i]+'</div>';
    }
}


document.getElementById('save').addEventListener('click', function(){

    if(LS){
        LS.push(document.getElementById('text').value);
    }

    else{
        LS = [document.getElementById('text').value];
    }

    localStorage.setItem('names', JSON.stringify(LS));
});