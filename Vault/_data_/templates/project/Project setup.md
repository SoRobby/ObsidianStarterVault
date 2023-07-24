<%*
let title = await tp.system.prompt("Project name");
let description = await tp.system.prompt("Description (press enter to skip)");
title = title.trim();
description = description.trim();
await this.app.vault.createFolder(`Projects/${title}/`);
await this.app.vault.createFolder(`Projects/${title}/Meetings/`);
await this.app.vault.createFolder(`Projects/${title}/Notes/`);

await tp.file.move(`Projects/${title}/` + tp.file.title);
await tp.file.rename("Home");

await tp.file.create_new(tp.file.find_tfile("project/Project setup meetings"), 'All Meetings', false, app.vault.getAbstractFileByPath(`Projects/${title}/Meetings`));

await tp.file.create_new(tp.file.find_tfile("project/Project setup notes"), 'All Notes', false, app.vault.getAbstractFileByPath(`Projects/${title}/Notes`));

await tp.file.create_new(tp.file.find_tfile("project/Project setup references"), 'References', false, app.vault.getAbstractFileByPath(`Projects/${title}`));

await tp.file.create_new(tp.file.find_tfile("project/Project setup tasks"), 'Tasks', false, app.vault.getAbstractFileByPath(`Projects/${title}`));

const filePath = tp.file.path(true);
let fileObject = this.app.vault.getAbstractFileByPath(filePath);
let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];

_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: project-dashboard
is_active: true
project: <% `${fileObject.path.split("/")[1]}` %>
tags: dashboard project <% `${fileObject.path.split("/")[1].toLowerCase().replaceAll(" ", "-").trim()}` %>
<% "---" %>
<% `**[[${fileProjectRoot}/Home|Home]]**` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>
# <% `${title}` %>
**Description**:: <% `${description}` %><% tp.file.cursor(1) %>
**Link**: *add link (if relevant)*


## Tasks
<% `*[[${fileProjectRoot}/Tasks|+ Add a task]]*` %>
```dataviewjs 
dv.taskList(dv.pages('"<% `${fileProjectRoot}` %>"').file.tasks .where(t => !t.completed))
```

## Meetings
```button
name + Add meeting
type note(<% `${fileProjectRoot}` %>/Meetings/untitled meeting) template
action project/Project meeting
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"<% `${fileProjectRoot}` %>/Meetings" and !#meetings').limit(10).groupBy(p => p.meeting)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```
*Only showing the last 10 meetings*
<% `*[[${fileProjectRoot}/Meetings/All Meetings|View all meetings →]]*` %>

## Notes
```button
name + Add note
type note(<% `${fileProjectRoot}` %>/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"<% `${fileProjectRoot}` %>/Notes" and !#dashboard and !#notes').limit(10).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```
*Only showing the last 10 notes*
<% `*[[${fileProjectRoot}/Notes/All Notes|View all notes →]]*` %>

---
<% `**[[${fileProjectRoot}/Home|Home]]**` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>