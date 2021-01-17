const fs = require('fs');


let todoList = [];

const saveDB = () => {

    let data = JSON.stringify(todoList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            reject(err);
    });

}

const readDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (err) {
        todoList = [];
    }

}

const crear = (descripcion) => {

    readDB();

    let toDo = {
        descripcion,
        completado: false
    }

    todoList.push(toDo);

    saveDB();

    return toDo;
}

const listar = (filtro) => {
    console.log('filtro: ' + filtro);
    readDB();
    if (0 !== filtro)
        return todoList.filter(tarea => tarea.completado === filtro);
    else
        return todoList;
}

const actualizar = (descripcion, completado = true) => {
    readDB();

    let index = todoList.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {

        todoList[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    readDB();

    letListadoAux = todoList.filter(tarea => tarea.descripcion !== descripcion);

    if (letListadoAux.length === todoList.length) {
        return false;
    } else {
        todoList = letListadoAux;
        saveDB();
        return true;
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}