import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: number): string {
    console.log({ value});
    return value === 0 ? "DC" : "Marvel";

  }

}
