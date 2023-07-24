<%*
	let title = await tp.system.prompt("Course note title");
	title = title.trim();
	await tp.file.rename(title);
	
	let filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let pathArray = fileObject.path.replaceAll(`/${fileObject.name}`, "").split('/');
	home = `${pathArray[0]}/${pathArray[1]}`;
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: course-note
tags: course course-note
<% "---" %>
[[Learning/Learning Dashboard|Learning Dashboard]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>
**Overview**
Description:: 

## Note
<% tp.file.cursor(1) %>



---
[[Learning/Learning Dashboard|Learning Dashboard]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**