import store from '@/store';
import * as actions from '@/store/modules/form/types';

function hasFormInStore(id) {
  return store.getters.getForms.some(form => form.id === id);
}

export default function FormExists(to, from, next) {
  const id = to.params.formId;
  if (hasFormInStore(id)) {
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
