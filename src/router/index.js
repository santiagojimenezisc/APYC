import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "*",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

router.beforeEach((to, from, next) => {
  var subdir = window.location.host.split('.')[0];
  var domain = 'santi.app';
  var pageToLoad = 'Home';

  if (subdir !== damin && to.name !== pageToLoad) {
    next({
      name: pageToLoad, params: {

      }
    })
  } else {
    next()
  }
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
