<%*
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: journal
tags: journal journal-entry
<% "---" %>
[[Journal/Journal Dashboard|Journal]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
<% `# ${fileObject.basename}` %>

> [!important] Significant Event
> Event:: 

## Entry
<% tp.file.cursor(1) %>

---
[[Journal/Journal Dashboard|Journal]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**