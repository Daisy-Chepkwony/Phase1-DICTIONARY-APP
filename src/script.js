const input = document.getElementById('input');
const searchBtn=document.getElementById('btn');
const notFoundWord=document.querySelector('.cant_find_word');
const apiKey='';

searchBtn.addEventListener('click',e =>{
    // console.log('Hello World!!')
    e.preventDefault();

    const searchedWord=input.value;
    // console.log(searchedWord);
    if (searchedWord===""){
    alert('Please enterd the searched Word');
    return;
    }
    
    getSearchedWord(searchedWord);
});

async function getSearchedWord(searchedWord){
    const response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchedWord}?key=696bb10c-9957-46a7-a71d-ebdc6368e23d`);
    const data = await response.json();
    console.log(data);
    
    

}