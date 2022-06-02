import { interval, map, range } from 'rxjs';
import { mapTo, scan, takeWhile } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        mapTo(-1),
        scan((acc: number, curr: number) => acc + curr, inicio),
        takeWhile(val => val >= 0),
    );
    
    countdown$.subscribe( console.log ); 

})();