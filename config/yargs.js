const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const filtro = {
    alias: 'f',
    default: 0,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea tarea por hacer', { descripcion })
    .command('listar', 'Lista tareas por hacer', { filtro })
    .command('actualizar', 'Actualiza tarea', { descripcion, completado })
    .command('eliminar', 'Eliminar tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}