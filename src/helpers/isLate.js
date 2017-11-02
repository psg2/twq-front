import * as moment from 'moment';

export default function isLate(project) {
  return moment().isAfter(project.end) && project.status === 'Andamento';
}
