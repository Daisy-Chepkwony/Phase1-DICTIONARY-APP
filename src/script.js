const input = document.getElementById('input');
const searchBtn=document.getElementById('btn');

searchBtn.addEventListener('click',e =>{
    console.log('Hello World!!')
    e.preventDefault();

    const searchedWord=input.value;
    console.log(searchedWord);
    if (searchedWord==="");
    alert('Please enterd the searched Word');
    return;
})