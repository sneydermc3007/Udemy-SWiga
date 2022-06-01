import {fromEvent} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor diam, viverra eget imperdiet aliquet, tincidunt a mauris. Donec tristique eros ut scelerisque malesuada. Proin quis augue consequat, commodo urna eget, sollicitudin ipsum. Donec nec mauris sodales, dictum mi vel, aliquam risus. Phasellus eget ultrices ex. Duis non nisi nec elit tempus aliquet vel nec dui. Donec consectetur tempus tristique. Praesent sagittis blandit tincidunt. Aliquam laoreet accumsan nisi, fringilla convallis felis malesuada et.
<br/><br/>
Proin nisi neque, placerat a porta non, laoreet non orci. Duis posuere nunc arcu, non molestie odio blandit et. Morbi sed fringilla lacus. Nunc tempor diam in ornare fringilla. Nulla et risus dolor. Nullam lacus purus, vulputate sit amet convallis nec, tincidunt ullamcorper erat. Pellentesque sapien enim, pharetra eu arcu non, vehicula congue turpis. Aliquam mauris leo, varius at aliquam nec, sollicitudin ac massa.
<br/><br/>
In condimentum pharetra mauris, eget consectetur ligula dictum iaculis. Nam in finibus tellus. Nulla facilisi. Aenean sollicitudin leo id mollis pretium. Maecenas vel aliquet orci. Proin posuere lacinia fermentum. Nullam sit amet commodo arcu, dictum condimentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mi dolor, sodales a aliquet quis, pharetra eu justo. Etiam vitae efficitur lacus, eget pulvinar urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porta id leo nec laoreet. Nullam nec eros nec elit dignissim feugiat.
<br/><br/>
Mauris blandit ultricies imperdiet. Phasellus quam nisl, fermentum semper nisl in, congue vestibulum enim. Sed eget faucibus urna. Vestibulum neque lacus, egestas sit amet tempor at, ultricies vitae ante. Ut ut leo non magna facilisis blandit. Sed ac lorem vel diam vestibulum bibendum sed ut odio. Quisque ac vulputate dolor. Nulla ac ultricies libero, a iaculis nisi. Proin quis velit tellus. Suspendisse potenti. Proin sollicitudin dui et dui facilisis, at volutpat ex varius.
<br/><br/>
Sed luctus ante augue, in semper eros porttitor tempus. Aliquam in nisi sed arcu placerat consectetur at a risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras in turpis vel dolor suscipit pretium in sed tortor. Suspendisse venenatis neque lorem, nec vehicula ex posuere id. Nullam hendrerit tincidunt tellus, nec accumsan ex eleifend venenatis. Cras nunc purus, vestibulum ac tortor in, efficitur eleifend ex. Nam tristique quam nec ipsum semper, sed rhoncus risus porttitor. Vivamus tincidunt, nunc eget mollis viverra, elit neque hendrerit tellus, id vestibulum dolor massa ac arcu. Praesent ornare velit ac hendrerit efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales libero id leo viverra mattis. Sed molestie, purus in tempus vehicula, tellus erat mattis dolor, eget scelerisque sapien dui non ex. Maecenas ac diam ut augue consequat hendrerit.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    const { 
        scrollTop, 
        scrollHeight, 
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})