import './styles.css';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));

  router.setRoutes([
     {
      path: '/',
      component: 'my-app',
      action: () => import(/* webpackChunkName: "app" */ './views/my-app')
    },
    {
      path: '/view-a',
      component: 'view-a',
      action: () => import(/* webpackChunkName: "viewa" */ './views/view-a')
    },
    {
      path: '/view-b',
      component: 'view-b',
      action: () => import(/* webpackChunkName: "viewb" */ './views/view-b')
    },
    {
      path: '/view-c',
      component: 'view-c',
      action: () => import(/* webpackChunkName: "viewc" */ './views/view-c')
    },
    {
      path: '/view-ab',
      component: 'view-ab',
      action: () => import(/* webpackChunkName: "viewab" */ './views/view-ab')
    },
    {
      path: '/view-bc',
      component: 'view-bc',
      action: () => import(/* webpackChunkName: "viewbc" */ './views/view-bc')
    },
    {
      path: '/view-ac',
      component: 'view-ac',
      action: () => import(/* webpackChunkName: "viewac" */ './views/view-ac')
    },
  ]);
}
