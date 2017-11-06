import store from '@/store';
import * as actions from '@/store/modules/company/types';

function hasCompanyInStore(id) {
  return store.getters.getCompanies.some(company => company.id === id);
}

export default function CompanyExists(to, from, next) {
  const id = to.params.companyId;
  if (hasCompanyInStore(id)) {
    store.commit(actions.SELECT, { id });
    next();
  } else {
    store
      .dispatch(actions.FETCH, { id })
      .then(() => {
        store.commit(actions.SELECT, { id });
        next();
      })
      .catch(() => {
        next(false);
      });
  }
}
