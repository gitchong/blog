# BIGTIGER.ME BLOG 
简单的前端静态博客

### 实现思路

  虽说网上各种静态博客项目层出不穷，但是重要的在于解决问题以及解决问题时的思路。
  这是我的思路，供大家参考https://segmentfault.com/a/1190000009341256?_ea=2575582

### 特别注意

  请在开始前在根目录下创建一个 `static` 文件夹。用来解决[#1](https://github.com/liujinyang1994/Blog/issues/1)。
  后续我将完善这部分的构建流程。

### 使用

1. 拷贝一份代码到你的本地
2. 在目录下 `npm i`
3. 在posts文件夹下面写`.md` 文件（注意！文件名不允许使用list.md）
4. 打包 `npm run build`
5. 将打包的文件扔到服务器

### 更新文章

1. 在config/prod.env.js 配置ftp
2. 执行 `npm run release`



