<%*
firstName  = await tp.system.prompt("First name")
lastName = await tp.system.prompt("Last name")
email = await tp.system.prompt("Email address")
phone_number = await tp.system.prompt("Phone number (press enter to skip)")
company_name = await tp.system.prompt("Company name (press enter to skip)")

// Rename file
if(firstName.length != 0 || lastName.length != 0){
	await tp.file.rename(`${firstName} ${lastName}`)
} else {
	await tp.file.rename('untitled contact')
}
%>
---
address: ['Home: -', 'Work: <% `${company_name}` %>']
birthday: YYYY-MM-DD
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: contact
email: ['<% `${email}` %>']
first_name: <% `${firstName}` %>
last_name: <% `${lastName}` %>
phone: ['Mobile: <% `${phone_number}` %>']
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