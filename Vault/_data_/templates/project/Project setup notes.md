<%*
	let title = "All Notes";
	await tp.file.rename("All Notes");
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];	
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: notes
project: <% `${fileObject.path.split("/")[1]}` %>
description: List of project notes.
tags: <% `${fileObject.path.split("/")[1].toLowerCase().replaceAll(" ", "-").trim()}` %> notes
<% "---" %>
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `**[[${fileProjectRoot}/Notes/All Notes|Notes]]**` %> | <% `[[${fileProjectRoot}/References|References]]` %>
# Notes
**Create new note**
```button
name + Add note
type note(<% `${fileProjectRoot}` %>/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
**Flat view**
```dataviewjs
for (let group of dv.pages('"<% `${fileProjectRoot}` %>/Notes" and !#dashboard and !#notes').groupBy(p => p.note)) {
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
for (let group of dv.pages('"<% `${fileProjectRoot}` %>/Notes" and !#dashboard and !#notes').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length;
  dv.header(headerLevel, `${group.key.replace(group.key.split("/")[0], "").slice(1).replaceAll("/", " / ")}`);  
  dv.table(["Name", "Description", "Date created"],
  group.rows.map(k => [k.file.link, k['description'], k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day]))
}
```

---
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `**[[${fileProjectRoot}/Notes/All Notes|Notes]]**` %> | <% `[[${fileProjectRoot}/References|References]]` %>