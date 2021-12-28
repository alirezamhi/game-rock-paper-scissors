let yourChoose = document.querySelectorAll('.yourChoose div');
let pcElement = document.querySelectorAll('.pcChoose div');

let randomNumber , pcChoose ;
yourChoose[0].addEventListener('click' , choose);
yourChoose[1].addEventListener('click' , choose);
yourChoose[2].addEventListener('click' , choose);
function choose() {
    randomNumber = Math.floor(Math.random() * 3);
    pcChoose = pcElement[randomNumber];
    pcChoose.classList.remove('display');
}
