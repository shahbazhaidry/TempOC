import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPraticaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterPratica',
})
export class FilterPraticaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */P1_Cognome
  transform(items: any[], value: string) {
    if (!items) return [];
    return items.filter(it => {
      let P1_NomeCompleto = it.P1_Nome + " " + it.P1_Cognome;
    	return (it.P1_Targa.indexOf(value) > -1 ||
              P1_NomeCompleto.indexOf(value) > -1 ||
              (it.P1_Marca != null && it.P1_Marca.indexOf(value) > -1) ||
              (it.P1_Modello != null && it.P1_Modello.indexOf(value) > -1) ||
              (it.P1_VeicoloMarcaID != null && it.P1_VeicoloMarca.indexOf(value) > -1) ||
              (it.P1_VeicoloModelloID != null && it.P1_VeicoloModello.indexOf(value) > -1));
    });
  }
}
