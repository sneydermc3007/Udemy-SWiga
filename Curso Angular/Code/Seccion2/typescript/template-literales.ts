(function(){
    (function(){

        function getEdad() {
            return 100 + 100 + 300;
        }
    
        const nombre   = 'Sneyder';
        const apellido = 'Martinez';
        const edad     = 20;
    
        // const salida = nombre + apellido + edad;
        // const salida = nombre + " " + apellido + " ( " + edad + " )";
        const salida = `
            ${ nombre }
            ${ apellido }
            ( ${ getEdad() } )`;
        // Sneyder Martinez (Edad: 20)
    
        console.log(salida);
    
    })();
    
})();

