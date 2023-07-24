---
banner: "![[banner-personal-02.jpg]]"
date_created: 2023-07-06
date_modified: 2023-07-18
description: Collection of personal notes.
document_type: dashboard
include_in_navbar: true
navbar_name: Personal
tags: dashboard proprietary
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Personal
Collection of personal notes.


```dataviewjs
for (let group of dv.pages('"Proprietary" and !#dashboard').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length;
  dv.header(headerLevel, `${group.key.replace(group.key.split("/")[0], "").slice(1).replaceAll("/", " / ")}`);  
  dv.table(["Name", "Created", "Modified"],
  group.rows.map(k => [k.file.link, k.file.ctime, k.file.mtime]))
}
```
```dataviewjs
for (let group of dv.pages('"Proprietary" and !#dashboard').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length;
  dv.header(headerLevel, `${group.key.replace(group.key.split("/")[0], "").slice(1).replaceAll("/", " / ")}`);  
  dv.table(["Name", "Description"],
  group.rows.map(k => [k.file.link, k.file['description']]))
}
```

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```