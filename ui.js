class UI {
    constructor() {
        this.imgArr = ['img/cake.jpg', 'img/man.jpg', 'img/tiger.jpg', 'img/man.jpg', 'img/tiger.jpg', 'img/cake.jpg']
    }

    paint(target, random) {
        let innerHtml = `
            <img src=${this.imgArr[random]} alt="" style="height: 100%; width: 100%;">
        `
        target.innerHTML = innerHtml
    }

    paintScores(scoreboard) {
        const score = document.getElementById('score')
        const attempt = document.getElementById('attempt')

        score.textContent = `
            Score : ${scoreboard[0].Score}
        `

        attempt.textContent = `
            Attempt : ${scoreboard[0].Attempt}
        `
    }
}