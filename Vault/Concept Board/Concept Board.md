---
banner: "![[banner-concept-board.jpg]]"
cssclass: cards
date_created: 2023-07-05
date_modified: 2023-07-18
description: List of all concepts and ideas.
document_type: dashboard
include_in_navbar: true
navbar_name: Concept Board
tags: dashboard concept-board
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Concept Board
Collection of short concepts and ideas, once a concept has been further developed it can be migrated into a project.

```button
name + Add concept
type note(Concept Board/Concepts/untitled) template
action general/Empty page
templater true
class tailwind-button-white
```


## Concepts
```dataviewjs
if(dv.pages('"Concept Board/Concepts"').length > 0){
	for(let group of dv.pages('"Concept Board/Concepts"').groupBy(p => p.concepts)) {
		dv.table(["Name", "Description"], 
			group.rows 
				.sort(k => k.file.ctime, 'desc')
				.map(k => [
				k.file.link,
				k['description']
				]))
	}
} else {
	dv.el('div', 'No concepts')
}
```
`$="<small>Number of concepts: " + dv.pages('"Concept Board/Concepts" and !#dashboard').length+"</small>"`


**Table of concept drawings**
```dataviewjs
if(dv.pages('"Concept Board/Drawings"').length > 0){
	for(let group of dv.pages('"Concept Board/Drawings"').groupBy(p => p.concepts)) {
		dv.table(["Concept drawings", ""], 
			group.rows 
				.sort(k => k.file.ctime, 'desc')
				.map(k => [
				k.file.link,
				`![[${k.file.path} | 100]]`,
				`<small>[[${k.file.path}|View →]]</small>`
				]))
	}
} else {
	dv.el('div', 'No concept drawings')
}
```
`$="<small>Number of concept drawings: " + dv.pages('"Concept Board/Drawings" and !#dashboard').length+"</small>"`

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```