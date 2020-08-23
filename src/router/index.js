import Vue from "vue";
import VueRouter from "vue-router";
import Dashbord from "../views/Dashbord.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Teams.vue";
import AccountSetting from "../components/AccountSetting.vue";
import ProfileSetting from "../components/ProfileSetting.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashbord",
    name: "Dashbord",
    component: Dashbord,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Team,
  },
  {
    path: "/accountSetting",
    name: "AccountSetting",
    component: AccountSetting,
  },
  {
    path: "/profileSetting",
    name: "ProfileSetting",
    component: ProfileSetting,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
