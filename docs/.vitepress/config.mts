import { defineConfig } from "vitepress";

import fs from "fs";
import path from "path";

function getList(name: string) {
  let basePath = path.resolve(__dirname, "../" + name + "/");
  let files = fs.readdirSync(basePath);
  let list: { text: string; link: string }[] = [];
  files.forEach((i) => {
    if (!i.endsWith(".md")) return;
    if (i === "index.md") return;
    let file = fs.readFileSync(path.join(basePath, i), { encoding: "utf-8" });
    list.push({
      text: (/^\# (.*)\n/.exec(file) || [, i.slice(0, -3)])[1] as string,
      link: `/${name}/${i.slice(0, -3)}`,
    });
  });
  return list;
}

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

    sidebar: [
      {
        text: "校园网",
        items: getList("network"),
        collapsed: false,
        link: "/network/",
      },
      {
        text: "在线服务",
        items: getList("service"),
        collapsed: false,
        link: "/service/",
      },
      {
        text: "正版化",
        items: getList("ms"),
        collapsed: false,
        link: "/ms/",
      },
      {
        text: "校园邮箱",
        items: getList("mail"),
        collapsed: false,
        link: "/mail/",
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
