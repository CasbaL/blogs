# 集成 Travis CI 自动部署到 GitHub page
  > [Travis Ci 官网](https://travis-ci.com/)(直接用 GitHub 授权登录)      
  > [GitHub pages help](https://help.github.com/en/github/working-with-github-pages)要使用 GitHub Pages 只需新建一个名字为 `username.github.io` 的仓库，然后把[打包好的文件](./2020-01-09)push 到这个仓库的 master 分支就行；     

我们先[打开这个链接](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages-and-travis-ci) 这里已经有很明细的教程；这里我就只记录下配置时要注意的几个点：     

这个是我的 casbal.github.io 的`.travis.yml`配置文件
```
    language: node_js
    node_js:
      - lts/*
    install:
      - yarn install # npm ci
    script:
      - yarn build

    deploy:
      provider: pages
      skip_cleanup: true
      local_dir: .vuepress/dist # 打包后的静态文件位置目录
      github_token: $ACESSS_TOKEN  # 在 Travis 官网选择一个仓库的设置
      keep_history: true
      target_branch: master # 将 local_dir 的文件强制 push 到的目标分支
      on:
        branch: blogs # 这个是我写作的分支
```
$ACESSS_TOKEN 这个值是在 Travis 官网选择一个仓库的设置中的 `Environment Variables` 来添加 `name`, [`value`](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line), `branch`      

::: warning
1. 这个要跟配置文件中的 -on -branch 对应，不然就会出现权限问题，没法push打包后的文件；
2. ACESSS_TOKEN 这个名字配置时是不用`$`的，在配置文件中引用是要加上`$`的 
:::

然后我这里更改了on > branch 和 target_branch 的配置，默认不改是可以的，但是要注意在`.vuepress/config.js` 中设置正确的 base


