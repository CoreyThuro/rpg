//document.addEventListener('DOMContentLoaded', mouseMoveFunction, false)

// let myAudio = document.getElementById('myAudio')
// const body = document.getElementById('body')



// body.addEventListener('click', mouseMoveFunction)


//  function mouseMoveFunction() {

//     myAudio.attributes.oncanplaythrough.value = "this.play()"
//     console.log(myAudio.attributes)
    
//  }


 //console.log(myAudio.attributes)


 function initializeScore() {
    let score = localStorage.getItem('score')
    console.log('zeeop')

    if(!score) {
        let score = 0
        window.localStorage.setItem("score", score)
        console.log('bapadadoo')
    }

    document.getElementById("score").innerHTML += score
}


function clickFunctionB() {
    let score = parseInt(localStorage.getItem('score'))

    score++

    window.localStorage.setItem("score", score)

    eraserFunction()
    document.getElementById("score").innerHTML += score
    console.log("bip")
}

function clickFunctionC() {
    let score = parseInt(localStorage.getItem('score'))

    score+=4

    window.localStorage.setItem("score", score)

    eraserFunction()
    document.getElementById("score").innerHTML += score
    console.log("bip")
}

function clickFunctionD() {
    let score = parseInt(localStorage.getItem('score'))

    score-=2

    window.localStorage.setItem("score", score)

    eraserFunction()
    document.getElementById("score").innerHTML += score
    console.log("bip")
}

function eraserFunction() {
    document.getElementById("score").innerHTML = " "
}

function resetFunction() {
    eraserFunction()
    let score = 0
    window.localStorage.setItem("score", score)
    document.getElementById("score").innerHTML += "" + score
}


initializeScore()


const buttonA = document.getElementById('choice-a')
buttonA.addEventListener("click", resetFunction)

const buttonB = document.getElementById("choice-b")
buttonB.addEventListener("click", clickFunctionB)

const buttonC = document.getElementById("choice-c")
buttonC.addEventListener("click", clickFunctionC)

const buttonD = document.getElementById("choice-d")
buttonD.addEventListener("click", clickFunctionD)