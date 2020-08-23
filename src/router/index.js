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
    meta: {
      requiresAuth: false
  }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresAuth: false
  }
  },
  {
    path: "/dashbord",
    name: "Dashbord",
    component: Dashbord,
    meta: {
      requiresAuth: true
  }
  
  
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      requiresAuth: true
  }

  },
  {
    path: "/teams",
    name: "Teams",
    component: Team,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: "/accountSetting",
    name: "AccountSetting",
    component: AccountSetting,
    meta: {
      requiresAuth: true
  }
 
  },
  {
    path: "/profileSetting",
    name: "ProfileSetting",
    component: ProfileSetting,
    meta: {
      requiresAuth: true
  }
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('token') == null) {
        next({
            path: '/',
            params: { nextUrl: to.fullPath }
        })
    } else {
        next();
     }
} 
else{
  next();
}
})

export default router;
