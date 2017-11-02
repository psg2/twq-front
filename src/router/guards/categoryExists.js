import store from '@/store';
import * as actions from '@/store/modules/category/types';

function hasCategoryInStore(id) {
  return store.getters.getCategories.some(category => category.id === id);
}

export default function CategoryExists(to, from, next) {
  const id = to.params.id;
  if (hasCategoryInStore(id)) {
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
