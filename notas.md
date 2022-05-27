# Curso ReactiveX - RxJs: De cero hasta los detalles

## Sección 2: Introduccion a las extensiones reactivas y ala programación reactiva

### Clase 7: Conceptos generales

En esta sección aprenderemos sobre:

- Conceptos generales de RxJs y las extensiones reactivas
- ¿Qué es ReactiveX?
- ¿Cómo funciona?
- ¿Qué es el patrón observable?
- ¿Cómo leer los diagramas de canicas?
- Y otros temas
- Es una sección corta llena de teoría, pero es indispensable que lo aprendamos para poder tener un mejor panorama de la programación reactiva.

#### ¿Por qué utilizar extensiones reactivas?

Por la necesidad de tener informacion en tiempo real.

Con esto se busca que cuando nuestra aplicacion pueda hacer peticiones a la red, seguir utilizando la interfaz de usuario y cuando se actualice la interfaz ver cambios dinamicos en tiempo real.

#### ¿Cuando deben usarse las extensiones reactivas?
- Eventos en la interfaz de usuario
- Cuando es necesario notificar sobre cambios en un objeto(s).
Comunicacion
- Comunicacion por sockets.
- Cuando necesitamos trabajar con flujos de informacion (Streams).

#### Piezas fundamentales de la programacion reactiva

- Observables
- Subscribers
- Operadores

##### Observables:

![1](Data/Observables.jpg)

##### Subscribers:
Desconocen todo lo que se encuentra detrás en el observable es decir y desconocen si la información viene filtrada viene transformada viene de alguna otra fuente, pasó por varios lugares a ellos no les interesa.


![1](Data/Subscribers.jpg)

##### Operadores:

![1](Data/Operadores.jpg)

![1](Data/EjemploRx.jpg)

#### Beneficios de la programacion reactiva:

1. Evitar el "Callback Hell".
2. Trabajar de forma simple tareas sincronas y asincronas.
3. Uso de opradores para reduccir y simplicar el trabajo.
4. Es facil transformar los flujos (streams) de informacion.
5. Codigo más limpio y facil de leer.
6. Facil de implementar.
7. Fcail de anexar procedimientos sin alterar el producto final.

### Clase 8: ¿Que es ReactiveX? ¿Como funciona?

Es una API para programacion asincrona usando observable.

ReactiveX es una combinacion de los patrones Observer, Iterador y programacion funcional.

#### Patron Observer:
Es un patron de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su **estado**, notifica este cambio a todos los dependientes.

Ejemplo: Un semaforo.

#### Patron Iterador:
En la POO, el patrón interador define una interfaz que declara los métodos necesarios para poder acceder de manera secuencial a un grupo de objetos de una colección.

Ejemplo: Con un array de tamaño **n** crear funciones para saber cual es el _primero()_, _siguiente()_, si _hayMas()_ y cual es el  _elementoActual()_


#### Programcion funcional:

Funciona para crear un conjunto de funciones que tengan un objetivo específico. Es decir que si existe una funcion que reciba **A** y retorna **A+1**, siempre que se llame a esa funcion retornara **A+1**, sin efectos segundarios, sin mutar la data.

__Conslusiones:__
- Patron Observer: notifica cuando suceden cambios.
- Patron iterator: Poder ejecutar operaciones secuenciales.
- Programcion funcional: Tener con tareas específicas que reciban argumentos y no muten la informacion.

### Clase 9: ¿Como leer los diagramas de canicas?

``` 
scan( (x,y) => x + y )
```

![1](Data/DiagramaCanicas.jpg)


### Clase 10: Configuracion del proyecto

Alojado en GitHub: [Repositorio](https://github.com/Klerith/curso-rxjs-inicio.git)

## Sección 3: Observables

### Clase 12: Temas puntuales

Esta sección abre las puertas de la programacion reactiva, en esta seran veran temas como:
1. Observers
2. Subscriber
3. Unsubscribe
4. Subjects
5. Hot y Cold Observables
6. Observables en cadena
7. Y más

### Clase 13: Nuetro primer observable

Un observable es un elemento que permite emitir valores, aunque algunas veces puede emitir *X cantidad de valore*, puede ser que emita *1*, *0* o *nada*.

![1](Data/PrimerObservableDiagrama.jpg)

Las subcriciones son las emisiones de nuestro observable, a lo que la gente debe estar pendiende.

__Ejemplo:__ Un chats de WhatsApp donde X persona bloquea a Y persona, por ende por mas que Y persona envie mensajes la persona X no va recibir ninguno de esos mensajes ya que se hizo *subscriber.complete()*
![2](Data/PrimerObservableCode.jpg)

### Clase #14: Observer y suscriber

Formas de llamar un observable:

``` ts
obs$.subscribe( resp => {
    console.log(resp);
})

// Para generar las valdiar los errores antes del complete
obs$.subscribe ( 
    valor => console.log('next:', valor),
    err => console.warn('error:', err), 
    () => console.info('Done')
);

// Importando el Observer de RxJs
// El observe es igual a un objeto, el Observer es una interfez que nos obliga a establecer 
// todo lo que el objeto necesita para ser un observer valido.
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}
```

### Clase 15: Nota blioteca de ejercicios

Crear un carpeta para los diferentes ejercicios dentro del curso para que sirva de biblioteca.

### Clase 16: Subcription y Unsubscribe
Una suscripción en RxJS es un recurso desechable que generalmente representa la ejecución de un Observable

``` ts
// Para cancelar una subcricion se utiliza:

setTimeout (() =>{
    subs.unsubscribe()
}, 3000)
```

### Clase 17 Terminar observables en cadena

Los unsubscribe sirven para cortar los flujos de datos o eventos debido a que las subcriones permanecen en memoria y no tine sentido que la subcriones permanezcan ejecutandose en el sistema.

### Clase 18: Subject

Los subjects de RxJs son un tipo de Observable especial que nos permiten realizar diversas tareas como el multicasting, es decir, compartir exactamente el mismo stream de datos con todas las subscripciones sin preocuparnos del tipo de Observable que estamos manejando.

Tiene 3 carecteristicas principales 
1. Casteo múltiple
2. Tambien es un observer
3. Next, error y complete

### Clase 19: Subject 2

Caundo la data es producida por el observable en si mismo, es considerado un __"Cold Observable"__. Pero cuando la data es producida FUERA del observable es llamado __"Hot Observable".__

Permitiendo ingresar informacion al flujo de datos que el Observable esta emitiendo.

Como funcionan: [Blog RxJs](https://pablomagaz.com/blog/rxjs-subjects-que-son-como-funcionan)

## Seccion 4: Funciones para crear Observables

### Clase 22: Temas puntuales de la sección

RxJS proporciona bastantes funcionalidades distintas para crear Observables, algunas de estas son las siguientes:

>
    1. of()
    2. fromEvent()
    3. interval()
    4. timer()
    5. asyncScheduler()

Otras bastante populares son:
>
    1. from()
    2. range()
    3. defer()
    4. ajax()
    5. fromFetch()
    6. generate()

### Clase 23: of

Es una función que nos permite a nosotros crear observables en base a un listado de elementos, nos permite crear Observables a partir de arrays, objetos, strings etc. El Observable emitirá cada argumento que reciba de manera individual, y después será completado

![1](Data/Funcion-of.jpg)

_Nota_: Los observables pueden tambien trabajar de manera asincrona.

### Clase 24: fromEvent

Permite crear observables en base a un inventaria. El _fromEvent()_ recibe dos parametros diferentes:

- El target de evento al que se añadirá la función de manejo de eventos, es decir, el elemento al que vamos a ‘escuchar’ por si se produce un evento o no.
- El tipo de evento al que queremos ‘escuchar’.

![1](Data/Funcion-FromEvent.png)

### Clase 25: range

Crea un observable que emite una secuencia de numeros ascendentes con base a un range, este recibe dos parametros:

- El valor inicial del rango.
- La longitud del rango, es decir, la cantidad de números que se emitirán.

``` ts
import {range} from "rxjs"

const number$ = range(5)
```

__Nota__: El range rquiere obligatoriamente el start(primer parametro).


### Clase 26: interval y timer

Son funciones asincronas

El interval emite una secuencia de numeros que va desde 0 hasta el infinito, en un intervalo de tiempo que le asignemos. El parámetro del tamaño del intervalo de tiempo es opcional, con un valor por defecto de 0.

El timer es similar al interval, emite valores despues de tiempo asignado y se completa. Es decir a partir de una demora inicial, empieza a emitir una secuencia ascendente de números, con el intervalo entre emisiones que especifiquemos, la diferencia con la funcion **interval()** es que podemos especificar cuándo queremos que comiencen a producirse las emisiones.

Recibe dos parametros los cuales son: 
- La demora inicial tras la cual se empezarán a emitir valores.
- El valor del intervalo entre emisiones.

__Nota__: Ambos parametros son opcinales, con un valor por defecto de 0.

### Clase 29: asyncScheduler

Este no crear un observable sino una subcripcion. Se utiliza mejor para retrasar las tareas en el tiempo o para programar tareas que se repiten en intervalos.

``` ts
import { asyncScheduler } from 'rxjs';

const task = () => console.log('it works!');

asyncScheduler.schedule(task, 2000);

```

### Clase 30: Mas ejemplos of & from

- of = toma argumentos y genera una secuencia
- from = crear el observable con base a un array, promise, iterable, observable

