---
banner: "![[banner-books.jpg]]"
date_created: 2023-07-08
date_modified: 2023-07-18
description: List of all books and notes.
document_type: dashboard
tags: dashboard books
---
[[Spaces/Spaces Dashboard|Spaces]] / **[[Spaces/Books/Books Dashboard|Books]]**
# Books
Collection of books and book notes.
Books read: `$= dv.pages('"Books" and !#dashboard').where(page => page.status =="read").length`
Books currently reading: `$= dv.pages('"Books" and !#dashboard').where(page => page.status =="unread").length`
Total number of books: `$= dv.pages('"Books" and !#dashboard').length`

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
[[Spaces/Spaces Dashboard|Spaces]] / **[[Spaces/Books/Books Dashboard|Books]]**