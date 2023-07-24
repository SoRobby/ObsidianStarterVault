<%*
	let tableType = await tp.system.suggester(["Include current file in query", "Exclude current file in query"], ["Include current file in query", "Exclude current file in query"])

	let queryString = '';

	if(tableType == 'Include current file in query'){
		queryString = '`"${dv.current().file.folder}"`'
	} else {
		queryString = '`"${dv.current().file.folder}" and !"${dv.current().file.path}"`'
	}
_%>

```dataviewjs
for(let group of dv.pages(<% `${queryString}` %>).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```

<% tp.file.cursor(1) %>