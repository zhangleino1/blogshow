import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import fs from 'fs'
import path from 'path'

function getSidebar(folder) {
  const extension = ['.md'];
  const files = fs
    .readdirSync(`./docs/${folder}`)
    .filter(
      (item) =>
        item.toLowerCase() !== 'readme.md' && extension.includes(path.extname(item))
    )
    .map((item) => `/${folder}/${item}`);

  return [
    {
      text: '论文列表',
      collapsible: false,
      children: files
    }
  ];
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: '室内定位技术',
  description: '室内定位算法、论文、项目分享',
  theme: defaultTheme({
    logo: 'https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2024/jpeg/354158/1717584738049-5a4ffdae-d469-44a9-b298-f86934b6e14c.jpeg?date=1717585212400',
    navbar: [
      { text: '首页', link: '/' },
      { text: '论文总结', link: '/papers/' },
      { text: '开源项目', link: 'https://github.com/zhangleino1' },
      { text: '商务合作', link: '/商务合作.md' },
    ],
    sidebar: {
      '/papers/': getSidebar('papers')
    }
  }),
  bundler: viteBundler(),
})
