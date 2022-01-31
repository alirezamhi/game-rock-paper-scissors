let yourChoose = document.querySelectorAll('.yourChoose div');
let pcElement = document.querySelectorAll('.pcChoose div');
let pTagYourChoose = document.querySelectorAll('p-yourChoose');
let scoreYou = document.querySelector('.scoreyou');
let scorePc = document.querySelector('.scorepc');


let randomNumber , pcChoose ;
yourChoose[0].addEventListener('click' , choose);
yourChoose[1].addEventListener('click' , choose);
yourChoose[2].addEventListener('click' , choose);
function choose(event) {
    randomNumber = Math.floor(Math.random() * 3);
    pcChoose = pcElement[randomNumber];
    pcChoose.classList.remove('display');
    let yourChoseClase = event.target.classList[0];
    let pcChoseClase =  pcChoose.classList[0];
    if(yourChoseClase === pcChoseClase){
        scoreYou.innerHTML =  parseInt(scoreYou.innerHTML) + .5 ;
        scorePc.innerHTML =  parseInt(scorePc.innerHTML) + .5 ;
    }
    if(yourChoseClase = "paper"){
        if(pcChoseClase = "rock"){
            scoreYou.innerHTML =  parseInt(scoreYou.innerHTML) + 1 ;
        }else if(pcChoseClase = "scissors"){
            scorePc.innerHTML =  parseInt(scorePc.innerHTML) + 1 ;
        }
    }else if(yourChoseClase = "rock"){
        if(pcChoseClase = "scissors"){
            scoreYou.innerHTML =  parseInt(scoreYou.innerHTML) + 1 ;
        }else if(pcChoseClase = "paper"){
            scorePc.innerHTML =  parseInt(scorePc.innerHTML) + 1 ;
        }
    }else if(yourChoseClase = "scissors"){
        if(pcChoseClase = "paper"){
            scoreYou.innerHTML =  parseInt(scoreYou.innerHTML) + 1 ;
        }else if(pcChoseClase = "rock"){
            scorePc.innerHTML =  parseInt(scorePc.innerHTML) + 1 ;
        }
    }
}
