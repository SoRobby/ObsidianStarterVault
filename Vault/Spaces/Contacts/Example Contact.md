
---
address: ['Home: -', 'Work: Exampler']
birthday: YYYY-MM-DD
date_created: 2023-07-21
date_modified: 2023-07-21
document_type: contact
email: ['example@mail.com']
first_name: Example
last_name: Contact
phone: ['Mobile: ']
tags: contact
---
# ![[profile-picture-placeholder.jpg | rounded-full | 64x64]] `$=dv.span(dv.current().file.frontmatter.first_name)` `$=dv.span(dv.current().file.frontmatter.last_name)`
```dataviewjs
dv.span("**✉ Email**<br/>")
for(let email of dv.current().file.frontmatter.email){dv.span(`${email}<br>`)}
```

```dataviewjs
dv.span("**📱 Phone**<br/>")
for(let phone of dv.current().file.frontmatter.phone){dv.span(`${phone}<br>`)}
```

**🌐 Websites**


## Details