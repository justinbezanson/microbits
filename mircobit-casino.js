input.onButtonPressed(Button.B, function () {
    if (score < 20) {
        score += 1
        basic.showNumber(score)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (hasRun == 0) {
        if (score == Math.randomRange(0, 20)) {
            loading()
            basic.showString("You Win!!!")
        } else {
            loading()
            basic.showString("You Lose")
        }
        hasRun = 1
    } else {
        hasRun = 0
        control.reset()
    }
})
function loading() {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (score > 0) {
        score += -1
        basic.showNumber(score)
    }
})
let hasRun = 0
let score = 0
score = 0
hasRun = 0
basic.showNumber(score)
basic.forever(function () {

})
