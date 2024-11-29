import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    console.log(value);
    console.log(args)
    if (value.length==0) return null
    if (args=="") return value
    value=value.filter((item:any)=>item.name.toLowerCase().includes(args.toLowerCase()))
    return value;
  }

}
