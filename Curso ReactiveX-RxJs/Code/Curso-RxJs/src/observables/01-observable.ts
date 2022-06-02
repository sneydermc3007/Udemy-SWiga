import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

// const obs$ = Observable.create()
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzando un error
    // const a = undefined;
    // a.nombre = 'Sneyder';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});


obs$.subscribe( observer )

// obs$.subscribe ( 
//     valor => console.log('next:', valor),
//     err => console.warn('error:', err), 
//     () => console.info('Done')
// );
