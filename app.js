// UI Components
const UIgameBody = document.getElementById('game-body')

// init classes
const ui = new UI()
const local = new Local()

// Event Listeners
UIgameBody.addEventListener('click', displayImg)
document.addEventListener('DOMContentLoaded', displayScore)

// Display score function
function displayScore() {
    const scoreboard = local.initLS().scores

    ui.paintScores(scoreboard)
}

// Display image function
function displayImg(e) {
    const random = randomNo()
    let imgArr

    if(e.target.classList.contains('img-container')) {
        ui.paint(e.target, random)
       local.setLS(e.target.children[0].getAttribute('src'), null) 
    }

    imgArr = local.initLS().imgs

    setTimeout(() => {
        if(imgArr.length === 2) {
            // Compare function
            compareImg(imgArr)

            // Clear LS
            local.clearLS()
        }
    }, 500)
}


// Random generator function
function randomNo() {
    const random = Math.floor(Math.random() * 6)

    return random
}


// Comparing images function
function compareImg(imgArr) {
    let score = 0
    let attempt = 0
    let scoreboard 

    if(imgArr[0] === imgArr[1]) {
        score++
        alert("You've got a match")
    }else {
        score = 0
        alert("Not a match, Try again")
    }

    attempt++

    scoreboard = {
        'Score' : score,
        'Attempt' : attempt
    }

    local.setLS(null, scoreboard)

    window.location.reload()
}
