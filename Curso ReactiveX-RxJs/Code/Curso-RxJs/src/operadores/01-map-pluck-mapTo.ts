import { range, fromEvent } from 'rxjs'
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1,5).pipe(
//     map(value => value * 10))
// .subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const code_Keyup$ = keyup$.pipe(
    map(event => event.code )
)

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const KeyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
)

keyup$.subscribe(console.log);

code_Keyup$.subscribe(value => 
    console.log('map', value));

keyupPluck$.subscribe(value => 
    console.log('pluck', value));

KeyupMapTo$.subscribe(value => 
    console.log('mapTo', value));