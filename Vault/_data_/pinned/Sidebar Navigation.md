---
cssclass: pinned-pages
---
### [[Projects/Projects|Projects]]
```dataviewjs
const myList = [];
let projects = dv.pages('"Projects" and #dashboard and !#projects').sort(k => k.file.frontmatter['project'], 'asc');
projects = projects.filter(obj => obj.is_active === true);
for(let i=0; i<projects.length; i++){
	myList.push(`- [[${projects[i].file.path}|${projects[i].file.path.split('/')[projects[i].file.path.split('/').length-2]} ]]`)
}
dv.paragraph(myList)
```