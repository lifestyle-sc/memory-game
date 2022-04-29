class Local {
    constructor () {
        this.imgs
        this.scores
    }

    initLS() {
        if(localStorage.getItem('Img') === null) {
            this.imgs = []
        }else {
            this.imgs = JSON.parse(localStorage.getItem('Img'))
        }

        if(localStorage.getItem('Scores') === null) {
            this.scores = [{'Score' : 0, 'Attempt' : 0}]
        }else {
            this.scores = JSON.parse(localStorage.getItem('Scores'))
        }

        return {
            imgs : this.imgs,
            scores : this.scores
        }
    }

    setLS(img, scoreboard) {

        let imgss = this.initLS().imgs
        let scores = this.initLS().scores
        let newAttempt
        let newScore
        let newScoreboard

        if(img !== null && scoreboard === null){
            imgss.push(img)

            localStorage.setItem('Img', JSON.stringify(imgss))

        }else if(img === null && scoreboard !== null) {

            newAttempt = this.shitStuff(scores, scoreboard).Attempt

            newScore = this.shitStuff(scores, scoreboard).Score

                newScoreboard = {
                    'Score' : newScore,
                    'Attempt' : newAttempt
                }

                scores.unshift(newScoreboard)

                localStorage.setItem('Scores', JSON.stringify(scores))
        }
        
    }

    shitStuff(scores,scoreboard) {
        let newAttempt
        let newScore

        newAttempt = scoreboard.Attempt + scores[0].Attempt

        if(scoreboard.Score === 0) {
            return {
                'Score' : scoreboard.Score,
                'Attempt' : newAttempt
            }
        }else {
            newScore = scoreboard.Score + scores[0].Score

            return {
                'Score' : newScore,
                'Attempt' : newAttempt
            }
        }
    }

    clearLS() {

        localStorage.removeItem('Img')
    }
}