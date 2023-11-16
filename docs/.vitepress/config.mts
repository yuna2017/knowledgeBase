import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans-CN",
  title: "YUNA KnowledgeBase",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    outlineTitle: "目录",
    darkModeSwitchLabel: "暗色模式",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    notFound: {
      title: "这个页面不存在",
      quote: "但是，如果你不改变方向，努力寻找，你最终会到达想去的地方。",
      linkLabel: "回到首页",
      linkText: "返回首页",
    },
    footer: {
      message: "",
      copyright:
        "MIT Licensed | Copyright © 2017-2023 燕山大学大学生网络信息协会 ",
    },
    nav: [
      { text: "问题速查", link: "/intro/" },
      { text: "校园网", link: "/network/" },
      { text: "在线服务", link: "/service/" },
      { text: "正版化", link: "/ms/" },
      { text: "校园邮箱", link: "/mail/" },
      { text: "关于我们", link: "/about/" },
    ],

    sidebar: {
      // "/network/": [
      //   "" /* /foo/ */,
      //   "faq" /* /foo/one.html */,
      //   "connect" /* /foo/two.html */,
      //   "advanced",
      // ],
      // "/ms/": [
      //   "" /* /bar/ */,
      //   "foxin" /* /bar/three.html */,
      //   "ms" /* /bar/four.html */,
      // ],
      // "/mail/": ["", "signup", "res"],
      // "/service/": [
      //   "",
      //   "intro",
      //   "auth",
      //   "grade",
      //   "program",
      //   "schedule",
      //   "zongce",
      //   "vpn",
      //   "jwc",
      // ],
      // // fallback
      // "/": [
      //   /* /about.html */
      // ],
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
