import {consoleLog, consoleError, DisplayObject} from './Module.js';

// Date(year, month, day, hour, minute, second, ms)

//const date = new Date(2009, 9, 1, 2, 3, 4, 1000);

//const date = new Date("2009-10-15T00:00:00Z");
                 //Date("xxx-xx-xx(date)T(T stands for time) 
                 //      xx:xx:xxZ(Z stands for UTC time)" );
//Epic is the date that ur computer thinks time started from ()
//my epic: Thu Jan 01 1970 00:00:00
//const date = new Date(1700000000000) //1.7 billion ms
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();       
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

let dates = {
    Year: year,
    Month: month,
    Day: day,
    Hour: hour,
    Minutes: minutes,
    Seconds: seconds,
    DayOfWeek: dayOfWeek
}

date.setFullYear(2009);
date.setMonth(9);
date.setDate(15);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    consoleLog("HAPPY NEW YEAR");
}
consoleLog(date);
DisplayObject(dates)