const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];
const fs = require("fs");
const arquivo = "cadastros.json";

let cadastros = {};

fs.readFile(arquivo, (err, dados)=>{

    if(!err){
        let dadosString = dados.toString();
        let cadastros = JSON.parse(dadosString);
    }
    let dadosString = dados.toString();
    let cadastros = JSON.parse(dadosString);

    if(comando === "salvar"){
        cadastros[nome]= email;
    
        let dados = JSON.stringify(cadastros);
    
        fs.writeFile("cadastros.json", dados, (err)=>{
            if(err){
                console.log("Deu Ruim");
            }
            else{
                console.log("Salvo Com sucesso");
            }
        });
    }
    else if(comando === "buscar"){
        console.log(cadastros[nome]);
    }
    else if(comando === "buscar-todos"){
        console.log(cadastros);
    }
    else{
        console.log("sintaxe: node index.js <comando> <nome> <email>");
    }
    
    cadastros[nome] = email;
})

/*
console.log(nome);
console.log(comando);
console.log(email);
*/