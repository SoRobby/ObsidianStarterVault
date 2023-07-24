---
banner: ""
date_created: 2023-07-08
date_modified: 2023-07-18
description: Collection of math formulas and equations.
document_type: dashboard
tags: dashboard formula
---
# All Formulas
Collection of math formulas and equations.

```button
name + Add formula
type note(Spaces/Formulas/untitled formula) template
action general/math formula
templater true
class tailwind-button-white
```


## Formulas
```dataviewjs
for(let group of dv.pages(`"${dv.current().file.folder}" and !"${dv.current().file.path}"`).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```


---
