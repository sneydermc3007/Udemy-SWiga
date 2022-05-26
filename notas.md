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

### Clase #9: ¿Como leer los diagramas de canicas?

``` 
scan( (x,y) => x + y )
```

![1](Data/DiagramaCanicas.jpg)


### Clase #10: Configuracion del proyecto

Alojado en GitHub: [Repositorio](https://github.com/Klerith/curso-rxjs-inicio.git)
