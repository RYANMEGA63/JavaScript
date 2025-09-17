import { getArea, getCircumference, getVolume, PI } from './mathUtil.js';
import { consoleLog, consoleError, DisplayObject } from './Module.js';

// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              can contain variables, classes, functions ... and more
//              introduced as part of ECMAScript 2015 update

consoleLog(PI);
const circ = getCircumference(10);
consoleLog(`Circumference: ${circ.toFixed(2)} cm`)
consoleLog(`Area: ` + getArea(20).toFixed(2) + " cm^2");
consoleLog(`Volume: ` + getVolume(20).toFixed(2) + " cm^3");