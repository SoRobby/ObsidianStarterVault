---
banner: "![[banner-journal.jpg]]"
banner_y: 0.325
date_created: 2023-07-05
date_modified: 2023-07-18
description: List of journal entries.
document_type: dashboard
include_in_navbar: true
navbar_name: Journal
tags: dashboard journal
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Journal Entries
Explore your collection of journal entries.

```button
name + Add journal entry
type command
action Daily notes: Open today's daily note
templater true
class tailwind-button-white
```

**Table of journal entries**
```dataviewjs
for (let group of dv.pages('"Journal" and !#dashboard').groupBy(p => p.entry)) {
	dv.table(["Entry", "Significant event"], 
		group.rows 
			.sort(k => k.name, 'desc')
			.map(k => [
			k.file.link,
			k['event']
			]))}
```
`$="<small>Number of entries: " + dv.pages('"Journal/Entries"').length+"</small>"`

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```