const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.listar(argv.filtro);
        for (let tarea of listado) {
            console.log('=========== TO DO ==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado)
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar tarea');
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log('Dato actualizado: ' + actualizado);
        break;
    case 'eliminar':
        console.log('Eliminar tarea');
        let eliminado = toDo.eliminar(argv.descripcion);
        console.log('Dato eliminado: ' + eliminado);
        break;
    default:
        console.log('Comando no es reconocido');
}