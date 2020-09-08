
const opt = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 11
    }
}

const argv = require('yargs')
    .command('listar', 'imprime tabla en consola',opt)
    .command('crear', 'genera archivo con tabla de multiplicar',opt)
    .help()
    .argv;

module.exports = {
    argv
}