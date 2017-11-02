import store from '@/store';
import { LOAD_COLLECTION } from '@/store/modules/category/types';

export default function LoadCategories(to, from, next) {
  if (store.state.category.loaded) {
    next();
  } else {
    store
      .dispatch(LOAD_COLLECTION)
      .then(() => next())
      .catch(() => next(false));
  }
}
