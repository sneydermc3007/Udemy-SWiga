import { interval, timer } from 'rxjs'

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interveal$ = interval(1000);

//const timer$ = timer(2000)
// const timer$ = timer(2000, 1000) //Con esto replicamos la funcion interval
const timer$ = timer(hoyEn5);


console.log('inicio')
//interveal$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')