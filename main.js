let LS = JSON.parse(localStorage.getItem('names'));
let names = [];

if(LS){
   names = LS; 
}





function listNames(){

    names.forEach(function(value, index){
        let name = document.createElement('div');
        name.innerHTML = '<input type="button" class="delete" value="Delete">';
        name.appendChild( document.createTextNode(names[index]) );
        document.getElementById('nameList').append(name);
    });

}





//add new name.
document.getElementById('save').addEventListener('click', function(){
    document.getElementById('nameList').innerHTML = ''; //removes all names.
    names.push( document.getElementById('text').value );

    localStorage.setItem( 'names', JSON.stringify(names) );

    listNames(); //re-adds all names including the new name.
    addDeleteClickEvent(); //re-adds click events.
    document.getElementById('text').value = ''; //removes the typed in name.
});





function addDeleteClickEvent(){
    let deleteButtons = document.getElementsByClassName('delete');

    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteName);
    }
}





function deleteName(){
    let index = names.indexOf(this.parentNode.textContent); //find index of the name the button shares div with.
   
    console.log(this.parentNode.textContent);

    names.splice(index, 1); //removes 1 element at index position.
    this.parentNode.remove();

    localStorage.setItem( 'names', JSON.stringify(names) );
}





listNames();
addDeleteClickEvent();