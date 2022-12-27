function showDirection () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
}
let MoteurDroit = 0
let MoteurGauche = 0
let Puissance = 0
joystickbit.initJoystickBit()
let lastDirection = 0
basic.forever(function () {
    showDirection()
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("button", 3)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("button", 0)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("button", 1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("button", 2)
    } else {
        Puissance = (joystickbit.getRockerValue(joystickbit.rockerType.Y) - 500) / 10
        MoteurGauche = Puissance * joystickbit.getRockerValue(joystickbit.rockerType.X) / 1000
        MoteurDroit = Puissance * (1000 - joystickbit.getRockerValue(joystickbit.rockerType.X)) / 1000
        radio.sendValue("directionXY", MoteurGauche * 1000 + MoteurDroit)
    }
})
