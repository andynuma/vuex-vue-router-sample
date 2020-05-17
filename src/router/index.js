import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cats from "../views/Cats"
import Dogs from "../views/Dogs"
import Pets from "../views/Pets"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats
  }, {
    path: "/dogs",
    name: "Dogs",
    component: Dogs
  }, {
    path: "/pets",
    name: "Pets",
    component: Pets
  },
  {
    path: "/pets/:species/:id",
    name: "cats",
    component: Pets
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;