import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): unknown {

    console.log(value);
    if (activar) {
      return('*'.repeat(value.length))
    }
    else {
      return value;
    }
  
  }

}
