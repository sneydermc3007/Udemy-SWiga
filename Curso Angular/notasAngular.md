# Curso Angular: De cero a experto (Legacy)

## Seccion 2: Gentil introduccion a TypeScript y ES6

### Clase 9: ¿Que aprenderemos en esta sección?

1. ¿Qué es TypeScript?
2. ¿Cómo usar TypeScript y utilizar ECMAScript 6?
3. Declaración de variables con "let" y constantes "const"
4. ¿Qué es y para qué sirve el archivo tsconfig.json?
5. Uso de los tipos de datos que ofrece TypeScript.
6. Strings de multilinea.
7. Parámetros obligatorios, por defecto y opcionales.
8. Beneficios de las funciones de flecha.
9. Uso y creación de interfaces.
10. Uso de módulos y ejemplos de los mismos.
11. Decoradores de clase.
12. Entre otros temas importantes para adentrarnos en Angular 2.

### Clase 10: Introduccion a TypeScript

JavaScript no fue diseñado para aplicaciones de mediana y gran escala es por esto que surgen los frameworks y librerias como lo son: *Angular, React y Vue*. JavaScript tiene una debilidad la cual es que al utilizar una funcion no sabemos si estamos mandando mal un argumento porque puede ser que este piendo un objetos y se le estaba mandando numeros, string u otra cosa.

![1](./assets/CaracteristicasFaltantesJS.jpg)

TypeScript no corre directamente en el navegador, por ende hay que compilarlo o traducirloy generarlo como un archivo de JS.

![1](./assets/TypeScriptSuperSet.jpg)

Con TypeScript se pueden utilizar carecteristicas nuevas del futuro HOY, con la confianza que tenemos la compatibilidad óptima, con un codigo mas ordenado y compresivo.

### Clase 12: Configuracion de TypeScript

`tsc -w` para entrar en modo observador que sirve para visualizar errores y que *TS*  se traduzca directamente a *JS*

### Clase 13: Variables let y const

`var` y `let` se emplean para la definicion de variables y `const` para las constantes. Aunque aparentemente `var` y `let` parecen ser iguales esto no es así debido a que cada una tiene un alcance diferente.

- **Var**: Tiene un ambito global o un ámbito de función/local. El ambito global abarca cuando una funcion se declara por fuera de una funcion. Esto significa que cualquier variable que se declare con var fuera de una función está disponible para su uso en toda la pantalla.

- **Let**: Tiene un ambito por bloques{}. Así que una variable declarada en un bloque con `let`  solo está disponible para su uso dentro de ese bloque. Una particularidad de esta es que `let` puede modificarse pero no volver a declarar.

- **Const**: Las variables declaradas con `const` mantienen valores constantes. Al igual que las declaraciones `let`, solamente se puede acceder a las declaraciones `const` dentro del bloque en el que fueron declaradas. `const` no puede modificarse ni volver a declararse.

### Clase 16: Template literales del ES6

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

```ts
`texto de cadena de caracteres`

`línea 1 de la cadena de caracteres
 línea 2 de la cadena de caracteres`

`texto de cadena de caracteres ${expresión} texto adicional`

const salida = `${nombre} ${apellido} ( ${edad} )`;
```
### Clase #17: Funciones --> Parametros opcionales, obligatorios y por defecto

__Parametros obligatorios__:
``` ts
parametro : any
```

__Parametros opcionales__:
``` ts
parametro? : any
```

__Parametros por defecto__:
``` ts
parametro : any = 'xxx'
```

### Clase #18: Funciones de Flecha

Esto crea una función `func` que acepta los parámetros `arg1..argN`, luego evalúa la `expression` del lado derecho mediante su uso y devuelve su resultado.

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional. 

#### Sintaxis basica

``` ts
param => expression
```
#### Comparativa
``` ts
// Función tradicional
function (a){
  return a + 100;
}

// Función flecha
a => a + 100;
```

### Clase 19: Desestructuracion de Objetos y Arreglos

La desestructuracion es una funcionalidad fascinante que vino junto con ES6. Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. Es decir, se pueden extraer datos de arreglos y objectos y asignarlos a variables.

Esto soluciona lo repetitivo que podia lograr ser obtenr valores de un arrego.

__Nota__: Para la desestructuracion de los _objetos_ se usa: `{}`, en caso de _arrays_ se usa: `[]`

Ejemplo: Antes de la desestructuracion
``` js
let introduccion = ["Hola", "Yo" , "soy", "Sarah"];
let [saludo, pronombre] = introduccion;

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo"
```

Ejemplo: Despues de la desestruturacion
``` ts
let [saludo, pronombre] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo"

================================================

let [saludo, ...introduccion] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludo); // "Hola"
console.log(introduccion); // ["Yo", "soy", "Sarah"]
```

### Clase 20: Promesas

Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones `callback`, en lugar de pasar callbacks a una función.

> 
    Considera la función crearArchivoAudioAsync(), el cuál genera de manera 
    asíncrona un archivo de sonido de acuerdo a un archivo de configuración, 
    y dos funciones callback, una que es llamada si el archivo de audio es 
    creado satisfactoriamente, y la otra que es llamada si ocurre un error. 
    El código podría verse de la siguiente forma:

``` ts
function exitoCallback(resultado) {
  console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
  console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
```

### Clase 22: Interfaces en TypeScript

Las interfaces son un tipo de construcción utilizada en la Programación Orientada a Objetos que tratan de suplir la carencia de la herencia multiple. las interfaces son como un contrato, en el que se especifica las cosas que debe contener una clase para que pueda implementar una interfaz.

_Nota_: 
> En TypeScript se pueden definir propiedades, mientras que en otros lenguajes las interfaces sólo definen métodos.

``` ts
interface citaCalendario {
  fechaHora: Date;
  titulo: string;
  lugar: string;
}

let cita1: citaCalendario;
```

### Clase 23: Introduccion a las clases de POO

Una __clase__ es la representacion viva de un __objeto__ de la vida real y ese __objeto__ tiene acciones que en POO se llaman __metodos__.

![1](/Curso%20Angular//assets/POO_clases_metodos.jpg)

La **herencia** es transimir todas las propiedad de esta a otra clase.

![1](/Curso%20Angular//assets//POO_herencia.png)

### Clase 24: Definicion de una clase basica en TypeScript

``` ts
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre:string, edad:number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
  }
}

let persona1: Persona;
persona1 = new Persona('Juan', 45);
persona1.imprimir();
```

### Clase 26: Decoradores

Los decoradores son unos patrónes de diseño estructural que permite añadir dinámicamente nuevos comportamientos a objetos colocándolos dentro de objetos especiales que los envuelven . TypeScript podemos usarlos activando la propiedad `experimentalDecorators` del `tsconfig.json` de nuestro proyecto o si decidimos compilar mediante el comando `tsc`, colocar siempre la opción de `--experimentalDecorators ---target` ES5.

``` ts
function classDecorator(target:Function) {
    console.log(target);
}

@classDecorator
class MyClass {
    constructor() { 
        console.log('My class')
    }
}
```

## Seccion 3: Aplicacion #1: Hola Mundo

### Clase 34: ¿Que aprenderemos en esta sección?

1. ¿Qué son los componentes?
2. ¿Qué son las directivas estructurales?
3. Uso de plunker para nuestra primera interacción con Angular.
4. Trabajando de forma local un proyecto en Angular.
5. Una breve introducción sobre todos los archivos usados en el QuickStart de Angular.
6. Uso de Bootstrap 4 para nuestros estilos.
7. Crear archivos .HTML para que se encarguen de la estructura visual de nuestros componentes.
8. Crearemos una aplicación con 3 componentes re-utilizables.
9. *ngFor y el *ngIf

### Clase 36: Introduccion a los componentes y directivas estructurales

#### Componentes

Un componentes son pequeñas clases que cumplen(vistas) una tarea especifica. 

Ejemplo: Menu de navegacion, barra lateral(side bar), lugar de información, pie de pagina

![1](/Curso%20Angular/assets/Componentes.jpg)


#### Directivas estructurales

Son instrucciones que le dicen a la parte del HTML(template) que tiene que hacer.

- __ngIF__: Se encarga de mostrar u ocultar elemteos HTML en la pagina web.
- __ngFor__: Se engarca de hacer repeticiones de elementos HTML en la pagina web

![1](/curso%20Angular/assets/DirectivasAngular.jpg)

### Clase 37: Primera interaccion en Angular

En la documentacion oficial de [Angular](http://angular.io) hay informacion para ayudar a construir una pagina web.

- __Pk__: Paquete o modulo
- __I__: Interfaces
- __C__: Clase
- __K__: Constante
- __F__: Funcion
- __E__: Enumeracion
- __P__: Pipe

### Clase 40: Estructura del proyecto

- __node_modules__: Esta carpeta contiene los paquetes del proyecto
- __src__: Es la carpeta donde esta la aplicacion de angular
- __.editconfig__: Archivo con las configuraciones del editor
- __.gitignore__: Este archivo ignora  lo que no ueremos que se monte al repositorio.
- __angular__.json: Le dice a angular como es nuestra aplicacion y como debe de funcionar
- __package__-lock.json: Le dice a node como es creado el `package.json`
- __package__.json: Se crea de forma automatica donde se encuentran las diferentes dependencias
- __Readme__.md: Explica el code
- __tsconfig__.json: Como debe de trabajar ts la app con que estandar queremos correr la app.

- __app__: La aplicacion con sus archivos para la estructuracion del componente
- __assests__: Para tener los recursos estaticos
- __environments__: Para tener las variables de ambiente de produccion y desarrollo
- __main__.ts: Es lo primero que ejecuta angular al lanzar el proyecto

### Clase 43: Creando el footer.component

Para crear un componente se debe de ejecutar el siguiente comando: `ng generate component (ruta)/nombre`


### Clase 45: Directivas estructurales: *ngFor y el ngIf

Las directivas *ngIf y *ngFor son directivas de angular que podemos agregarle a los elementos HTML.

- __ngIf__: Permite evaluar de forma condicional una condición que devolverá un resultado booleano (true or false) y dicho  resultado se suele utilizar con la finalidad de mostrar u ocultar una información.

- __ngFor__: Permite iterar una array, objeto, etc. Normalmente con el fin de insertar cada uno de los elementos contenidos en su interior


El `ngFor` trabaja con base a arreglos y el `ngIf` con base a expresiónes que den resultados de tipo booleano.

## Seccion 4: Aplicacion #2: Aplicacion de una sola pagina SPA

### Clase 48: ¿Qué veremos en esta sección?

1. Crearemos una aplicación de una sola página (Single Page Application)
2. Creación de proyectos de Angular usando el CLI (Command Line Interface)
3. Instalando bootstrap o librerías de terceros usando el Angular-CLI
4. Creación de rutas de nuestra aplicación
5. Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
6. Uso del modulo Router, que nos permite movernos de página mediante código.
7. Obtención de parámetros vía URL.
8. Configuración de nuestro primer servicio en Angular para el manejo de la data.
9. Breve introducción a los Pipes 
10. Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.


### Clase 57: Introduccion a los servicios

 Los servicios son clases que se encargan de acceder a los datos para entregarlos a los componentes.

Tienen caracteristicas principales como: 
  > 
    - Brindar informacion a quien lo necesite
    - Realizar peticiones CRUD (create, read, update, delete)
    - Mantener la data de forma persistente
    - Servir como recurso re-utilizable para nuestra aplicación

### Clase 64: Pipes: Transformacion visual de la data

Es una utilidad en Angular que nos permite transformar los datos, , a la hora de mostrarlos en los templates de los componentes.

## Seccion 5: Pipes -Transforman los valores mostrados en pantalla

### Clase 73: Introduccion a la seccion

Un pipe es un metodo o una funcion la cual recibe _x_ cantidad de argumentos, por lo menos siempre va recibir uno para procesarlo y emitiendo una salida pronosticada.

_Nota_: La salida no muta el objeto que se recibe como argumento, sola la transformar de forma visual.

### Clase 74: ¿Que aprenderemos en esta sección?

1. Pipes uppercase y lowercase
2. Pipe Slice
3. Pice Decimal
4. Pipe Percent
5. Pipe Currency
6. Pipe Json
7. Pipe Async
8. Pipe Date
9. Pipes personalizados
9.1. Capitalizar palabras y nombres
9.2. Creacion de un pipe, que permite cargar recursos externos de forma segura.

### Clase 75: Inicio del proyecto y la introduccion a los Pipes

Pipes (Tuberias) `|`

Sirven para transformar la data de manera visual

EjemploS:

``` ts
const texto = "Hola mundo"
{{ texto | uppercase}}

//Resultado
HOLA MUNDO
----------------------------------------------------------------

fecha = new Date(2010, 10, 15)
{{fecha | date:"dd/mm/yy"}}

//Resultado
15/12/2010
```

### Clase 77: Pipe -> Slice

Crea un nuevo `Array` o `String` que contiene un subconjunto (porción) de los elementos.

``` ts  
{{ value_expression | slice : start [ : end ] }}
```

## Seccioin 6: Aplicacion #3: SpotiApp

### Clase 91. ¿Qué aprenderemos en esta seccion?

1. Reforzamiento de rutas y parámetros de rutas.
2. Uso de carruseles del Bootstrap 4
3. Uso del HTTP para obtener información
4. Uso de la API de Spotify para obtener información de:
4.1. Artistas
4.2. Albumes
4.3. Audio
5. Trabajo sobre el manejo de data asíncrona.
6. ngModel para enlazar campos de texto a variables del componente.
7. Widgets de Spotify
8. HTML5 audio
9. Observables
10. Maps

## Seccion 7: Aplicacion #4: Lista de deseos - IONIC

### Clase 115. ¿Qué aprenderemos en esta seccion?

1. Uso del local storage guardar localmente información para nuestras aplicaciones.
2. Introducción a ionic.
3. Uso del framework de ionic.
4. Uso de servicios que afectan el local storage.
5. Uso de ionic DevApp para desplegar nuestra aplicación
6. Aprenderemos a controlar estilos usando Angular.
7. Manejo de la información a través de servicios ( update, delete, insert y select ) al local storage.
8. Aprenderemos a utilizar pipes impuros para realizar filtros.

### Clase 116. ¿Que es ionic?

Ionic es un framework SDK de frontend para desarrollar aplicaciones hibridas basado en tecnologias web(HTML, CSS y JS). Es decir, un framework que nos permite desarrollar aplicaciones para iOS nativo, Android y la web, desde una única base de código. Su compatibilidad y, gracias a la implementación de Cordova e Ionic Native, hacen posible trabajar con componentes híbridos. Se integra con los principales frameworks de frontend, como Angular, React y Vue, aunque también se puede usar Vanilla JavaScript.

### Clase 136: ¿Editar el titulo de la lista?

El decorador `@ViewChield()` devuelve el primer elemento que coincide con una directiva, un componente o un selector de referencia de plantillas concreto.


## Seccion 8: Componentes, directivas de atributos, ciclo de vida y más...

### Clase 139: ¿Qué aprenderemos en esta seccion?

1. Cambios en el estilo de algún elemento HTML utilizando variables en los componentes.
2. Comprender y aplicar CSS en un determinado scope, sin afectar los demás componentes. 
3. Adicionar y remover clases según variables o cualquier tipo de condición.
4. Crearemos directivas personalizadas.
5. Uso del ngSwitch.
6. Crearemos una pequeña aplicación para el uso de rutas y rutas hijas.
7. Comprenderemos el ciclo de vida de un componente o directiva.

### Clase 142: ngStyle y su uso con directivas de atributos.

La directiva de atributo ngStyle actualiza los estilos para un elemento HTML determinado.

Establece una o más propiedades de estilo, especificadas como pares clave-valor separados por dos puntos. La clave es un nombre de estilo y el valor es una expresión a evaluar o valor a asignar.

``` ts
<h1 [ngStyle]="{'color':'red','background-color':'#ff0','text-align':'center'}">Sitio fuera de servicio</h1>
```

### Clase 144: ngClass - agregando clases de estilos a nuestos elementos HTML

La directiva de atributo `[ngClass]` permite establecer una o más clases a un elemento HTML, que nos permite alterar las clases CSS que tienen los elementos de la página.

``` ts
.clase1 {
    color:red;
    background-color:blue;
}

.clase2 {
    font-size:20px;
    font-family: 'Courier New', Courier, monospace;
}

<p [ngClass]="'clase1 clase2'">Prueba de directiva ngClass</p>
```

### Clase 146: Directivas personalizadas
Las Angular customs directives sirven para construir una directiva personalizada es decir en vez de usar una directiva existente como  ngClass o *ngIf podemos construir nuestras propias directivas y aumentar la extensibilidad de nuestro código.

![](../Curso%20Angular/assets/directivasPAngular.jpg)

### Clase 147: ngSwitch - Multiples opciones con uan sola decision

La directiva `ng-switch` es similar a __`ng-if`__ y como nos podemos imaginar es como el switch de la programación. Es decir que permite que entre varios conjuntos de tags solo esté uno de ellos, borrando los que no cumplen la condición. 

- Todas las vistas que coinciden se muestran.
- Si no hay coincidencias, se representa una vista con la directiva __`ngSwitchDefault`__ .

``` ts
<container-element [ngSwitch]="switch_expression">
  <! - la misma vista se puede mostrar en más de un caso ->
  <some-element *ngSwitchCase="match_expression_1">...</some-element>
  <some-element *ngSwitchCase="match_expression_2">...</some-element>
  <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  <! - caso predeterminado cuando no hay coincidencias ->
  <some-element *ngSwitchDefault>...</some-element>
</container-element>
```

### Clase 152: Ciclo de vida completo de un componente
En angular los componentes son los principales pilares de la aplicación,  cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. Hay 8 etapas diferentes en el ciclo de vida de los componentes. Cada etapa se denomina `lifecycle hook event` o en ‘evento de enlace de ciclo de vida’. Podemos utilizar estos eventos en diferentes fases de nuestra aplicación para obtener el control de los componentes. Como un componente es una clase de TypeScript, cada componente debe tener un método constructor.

El constructor de la clase de componente se ejecuta primero, antes de la ejecución de cualquier otro lifecycle hook. Si necesitamos inyectar dependencias en el componente, el constructor es el mejor lugar para hacerlo. Después de ejecutar el constructor, Angular ejecuta sus métodos de enganche de ciclo de vida en un orden específico.

![](./assets/CicloDeVidaComponente.png)
![2](./assets/CicloUdemyDespcricion.jpeg)

Mas imformacion en el [Blog](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)

## Seccion 9: Aplicacion #5 --> Aplicacion con autenticacion Auth0

### Clase 155: ¿Qué aprenderemos en esta seccion?

Se trabajara en una pequeña aplicacion que tendra como finalidad, utilizar un sisitema de autenticacion de usuarios Auth0.

Temas:
  > 
    1. ¿Qué es Auth0 y la documentación basada en Angular 2?
    2. Autenticación con Facebook, Twitter, Google, entre otros...
    3. Creación de un formulario de captura para la creación de usuarios.
    4. Personalización de la caja de login.
    5. Uso de servicios para bloquear rutas que no son válidas si el usuario no esta autenticado.
    6. Obtener la información del perfil del usuario ingresado.

### Clase 159: Comenzando con Auth0 - Componentes y servicios

Una URL de __callback__ es una URL en su aplicación donde Auth0 redirige al usuario después de que se haya autenticado.