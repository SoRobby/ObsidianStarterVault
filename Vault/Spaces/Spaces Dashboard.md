---
banner: "![[banner-spaces.jpg]]"
date_created: 2023-07-06
date_modified: 2023-07-18
description: Collection of other spaces
document_type: dashboard
include_in_navbar: true
navbar_name: Spaces
tags: dashboard spaces
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Spaces
```button
name + Add space
type note(Spaces/unnamed space) template
action spaces/Space home
templater true
class tailwind-button-white
```


## Dashboards
```dataviewjs
for (let group of dv.pages('"Spaces" and #dashboard and !"${dv.current().file.path}"').groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.name, 'asc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```


## Books
Collection of books and book notes.
Books read: `$= dv.pages('"Spaces/Books" and !#dashboard').where(page => page.status =="read").length`
Books currently reading: `$= dv.pages('"Spaces/Books" and !#dashboard').where(page => page.status =="unread").length`
Total number of books: `$= dv.pages('"Spaces/Books" and !#dashboard').length`

**Add a new book**
```button
name + Add book
type command
action Book Search: Create new book note
class tailwind-button-white
```

**Table of books**
```dataviewjs
for (let group of dv.pages('"Spaces/Books" and !#dashboard').groupBy(p => p.book)) {
	dv.table(["Cover", "Title", "Category", "Status"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			("![|100](" + k['cover'] + ")"),
			k.file.link, 
			k['category'],
			k['status']
			]))}
```


---

## Contacts
```button
name + Add contact
type note(Spaces/Contacts/unnamed contact) template
action general/contact
templater true
class tailwind-button-white
```

**Table of contacts**
```dataviewjs
for(let group of dv.pages('"Spaces/Contacts"').groupBy(p => p.contact)) {
	dv.table(["Name", "Email"], 
		group.rows 
			.sort(k => k.file.name, 'desc')
			.map(k => [
			k.file.link, 
			k['email'],
			]))}
```

```dataviewjs
for (let group of dv.pages('"Spaces" and !#dashboard').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length
  dv.header(headerLevel, `${group.key}`);
  dv.table(["Name", "Description", "Modified"],
  group.rows.map(k => [k.file.link, k.file['description'], k.file.mtime]))
}
```

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```