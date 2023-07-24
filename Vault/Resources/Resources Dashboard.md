---
banner: "![[banner-resources.jpg]]"
banner_y: 0.4
date_created: 2023-07-06
date_modified: 2023-07-18
description: Collection of Resources.
document_type: dashboard
include_in_navbar: true
navbar_name: Resources
tags: dashboard proprietary
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Resources
Collection of Resources.
```dataviewjs
for (let group of dv.pages('"Resources" and !#dashboard').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length
  dv.header(headerLevel, `${group.key}`);
  dv.table(["Name", "Created", "Modified"],
  group.rows.map(k => [k.file.link, k.file.ctime, k.file.mtime]))
}
```

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```