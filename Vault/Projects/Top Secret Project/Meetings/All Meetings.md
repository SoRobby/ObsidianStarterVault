---
date_created: 2023-07-23
date_modified: 2023-07-23
document_type: meetings
project: Top Secret Project
description: List of project meetings.
tags: top-secret-project meetings
---
[[Projects/Top Secret Project/Home|Home]] | **[[Projects/Top Secret Project/Meetings/All Meetings|Meetings]]** | [[Projects/Top Secret Project/Notes/All Notes|Notes]] | [[Projects/Top Secret Project/References|References]]
# Meetings
**Create meeting**
```button
name + Add meeting
type note(Projects/Top Secret Project/Meetings/untitled meeting) template
action project/Project meeting
templater true
class tailwind-button-white
```
```dataviewjs
for (let group of dv.pages('"Projects/Top Secret Project/Meetings" and !#meetings').groupBy(p => p.meeting)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```

---
[[Projects/Top Secret Project/Home|Home]] | **[[Projects/Top Secret Project/Meetings/All Meetings|Meetings]]** | [[Projects/Top Secret Project/Notes/All Notes|Notes]] | [[Projects/Top Secret Project/References|References]]