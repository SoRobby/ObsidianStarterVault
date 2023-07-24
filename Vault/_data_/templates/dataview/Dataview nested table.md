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
for(let group of dv.pages(<% `${queryString}` %>).groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length
  dv.header(headerLevel, `${group.key}`);
  dv.table(["Name", "Description", "Date Modified"],
  group.rows.map(k => [k.file.link, k.file.frontmatter['description'], k.file.mtime]))
}
```

<% tp.file.cursor(1) %>