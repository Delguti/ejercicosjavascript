function generarContraseña(){
    const longitud = parseInt (document.getElementById('longitud').value);
    const inluirMayusculas = document.getElementById('mayusculas').checked;
    const inluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;


const caracteres= generarCaracteres(inluirMayusculas,inluirMinusculas,incluirNumeros,incluirSimbolos);
const contraseña= generarContraseñaAleatoria(longitud,caracteres);

document.getElementById('contraseña') .value= contraseña;
}

function generarCaracteres(incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos){
    let caracteres = '';

    if(incluirMayusculas){
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if(incluirMinusculas){
        caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }

    if(incluirNumeros){
        caracteres += '0123456789';
    }

    if(incluirSimbolos){
        caracteres += '!@#$%^&*()_-+=<>?';
    }

    return caracteres;
}
function generarContraseñaAleatoria (longitud,caracteres){
    let contraseña= '';
    const caracteresLength = caracteres.length;

    for (let i=0; i<longitud; i++){

        const indiceAleatorio= Math.floor(Math.random() * caracteresLength);
        contraseña+=caracteres.charAt(indiceAleatorio);
    }
    return contraseña;
}