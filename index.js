const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];

let cadastros = {};

/*
console.log(nome);
console.log(comando);
console.log(email);
*/

if(comando === "salvar"){
    cadastros[nome]= email;
}
else if(comando === "buscar"){
    console.log(cadastros[nome]);
}
else if(comando === "buscar-todos"){
    console.log(cadastros);
}
else{
    console.log("Ta Na Disney ? ");
}

cadastros[nome] = email;

console.log(cadastros);