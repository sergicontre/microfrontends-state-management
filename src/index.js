import './styles.css';
import './views/my-app.js';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));

  router.setRoutes([
     {
      path: '/',
      component: 'my-app'
    }
    // {
    //   path: '/',
    //   component: 'view-a'
    // },
    // {
    //   path: '/view-b',
    //   component: 'view-b',
    //   action: () => import(/* webpackChunkName: "viewb" */ './views/view-b')
    // }
  ]);
}
