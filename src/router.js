import Vue from "vue";
import Router from "vue-router";
import Top from "@/views/Top";
import User from "@/views/User";
import Editor from "@/views/Editor";
import Problem from "@/views/Problem";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "top",
      component: Top
    },
    {
      path: "/user/:uid",
      name: "user",
      component: User
    },
    {
      path: "/edit",
      name: "editor",
      component: Editor
    },
    {
      path: "/problem/:id",
      name: "problem",
      component: Problem
    }
  ]
});
