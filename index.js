let text = document.querySelector('q')
let adviceNumber = document.querySelector('span')
let dice = document.querySelector('div')


function generateAdvice() {
    let generate = true

    if (generate) {
        fetch("https://api.adviceslip.com/advice")
            .then(res => {
                return res.json();
            })
            .then(data => {
                adviceNumber.innerText = data.slip.id
                text.innerText = data.slip.advice
            })
        dice.classList.add('diceRotating')
        setTimeout(() => {
            dice.classList.remove('diceRotating')
        }, 2000);
    }
    setTimeout(() => {
        dice.classList.add('waitForAnotherAdvice')
    }, 500);
    setTimeout(() => {
        dice.classList.remove('waitForAnotherAdvice')
    }, 2000);
    generate = false
    setTimeout(() => {
        generate = true
    }, 2000); // By default, generator api won't give another advice wihthin 2 seconds
}
function generateAdviceOnLoad() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json();
        })
        .then(data => {
            adviceNumber.innerText = data.slip.id
            text.innerText = data.slip.advice
        })
}

window.addEventListener('load', generateAdviceOnLoad())