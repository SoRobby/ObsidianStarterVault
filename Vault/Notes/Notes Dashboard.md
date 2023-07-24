---
banner: "![[banner-notes.jpg]]"
cssclass: cards
date_created: 2023-07-05
date_modified: 2023-07-19
description: Collection of general atomic notes.
document_type: dashboard
include_in_navbar: true
navbar_name: Notes
tags: dashboard note
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Notes Home
Collection of general atomic notes.

```button
name + Add note
type note(Notes/untitled) template
action general/Empty page
class tailwind-button-white
```

**Collection of general notes**
```dataviewjs
for (let group of dv.pages('"Notes" and !#dashboard').groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.mtime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```