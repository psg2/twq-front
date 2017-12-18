import store from '@/store';
import * as actions from '@/store/modules/report/types';

function hasReportInStore(id) {
  return store.getters.getReports.some(report => report.id === id);
}

export default function ReportExists(to, from, next) {
  const id = to.params.reportId;
  if (hasReportInStore(id)) {
    store.commit(actions.SELECT, { id });
    next();
  } else {
    store
      .dispatch(actions.FETCH, { id })
      .then(() => {
        store.commit(actions.SELECT, { id });
        next();
      })
      .catch(() => next(false));
  }
}
