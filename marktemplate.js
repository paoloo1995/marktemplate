

function MarkTemplate(tpl) {
	var match,
		code = ["var html=[];"],
		reg = /\{\{\s*([a-zA-Z\.\_0-9()]+)\s*\}\}/m,						//匹配{{content}}的正则表达式
		
		//将html代码以字符串形式加入数组html
		rep = function(text) {
			var replacedText = text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
			code.push('html.push(\'' + replacedText + '\');');
		}


	while (match = reg.exec(tpl)) {											//若tpl中存在形如{{content}}的变量
		if (match.index > 0) {												//若{{}}中有内容
			rep(tpl.slice(0,match.index));
			code.push('html.push(this.' + match[1] + ');');					//不用rep，直接push到code中，因为变量名不应被当作字符串
			
		};

		tpl = tpl.slice(match.index + match[0].length , tpl.length);
	}
	rep(tpl);																//处理最后一个变量之后的html代码
	code.push('return html.join(\'\');');
	var func = new Function(code.join('\n'));
	this.render = function(model) {
		return func.apply(model);
	}

}

