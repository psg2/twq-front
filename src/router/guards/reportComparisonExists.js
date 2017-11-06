import store from '@/store';
import * as actions from '@/store/modules/report/types';

function hasReportInStore(id) {
  return store.getters.getReports.some(report => report.id === id);
}

export default async function ReportExists(to, from, next) {
  const idA = to.params.reportAId;
  const idB = to.params.reportBId;
  if (hasReportInStore(idA) && hasReportInStore(idB)) {
    store.commit(actions.SELECT_COMPARISON, { idA, idB });
    next();
  } else {
    try {
      await store.dispatch(actions.FETCH, { id: idA });
      await store.dispatch(actions.FETCH, { id: idB });
      store.commit(actions.SELECT_COMPARISON, { idA, idB });
      next();
    } catch (err) {
      next(err);
    }
  }
}
