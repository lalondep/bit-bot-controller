joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("button", 2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendValue("button", 3)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("button", 1)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
	
})
joystickbit.initJoystickBit()
let lastDirection = 0
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        lastDirection = 1
        radio.sendValue("direction", 1)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        lastDirection = 2
        radio.sendValue("direction", 2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendValue("direction", 3)
        lastDirection = 3
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
        radio.sendValue("direction", 4)
        lastDirection = 4
    } else if (lastDirection != 0) {
        lastDirection = 0
        radio.sendValue("direction", 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendValue("button", 0)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendValue("button", 1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendValue("button", 2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendValue("button", 3)
    } else {
    	
    }
})
