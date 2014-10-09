var OWIRobotArm = require('../lib/OWIRobotArm');

var arm = new OWIRobotArm();

var actions = [];

//Give the robot a little workout.
//Queue up a bunch of actions.
actions.push(function () {
    arm.ledOn()
});
actions.push(function () {
    arm.ledOff()
});
actions.push(function () {
    arm.gripsOpen();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.gripsClose();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.wristUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.wristDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.elbowUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.elbowDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.shoulderUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.shoulderDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.baseClockwise();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.baseCounterClockwise();
});
actions.push(function () {
    arm.stop();
});

var i = 0;
//execute em!
var interval = setInterval(function () {
        if (i < actions.length) {
            actions[i]();
            i++;
        }
        else {
            clearInterval(interval);
            return;
        }
    },
    500);
