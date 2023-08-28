import { createRouter, createWebHistory } from "vue-router";


export default createRouter({
    // 路由器的模式设置
    history: createWebHistory(),
  
    routes: [
      {
        path: "/home",
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "/login",
        component: () => import("@/pages/login/index.vue"),
      },
      {
        path: "/",
        redirect: "/login",
      },
      {
        path: "/background",
        component: () => import("@/pages/background/index.vue"),
        meta: { hideComponent: true }, 
      },
    ],
    // 滚动行为:控制滚动条的位置
    scrollBehavior() {
      return {
        left: 0,
        top: 0,
      };
    },
  });
  