import Vue from "vue";
import Router from "vue-router";

// importing routes
import HomePage from "./pages/HomePage.vue";
import DragAndDropPage from "./pages/DragAndDropPage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/FlashCode/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dragndrop',
      name: 'DragAndDrop',
      component: DragAndDropPage
    }
  ]
});