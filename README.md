###MarkTemplateģ������
��߼�ģ�����棬����ʵ�ֻ����ı����滻��

####����
```html 
<script type="text/javascript" src="marktemplate.js" ></script>
```

####���ģ��ṹ
```html 
<script type="text/plain" id="tpl">
	<p>name: {{user.name}}</p>
	<h2>age: {{user.age}}</h2>
	<h3>content: {{content}}</h3>
	<p>123</p>
</script>
```
ʹ��```{{  }}```���������Ĳ����Ǳ���

####��������ģ��
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

####��������ģ����Ⱦģ��

```html
<script type="text/javascript">
	var tp = document.getElementById("tpl").innerHTML;   //��ȡģ��ṹ
	var cont = new MarkTemplate(tp);                     //����ģ�����ʵ��
	document.write(cont.render(model));                  //����model�����������ģ����Ⱦ
</script>
```
