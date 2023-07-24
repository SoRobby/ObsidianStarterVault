---
date_created: 2023-07-23
date_modified: 2023-07-23
document_type: project-dashboard
is_active: true
project: Top Secret Project
tags: dashboard project top-secret-project
banner: "![[cosmic-dawn-initiative.png]]"
---
**[[Projects/Top Secret Project/Home|Home]]** | [[Projects/Top Secret Project/Meetings/All Meetings|Meetings]] | [[Projects/Top Secret Project/Notes/All Notes|Notes]] | [[Projects/Top Secret Project/References|References]]
# Top Secret Project
**Description**:: Cosmic Dawn Initiative is a top-secret NASA project deploying AI-guided spacecraft to study the universe's earliest moments and fundamental cosmic mysteries.
**Link**: *add link (if relevant)*


## Tasks
*[[Projects/Top Secret Project/Tasks|+ Add a task]]*
```dataviewjs 
dv.taskList(dv.pages('"Projects/Top Secret Project"').file.tasks .where(t => !t.completed))
```

## Meetings
```button
name + Add meeting
type note(Projects/Top Secret Project/Meetings/untitled meeting) template
action project/Project meeting
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"Projects/Top Secret Project/Meetings" and !#meetings').limit(10).groupBy(p => p.meeting)) {
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
*[[Projects/Top Secret Project/Meetings/All Meetings|View all meetings →]]*

## Notes
```button
name + Add note
type note(Projects/Top Secret Project/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"Projects/Top Secret Project/Notes" and !#dashboard and !#notes').limit(10).groupBy(p => p.note)) {
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
*[[Projects/Top Secret Project/Notes/All Notes|View all notes →]]*

---
**[[Projects/Top Secret Project/Home|Home]]** | [[Projects/Top Secret Project/Meetings/All Meetings|Meetings]] | [[Projects/Top Secret Project/Notes/All Notes|Notes]] | [[Projects/Top Secret Project/References|References]]