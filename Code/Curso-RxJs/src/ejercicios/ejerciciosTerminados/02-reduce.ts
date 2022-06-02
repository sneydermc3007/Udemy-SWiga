import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
  const totalReduce = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

  from(datos).pipe(
        //Filtrado de los datos strings e int
    filter<any>((datos) => isNaN(datos)===false),
        // Sumatoria de los datos filtrados
    reduce(totalReduce)
  ).subscribe( console.log )
})();
