import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/Landing.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Dashboard from "../pages/Dashboard.vue";
import Tickets from "../pages/Tickets.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
  { path: "/tickets", component: Tickets },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
