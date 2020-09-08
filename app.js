/*
*tarea, tabla multiplicar
 */
const argv = require('./config/yargs').argv


//llamar el archivo:
const { crearArchiv, listartabla} = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchiv(argv.base, argv.limite)
            .then(archivo=>console.log(`archivo creado: ${archivo}`))
            .catch(err=>console.log(err));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');

}

//let base = '3';
//console.log(process.argv);//para ver el envio de datos desde la terminal
//let argv2 = process.argv;
// console.log(argv.base);
// console.log('limite',argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]; //split para separar elementos string, [ para indicar posicion 0,1,2....

//console.log(base);
// let data='';
//
// for(i = 1;i<=10;i++){
//     data +=`${base} * ${i} = ${base*i}\n`; // += para concatenar ; \n para espaciar
// }
// //const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablaas/tabla-${base}.txt`, data, (err) => {//   tablaas/: para enviar a un folder
//     if (err) throw err;
//     console.log(`The file tabla-${base} has been saved!`);
// });






