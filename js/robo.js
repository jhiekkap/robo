const form = document.querySelector('form');
let move = null;
let error = document.querySelector('.error');

const wave = () => {
    if(document.querySelector('img').src === "http://localhost:8080/photos/heiluu.png"){
        console.log("KÄDET ALAS");
        document.querySelector('img').src = "photos/perus.png";
    } else {
        document.querySelector('img').src = "photos/heiluu.png";
        console.log("KÄDET YLÖS");
    }
}
form.addEventListener('submit', (event) => {
    console.log('click');
    if(form.code.value === 'robotto.wave();'){
         
        console.log("wave");
        error.innerHTML = '';
        move = setInterval(() => {
            wave();
        }, 400);
    } else if(form.code.value === 'robotto.stop();'){
        console.log("stop");
        error.innerHTML = '';
        clearTimeout(move);
        move = null;
    } else {
        console.log('ERROR!!')
        error.innerHTML = 'SYNTAX ERROR!!';
    }
    event.preventDefault();
});
 