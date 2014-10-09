
A driver for the [OWI-535 Robotic Arm Kit w/ USB PC Interface](http://www.owirobots.com/)

## Installation

    npm install owi-robot-arm

## Getting started

Make sure the robot's USB cable is plugged in and the interface is turned on.

## Usage

    var OWIRobotArm = require('owi-robot-arm');

    var arm = new OWIRobotArm();

    //Turn on the led
    arm.ledOn();

    //Turn it back off
    arm.ledOff();

    //Move the base clockwise
    arm.baseClockwise();

    //Stop everything!
    arm.stop();

## Workout mode

You can give the arm a quick workout to test things out using grunt.

    grunt workout





