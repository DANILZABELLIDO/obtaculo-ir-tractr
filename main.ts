basic.forever(function () {
    if (HelloBot.Avoid_Sensor(HelloBot.enPos.LeftState, HelloBot.enAvoidState.OBSTACLE) || HelloBot.Avoid_Sensor(HelloBot.enPos.RightState, HelloBot.enAvoidState.OBSTACLE)) {
        HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_SpinRight, 110)
    } else {
        HelloBot.CarCtrlSpeed(HelloBot.CarState.Car_Run, 110)
    }
})
