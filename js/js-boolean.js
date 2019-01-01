var contaStatus = false;

if (contaStatus) {
    console.log("Envia Email!");
} else {
    console.log("Ative sua Conta!!");
}

var nome = "Cleverson";

// 6 objetos que sempre serão falsos
console.log(!!"");//String Vazia.
console.log(!!0);//Zero
console.log(!!-0);// -Zero
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);

//Objetos que serão verdadeiros
console.log(!!Array);
console.log(!!Function);
console.log(!!Object);