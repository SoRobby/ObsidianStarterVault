---
banner: ""
date_created: 2023-10-29
date_modified: 2023-10-29
description: Obsidian development, scripts, and testing of new ideas.
document_type: dashboard
tags: dashboard
---
# Obsidian Development

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


