import { of, map } from 'rxjs';

/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 (() =>{


const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    // Sin utilizar la funcion
    const obs$ = of(...nombres)


    console.log('Inicio del Obs$');

    obs$.subscribe(next => console.log('next', next),
        null,
        () => console.log('Terminamos la secuencia')
    )
    console.log('Fin del Obs$')

    console.log('===================================')

    // Utilizando la funcion
    console.log('Inicio del Obs$');

    const obs2$ = of(...nombres).pipe(
        map(capitalizar)
    ).subscribe( console.log )

    console.log('Fin del Obs$')

})();