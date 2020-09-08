//requireds : siempre al principio de nuestro codigo
const fs = require('fs'); //documentacion node, file system: para grabar archivo en una tabla de texto
//const fs = require('express'); //paquete, libreria expansion
//const fs = require('./fs'); //paquete propio nuestro, tambien ../fs
const colors = require('colors');

//tarea: listar
let listartabla = (base, limite = 9)=>{

    console.log('==hola=='.green);
        for(i = 1;i<=limite;i++){
            console.log(`${base} * ${i} = ${base*i}\n`); // += para concatenar ; \n para espaciar
        }
}

// creamos una promesa con que retorne la logica de multiplicar para el archivo app.js
let crearArchiv = (base,limite)=>{
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }
        let data='';

        for(i = 1;i<=limite;i++){
            data +=`${base} * ${i} = ${base*i}\n`; // += para concatenar ; \n para espaciar
        }
//const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablaas/tabla-${base}.txt`, data, (err) => {//   tablaas/: para enviar a un folder
            if (err)
                reject (err) // throw por reject
            else
                resolve(`tabla-${base}.txt`.green); //cambio
            
        });


    })

}

// para exportar el archivo usamos module

module.exports = {
crearArchiv, listartabla
}

