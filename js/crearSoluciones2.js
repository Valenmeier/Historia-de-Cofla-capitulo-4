const obtenerInformacion = (materia) => {
    let materias= {
        fisica:[`Perez`,`Pedro`,`Juan`,`Valentin`,`Cofla`],
        programacion:[`Rodriguez`,`Pedro`,`Juan`,`Valentin`,`Cofla`],
        logica:[`Hernandez`,`Pedro`,`Juan`,`Valentin`],
        quimica:[`Dalto`,`Pedro`,`Juan`,`Valentin`,`Cofla`]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias]
    }else {
        return materias
    }
}

const mostrarInformacion = (materia)=> {
    let informacion = obtenerInformacion(materia);

if (informacion !==false) {
    let profesor=informacion[0][0];
    let alumnos=informacion[0];
    alumnos.shift()
    document.write(`El profesor de ${informacion[1]} es: ${profesor} <br>
    Los alumnos son: <b>${alumnos}</b><br><br>`);
}
}
const cantidadDeClases= (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes=[];
    let cantidadTotal= 0;
    for(info in informacion){
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<br>${alumno} está en <b>${cantidadTotal} clases:</b><b>${clasesPresentes}</b> <br><br>
    `
}


mostrarInformacion(`fisica`)
mostrarInformacion(`programacion`)
mostrarInformacion(`logica`)
mostrarInformacion(`quimica`)

document.write(cantidadDeClases(`Cofla`))
document.write(cantidadDeClases(`Valentin`))
