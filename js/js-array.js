//Array literal

var array1 = [];
var array2 = ["Pedro", "João", "Maria"];
var array3 = ["Pedro", 45, false,{endereco: "Crivialli, 528" }];

console.log(array2[2]);
console.log(array3[3].endereco);

//array com construtor
var array4 = new Array();
var array5 = new Array("João", 45, false,{telefone: "4432445402", celphone: "4499556974"});

console.log(array5[1]);
console.log(array5[3].celphone);