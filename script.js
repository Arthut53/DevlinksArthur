const button = document.querySelector('button')
const html = document.querySelector('html')

const img = document.querySelector('#profile img ')

button.addEventListener('click', lightMode)

function lightMode(){
    if(html.classList.contains('light')){
 html.classList.remove('light')
html.classList.add('black')
    }
   
else{

    html.classList.add('light')
    HTMLFormElement.classList.remove('black')

}

}



