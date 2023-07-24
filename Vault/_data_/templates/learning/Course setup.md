<%*
let name = await tp.system.prompt("Course name");
let subject = await tp.system.prompt("Subject (press enter to skip)");
let description = await tp.system.prompt("Description (press enter to skip)");
name = name.trim();
subject = subject.trim();
description = description.trim();

let includeFolderBasedAssignments = await tp.system.suggester(["Yes", "No"], [true, false], false, "Do you want to include folder-based assignments?")

await this.app.vault.createFolder(`Learning/${name}/`);
await this.app.vault.createFolder(`Learning/${name}/Lectures/`);
await this.app.vault.createFolder(`Learning/${name}/Notes/`);

if(includeFolderBasedAssignments == true){
	await this.app.vault.createFolder(`Learning/${name}/Assignments/`);
}

await tp.file.move(`Learning/${name}/` + tp.file.title)
await tp.file.rename("Home");

const filePath = tp.file.path(true);
let fileObject = this.app.vault.getAbstractFileByPath(filePath);
let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: course
tags: sub-dashboard course
<% "---" %>
[[Learning/Learning Dashboard|Learning Dashboard]] / **<% `[[${filePath}|${fileObject.parent.name}]]` %>**
# <% `${fileObject.parent.name}` %>
**Overview**
Title:: <% `${fileObject.parent.name}` %>
Subject:: <% `${subject}` %>
Description:: <% `${description}` %>
Completed:: false
Link:: <% tp.file.cursor(1) %>


## Actions
```button
name + Add lecture
type note(<% `${fileProjectRoot}` %>/Lectures/unnamed lecture) template
action learning/Course lecture
templater true
class tailwind-button-white
```
<%* if(includeFolderBasedAssignments == true) { %>
```button
name + Add assignment
type note(<% `${fileProjectRoot}` %>/Assignments/unnamed assignment) template
action learning/Course assignment
templater true
class tailwind-button-white
```
<%* }  %>
```button
name + Add note
type note(<% `${fileProjectRoot}` %>/Notes/unnamed note) template
action learning/Course note
templater true
class tailwind-button-white
```


## Lectures
```dataviewjs
for (let group of dv.pages('"<% `${fileProjectRoot}` %>" and #lecture').groupBy(p => p.lecture)) {
	dv.table(["Lecture", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))
}
```


## Assignments
<%* if(includeFolderBasedAssignments == true) { %>
```dataviewjs
for (let group of dv.pages('"<% `${fileProjectRoot}` %>" and #assignment').groupBy(p => p.lecture)) {
	dv.table(["Lecture", "Completed", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['completed'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))
}
```
<%* }  %>

## Notes
```dataviewjs
for (let group of dv.pages('"<% `${fileProjectRoot}` %>" and #course-note').groupBy(p => p.lecture)) {
	dv.table(["Note", "Description"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description']
			]))
}
```


---
[[Learning/Learning Dashboard|Learning Dashboard]] / **<% `[[${filePath}|${fileObject.parent.name}]]` %>**