import { Pipe, type PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';
import { heroes } from '../data/heroes.data';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {

  transform(value: Color): string {

    return Color [value];
  }

}
