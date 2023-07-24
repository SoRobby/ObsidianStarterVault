<%*
	let programmingLang = await tp.system.prompt("Programming language");
	if(programmingLang.length == 0){
		programmingLang = "text";
	}
_%>

```<% `${programmingLang}` %>
<% tp.file.cursor(1) %>
```