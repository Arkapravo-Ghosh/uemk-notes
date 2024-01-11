import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "UEMK Notes",
  description: "Notes for UEMK students",
  theme: defaultTheme({
    editLink: true,
    repo: "https://github.com/Arkapravo-Ghosh/uemk-notes",
    logo: "/images/logo.png",
    navbar: [
      {
        "text": "Home",
        "link": "/",
      },
    ],
    sidebarDepth: 2,
  }),
  port: 3000,
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
});