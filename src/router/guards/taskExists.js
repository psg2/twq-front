import store from '@/store';
import * as actions from '@/store/modules/task/types';

function hasProjectInStore(id) {
  return store.getters.getTasks.some(task => task.id === id);
}

export default function TaskExists(to, from, next) {
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
