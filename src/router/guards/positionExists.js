import store from '@/store';
import * as actions from '@/store/modules/position/types';

function hasProjectInStore(id) {
  return store.getters.getPositions.some(position => position.id === id);
}

export default function PositionExists(to, from, next) {
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
