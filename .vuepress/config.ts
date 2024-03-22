import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "小熊创作",
  description: "毕业设计",
  theme: recoTheme({
    primaryColor: '#ffa500',
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "小熊同学",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "上次更新",
    catalogTitle: '目录',
    // series 为原 sidebar
    // 自动设置分类
    // autoSetSeries: true,
    series: {
      "/docs/guide": [
        {
          text: "毕业设计",
          children: [
            "/docs/guide/guide",
            "/docs/guide/write",
            "/docs/guide/skills",
          ],
        }
      ],
      "/docs/java/": [
        {
          text: "Java Web项目",
          children: [
              "/docs/java/java-web/verio_house"
          ],
        },
        {
          text: "Spring Boot项目",
          children: [
              "/docs/java/spring-boot/library"
          ],
        },
      ],
      "/docs/separation/": [
        {
          text: "Spring Boot + Vue",
          children: [
              "/docs/separation/spring-boot-vue/welcome",
            "/docs/separation/spring-boot-vue/attendance",
            "/docs/separation/spring-boot-vue/community",
            "/docs/separation/spring-boot-vue/practice",
            "/docs/separation/spring-boot-vue/gym",
            "/docs/separation/spring-boot-vue/smart-dormitory",
            // "/docs/separation/spring-boot-vue/children-product",
        ],
        },
      ],
      "/docs/service/": [
        {
          text: "服务",
          children: [
            "/docs/service/introduce",
            "/docs/service/customize",
            "/docs/service/remote",
            "/docs/service/explain",
          ],
        },
      ],
    },
    navbar: [
      { text: "指南", link: "/docs/guide/guide.md",icon:'Compass' },
      { text: "Java项目", link: "/docs/java/",icon:'Code'},
      { text: "前后端分离", link: "/docs/separation/",icon:'AppConnectivity' },
      { text: "小程序", link: "/docs/applets/",icon:'ApplicationMobile' },
      { text: "服务", link: "/docs/service/introduce",icon:'LocationHeartFilled' },
      { text: "联系", link: "/docs/connect/about",icon:'PhoneSettings'},
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 小熊创作今天开始就正式成立了，后续会不断地添加新的程序，系统，项目等好作品，你只需要负责需求，其他请交给我。`,
          style: "font-size: 12px;",
        },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "title",
        //   content: "QQ 群",
        // },
        // {
        //   type: "text",
        //   content: `
        //   <ul>
        //     <li>QQ群1：1037296104</li>
        //     <li>QQ群2：1061561395</li>
        //     <li>QQ群3：962687802</li>
        //   </ul>`,
        //   style: "font-size: 12px;",
        // },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系方式",
        },
        {
          type: "text",
          content: `
          <div style="text-align: center">
          <image src="https://javaxiaobear-1301481032.cos.ap-guangzhou.myqcloud.com/picture-bed/WeChat1.png" style="height: 80%"/>
          <span >小熊学Java</span>
          </div>
          `,
          style: "font-size: 12px;",
        },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "buttongroup",
        //   children: [
        //     {
        //       text: "打赏",
        //       link: "/docs/others/donate.html",
        //     },
        //   ],
        // },
      ],
    },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
