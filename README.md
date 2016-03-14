###MarkTemplate模板引擎
玩具级模板引擎，可以实现基本的变量替换。

####引入
```html 
<script type="text/javascript" src="marktemplate.js" ></script>
```

####设计模板结构
```html 
<script type="text/plain" id="tpl">
	<p>name: {{user.name}}</p>
	<h2>age: {{user.age}}</h2>
	<h3>content: {{content}}</h3>
	<p>123</p>
</script>
```
使用```{{  }}```包裹起来的部分是变量

####定义数据模型
```html
<script type="text/javascript">
	var model = {
		user:{
			name:'mark',
			age:21
		},
		content:'23333333333333333'
	}
</script>	
```

####根据数据模型渲染模板

```html
<script type="text/javascript">
	var tp = document.getElementById("tpl").innerHTML;   //获取模板结构
	var cont = new MarkTemplate(tp);                     //创建模板对象实例
	document.write(cont.render(model));                  //按照model所定义的数据模型渲染
</script>
```
