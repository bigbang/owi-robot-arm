var usb = require('usb')

function RobotArm() {
    this.device = usb.findByIds('0x1267', 0);

    if (!this.device) {
        console.error("OWI USB Device not found!");
        process.exit(1);
    }

    this.device.open();

    this.commands = {
        cmdLedOn: new Buffer([0x00, 0x00, 0x01]),
        cmdStop: new Buffer([0x00, 0x00, 0x00]),
        cmdGripsOpen: new Buffer([0x02, 0x00, 0x00]),
        cmdGripsClose: new Buffer([0x01, 0x00, 0x00]),
        cmdWristUp: new Buffer([0x04, 0x00, 0x00]),
        cmdWristDown: new Buffer([0x08, 0x00, 0x00]),
        cmdElbowUp: new Buffer([0x10, 0x00, 0x00]),
        cmdElbowDown: new Buffer([0x20, 0x00, 0x00]),
        cmdShoulderUp: new Buffer([0x40, 0x00, 0x00]),
        cmdShoulderDown: new Buffer([0x80, 0x00, 0x00]),
        cmdBaseClockwise: new Buffer([0x00, 0x01, 0x00]),
        cmdBaseCounterClockwise: new Buffer([0x00, 0x02, 0x00])
    }
}

RobotArm.prototype.ledOn = function () {
    this.sendCommand(this.commands.cmdLedOn);
}

RobotArm.prototype.ledOff = function () {
    this.sendCommand(this.commands.cmdStop);
}

RobotArm.prototype.gripsOpen = function () {
    this.sendCommand(this.commands.cmdGripsOpen);
}

RobotArm.prototype.gripsClose = function () {
    this.sendCommand(this.commands.cmdGripsClose);
}

RobotArm.prototype.wristUp = function () {
    this.sendCommand(this.commands.cmdWristUp);
}

RobotArm.prototype.wristDown = function () {
    this.sendCommand(this.commands.cmdWristDown);
}

RobotArm.prototype.elbowUp = function () {
    this.sendCommand(this.commands.cmdElbowUp);
}

RobotArm.prototype.elbowDown = function () {
    this.sendCommand(this.commands.cmdElbowDown);
}

RobotArm.prototype.shoulderUp = function () {
    this.sendCommand(this.commands.cmdShoulderUp);
}

RobotArm.prototype.shoulderDown = function () {
    this.sendCommand(this.commands.cmdShoulderDown);
}

RobotArm.prototype.baseClockwise = function () {
    this.sendCommand(this.commands.cmdBaseClockwise);
}

RobotArm.prototype.baseCounterClockwise = function () {
    this.sendCommand(this.commands.cmdBaseCounterClockwise);
}

RobotArm.prototype.stop = function () {
    this.sendCommand(this.commands.cmdStop);
}

RobotArm.prototype.sendCommand = function (cmd) {
    this.device.controlTransfer(0x40, 6, 0x100, 0, cmd);
}

module.exports = RobotArm;
