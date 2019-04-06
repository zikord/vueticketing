import Vue from "vue";
import Router from "vue-router";
import searchProjections from "./components/searchProjections.vue";
import home from "./components/home.vue";
import movies from "./components/homeComponents/movies.vue";

Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      children: [
        {
          path: "/searchProjections",
          name: "searchProjections",
          component: searchProjections
          },
          {
            path: "/movies",
            name: "movies",
            component: movies
          }
      ]
    }
  ]
});