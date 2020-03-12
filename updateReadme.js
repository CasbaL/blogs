const fs = require('fs');
const path = require('path');

const titles = fs
  .readdirSync('./Q&A') // 读取文章目录
  .reduce((names, name) => {
    // 过滤非md文件，并去除后缀
    if (path.extname(name) === '.md') {
      names.push(name.replace('.md', ''));
    }
    return names;
  }, [])
  .sort((pre, next) => {
    // 根据文件创建时间排序
    const preCTime = fs.statSync(path.resolve('./Q&A', `${pre}.md`))
      .birthtimeMs;
    const nextCTime = fs.statSync(path.resolve('./Q&A', `${next}.md`))
      .birthtimeMs;
    return nextCTime - preCTime; // 倒序排列
  });

const readme = fs.readFileSync('./README.md', {
  encoding: 'utf-8'
});
titles.forEach(title => {
  const reg = new RegExp(`\\[${title}\\]`);
  if (!reg.test(readme)) {
    const prelativePath = require('url').resolve('./Q&A/', title); // 解析文件名
    fs.appendFileSync(
      './README.md',
      `[${title}](./${prelativePath}.md)     \n`
    );
  }
});
console.info('readme 更新完成！')
