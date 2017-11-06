import store from '@/store';

export default function AuthGuard(to, from, next) {
  const loggedIn = store.getters.getLoggedIn;
  if (to.matched.some(record => record.meta.requireLoggedIn)) {
    if (loggedIn) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else if (to.matched.some(record => record.meta.requireLoggedOut)) {
    if (!loggedIn) {
      next();
    } else {
      next({ name: 'Companies List' });
    }
  }
}
