module.exports = {
  themeConfig: {
    lastUpdated: '上次更新',
    sidebar: [
      ['/', 'demo'],
      {
        title: '第一节',
        collapsable: true,
        children: [['/demo/2019-11-19', '啥东西？']],
      },
      {
        title: 'Q&A',
        collapsable: true,
        children: [
          ['/Q&A/2020-01-13 随手记.md', '2020-01-13 随手记'],
          ['/Q&A/2020-01-15 随手记.md', '2020-01-15 随手记'],
          ['/Q&A/Vuepress 使用记录.md', 'Vuepress 使用记录'],
          ['/Q&A/使用Docker打包一套开发模板.md', '使用Docker打包一套开发模板'],
          ['/Q&A/做个自己的脚手架工具.md', '做个自己的脚手架工具'],
          ['/Q&A/关于 Map 和 Object.md', '关于 Map 和 Object'],
          ['/Q&A/关于 mobx 的使用.md', '关于 mobx 的使用'],
          ['/Q&A/关于JavaScript操作符 New 的那些.md', '关于JavaScript操作符 New 的那些'],
          ['/Q&A/关于JavaScript的异步编程.md', '关于JavaScript的异步编程'],
          ['/Q&A/集成 Travis CI 自动部署到 GitHub page.md', '集成 Travis CI 自动部署到 GitHub page'],
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  title: '随手记',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': 'imgs/',
      },
    },
  },
}