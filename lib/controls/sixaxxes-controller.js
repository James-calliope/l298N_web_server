module.exports = exports = (io, motor) => {
  var dualShock = require('dualshock-controller');
  var controller = dualShock(
    {
        //you can use a ds4 by uncommenting this line.
        //config: "dualshock4-generic-driver",
        //if using ds4 comment this line.
        config : "dualShock3",
        //smo;/ m                        oths the output from the acelerometers (moving averages) defaults to true
        accelerometerSmoothing : true,
        //smooths the output from the analog sticks (moving averages) defaults to false
        analogStickSmoothing : false
    });
    controller.on('error', err => console.log(err));
    controller.on('battery:change', data => console.log(data));
    controller.on('connection:change', data => console.log(data));
    controller.on('charging:change', data => console.log(data));

    ///////////////
    function analog(data){

    }
    function connection(data){

    }
}