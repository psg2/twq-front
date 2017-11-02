import store from '@/store';
import * as actions from '@/store/modules/service/types';

function hasProjectInStore(id) {
  return store.getters.getServices.some(service => service.id === id);
}

export default function ServiceExists(to, from, next) {
  const id = to.params.id;
  if (hasProjectInStore(id)) {
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
