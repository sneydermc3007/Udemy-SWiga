import { of, range, asyncScheduler } from 'rxjs';


const src$ = range(-5, 10, asyncScheduler)

console.log('inicio');
src$.subscribe(console.log);
console.log('Fin')