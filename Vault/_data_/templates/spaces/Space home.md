<%*
	let title = await tp.system.prompt("Space name");
	let description = await tp.system.prompt("Space description");
	title = title.trim();
	description = description.trim();	
	
	
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	pathArray = fileObject.path.replaceAll(`/${fileObject.name}`, "").split('/');
	
	await this.app.vault.createFolder(`${pathArray[0]}/${title}/`);
	await tp.file.move(`${pathArray[0]}/${title}/` + tp.file.title);
	await tp.file.rename(title + ' Dashboard');	
_%>
---
banner: ""
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
description: <% `${description}` %>
document_type: dashboard
tags: dashboard
---
# <% `${title}` %>

## Pages
```dataviewjs
let pages = dv.pages(`"${dv.current().file.folder}" and !"${dv.current().file.path}"`)
if(pages.length > 0){
for(let group of dv.pages(`"${dv.current().file.folder}" and !"${dv.current().file.path}"`).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
} else {
	dv.el('div', 'No pages')
}

```

<% tp.file.cursor(1) %>
