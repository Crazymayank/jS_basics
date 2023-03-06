let namsatebtn= document.querySelector('button');
namsatebtn.addEventListener('click', showMsg);

function showMsg(){
    let name= prompt('Enter the student name');
    namsatebtn.textContent= 'student name is: '+ name;
}