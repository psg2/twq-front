import * as moment from 'moment';

export default function date(value, format) {
  if (value) {
    return moment(new Date(value)).format(format);
  }
  return value;
}
