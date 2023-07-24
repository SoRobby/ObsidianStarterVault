---
date_created: 2023-07-23
date_modified: 2023-07-23
document_type: notes
project: Top Secret Project
description: List of project notes.
tags: top-secret-project notes
---
[[Projects/Top Secret Project/Home|Home]] | [[Projects/Top Secret Project/Meetings/All Meetings|Meetings]] | **[[Projects/Top Secret Project/Notes/All Notes|Notes]]** | [[Projects/Top Secret Project/References|References]]
# Notes
**Create new note**
```button
name + Add note
type note(Projects/Top Secret Project/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
**Flat view**
```dataviewjs
for (let group of dv.pages('"Projects/Top Secret Project/Notes" and !#dashboard and !#notes').groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```


**Hierarchical view**
```dataviewjs
for (let group of dv.pages('"Projects/Top Secret Project/Notes" and !#dashboard and !#notes').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length;
  dv.header(headerLevel, `${group.key.replace(group.key.split("/")[0], "").slice(1).replaceAll("/", " / ")}`);  
  dv.table(["Name", "Description", "Date created"],
  group.rows.map(k => [k.file.link, k['description'], k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day]))
}
```

---
[[Projects/Top Secret Project/Home|Home]] | [[Projects/Top Secret Project/Meetings/All Meetings|Meetings]] | **[[Projects/Top Secret Project/Notes/All Notes|Notes]]** | [[Projects/Top Secret Project/References|References]]