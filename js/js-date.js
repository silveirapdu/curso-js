var data = new Date("2018-12-31 12:11:33.21222");
console.log(data.getDate()+1);
console.log(data.getMonth()+1);

console.log("------DATA----------");
console.log(data);

var dataString = new Date(2019,01,02,12,11,33);
console.log(dataString.getFullYear());
console.log(dataString.getMonth());
console.log(dataString.getDate());

console.log("Foramato dd/mm/yyyy: ",dataString.getDate(),"/",dataString.getMonth(), "/", dataString.getFullYear());

console.log("------HORA----------");
console.log(dataString.getHours());
console.log(dataString.getMinutes());
console.log(dataString.getSeconds())

console.log("Hora formato HH:mm:ss: ", dataString.getHours(), ":",dataString.getMinutes(),":",dataString.getSeconds())