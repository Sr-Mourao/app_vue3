import { createRouter, createWebHistory } from "vue-router";
import { auth, redirectIfAuthenticated } from "@/router/guard";
import { useAuth } from "@/store/auth";

const routes = [
  {
    path: "/login",
    component: () => import("@/layouts/Auth.vue"),
    beforeEnter: redirectIfAuthenticated,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/register.vue"),
      },
      {
        path: "/verificar-email",
        name: "verifyEmail",
        component: () => import("@/views/verifyemail.vue"),
      },
      {
        path: "/esqueci-senha",
        name: "forgotpassword",
        component: () => import("@/views/forgotpassword.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Dashboard.vue"),
    beforeEnter: auth,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("@/views/dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach( (to, from, next) => {
  const authStore = useAuth()
  authStore.sanctum();
  next()
})

export default router;
