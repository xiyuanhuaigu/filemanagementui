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
      meta: { hideComponent: true },
    },
    {
      path: "/",
      redirect: "/login",
      meta: { hideComponent: true },
    },
    {
      path: "/background",
      component: () => import("@/pages/background/index.vue"),
      meta: { hideComponent: true },
      children: [
        {
          path: "/background/collect", // 作业收取
          name: "collect",
          component: () => import("@/pages/background/Collect/index.vue"),
        },
        {
          path: "/background/class", // 班级管理
          name: "class",
          component: () =>
            import("@/pages/background/Classmanagement/index.vue"),
        },
        {
          path: "/background/Completion", //完成度查看
          name: "Completion",
          component: () =>
            import("@/pages/background/Completiondegree/index.vue"),
        },
        {
          path: "/background/distribute", // 作业下发
          name: "distribute",
          component: () => import("@/pages/background/Distribute/index.vue"),
        },
        {
          path: "/background/password", //密码管理
          name: "password",
          component: () =>
            import("@/pages/background/Passwordmanagement/index.vue"),
        },
        {
          path: "/background/personmag", // 人员管理
          name: "personmag",
          component: () =>
            import("@/pages/background/Personnelmanagement/index.vue"),
        },
        {
          path: "/background/person", //人员
          name: "person",
          component: () => import("@/pages/background/Persion/index.vue"),
        },
      ],
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
