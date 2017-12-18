import store from '@/store';
import * as actions from '@/store/modules/team/types';

function hasTeamInStore(id) {
  return store.getters.getTeams.some(team => team.id === id);
}

export default function TeamExists(to, from, next) {
  const id = to.params.formId;
  if (hasTeamInStore(id)) {
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
