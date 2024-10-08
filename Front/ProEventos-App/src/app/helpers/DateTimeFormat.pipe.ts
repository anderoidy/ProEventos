import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateFormatPipe',
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, _args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}
