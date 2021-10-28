input.onButtonPressed(Button.A, function () {
    nb_personnes = nb_personnes + 1
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    nb_personnes = 0
    basic.showString("Reset")
})
input.onButtonPressed(Button.AB, function () {
    nb_personnes = 20
})
input.onButtonPressed(Button.B, function () {
    nb_personnes = nb_personnes - 1
})
let nb_personnes = 0
basic.clearScreen()
nb_personnes = 0
basic.forever(function () {
    basic.showString("" + (nb_personnes))
})
basic.forever(function () {
    if (nb_personnes == 20) {
        music.ringTone(139)
        basic.pause(100)
        music.rest(music.beat(BeatFraction.Whole))
        basic.showString("Max")
    }
})
