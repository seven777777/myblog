# myblog
[https://seven777777.github.io/myblog/](https://seven777777.github.io/myblog/)

### 项目结构
- _config.yml //保存配置数据
- _includes //相当于组件文件，可在实际页面中重用，使用标签{% include file.ext %}添加
	- footer.html
	- header.html
- _layouts //布局，是包裹在文章外部的模板。可以在YAML头信息中根据不同文章进行选择
	- default.html
	- recent.html
- _posts //文章，格式必须符合YEAR-MONTH-DAY-title.MARKUP
	- 2017-03-02-hello-world.html
	- ...
- _site 
- _style //样式文件
	- _base.head.scss
	- ...
	- gather.scss
- css //最终页面调用的样式
	- default.min.css
- images //图片
- gulpfile.js //gulp配置文件
- index.html //首页
- package.json 


	
