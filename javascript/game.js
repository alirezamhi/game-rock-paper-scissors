let yourChoose = document.querySelectorAll('.yourChoose div');
yourChoose[0].addEventListener('click' , choose);
yourChoose[1].addEventListener('click' , choose);
yourChoose[2].addEventListener('click' , choose);
function choose() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    
}