const input = document.getElementById('input');
const searchBtn=document.getElementById('btn');
const notFoundWord=document.querySelector('.cant_find_word');
const definationBox=document.querySelector('.defination');
const audioBox=document.querySelector('.audio');

searchBtn.addEventListener('click',e =>{
    // console.log('Hello World!!')
    e.preventDefault();

    const searchedWord=input.value;
    // console.log(searchedWord);
    if (searchedWord===""){
    alert('Please entered the searched Word');
    return;
    }
    
    getSearchedWord(searchedWord);
    notFoundWord.innerText="";
    audioBox.innerText="";
    definationBox.innerText="";
});

async function getSearchedWord(searchedWord){
    const response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchedWord}?key=696bb10c-9957-46a7-a71d-ebdc6368e23d`);
    const data = await response.json();
    console.log(data);

    if (!data.length){
        notFoundWord.innerText="No results Found";
        return;
    }
    if (typeof data[0] === 'string'){ //if result is suggestions
        let heading = document.createElement('h2');
        heading.innerText = 'Did you mean?';
        notFoundWord.appendChild(heading);

        data.forEach(element => {
            let suggestion=document.createElement('span');
            suggestion.classList.add('suggested');
            suggestion.innerText=element;
            notFoundWord.appendChild(suggestion);
            
        });
        return;
    }
    
}
    
