// hexo.extend.filter.register('after_render', function (str, data) {
// 	// 只在 HTML 文件中插入 JavaScript
// 	console.log(data)
// 	if (data.path.endsWith('.html')) {
// 	  // 将 JavaScript 插入到页面的底部
// 	  str = str.replace('</body>', '<script src="./func.js"></script></body>');
// 	  console.log(str);
// 	  hexo.log.info(str);
// 	}
// 	return str;
// });
// hexo.extend.generator.register("index", function (locals) {
// 	console.log(locals[posts]);
// 	return locals.posts;
//   });
const fs=require('fs');
const path=require('path');
hexo.extend.generator.register('func.js',function(){
	const jspath=path.join(__dirname, 'func.js');
	// 读取 func.js 的内容
	const jsContent = fs.readFileSync(jspath, 'utf-8');

	console.log(typeof(hexo.locals.get('posts')));//object
	const content=hexo.locals.get('posts').data;
	const dates=[]
	content.forEach(element => {
		//console.log(element.title,element.date.toISOString().substring(0,10));
		dates.push(element.date.toISOString().substring(0,10));
	});
	console.log(dates);

	// 将 posts 数据插入到 func.js 中
	const modifiedJsContent = jsContent.replace(
		'/* HEXO_POSTS */',
		`checkedDays = ${JSON.stringify(dates)};`//从hexo插件入口js传递过去数组
	  );

	const csspath=path.join(__dirname, 'style.css');
	  // 读取 func.js 的内容
	const cssContent = fs.readFileSync(csspath, 'utf-8');
	return [{
		path: 'func.js',  // 自定义路由路径
		data: modifiedJsContent  // 自定义 JavaScript 内容
	  },{
		path:'style.css',
		data:cssContent
	  }];
})

hexo.extend.injector.register('body', '<script src="./func.js"></script>');
console.log('ok')
