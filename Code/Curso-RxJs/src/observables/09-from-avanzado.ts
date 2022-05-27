import {of, from } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    complete: () => console.log('complete')
}

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

for (let id of miIterable){
    console.log(id);
}

from( miIterable ).subscribe( observer );


// const source$ = from([1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);

//const source$ = from('Sneyder');

const source$ = from ( fetch('https://api.github.com/users/sneydermc3007') );

// source$.subscribe( async(respuesta) => {
//     console.log(respuesta);

//     const dataRespuesta = await respuesta.json();
//     console.log(dataRespuesta);
// })



//source$.subscribe( observer )