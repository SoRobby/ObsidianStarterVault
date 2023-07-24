<%*
	let filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	
	let numberOfFiles = String(fileObject.parent.children.length);
	let numberOfFilesPadded = numberOfFiles.padStart(2, '0');
	let title = await tp.system.prompt("Assignment title", `${numberOfFilesPadded} - `);
	title = title.trim();
	await tp.file.rename(title);

	filePath = tp.file.path(true);
	fileObject = this.app.vault.getAbstractFileByPath(filePath);
	pathArray = fileObject.path.replaceAll(`/${fileObject.name}`, "").split('/');
	home = `${pathArray[0]}/${pathArray[1]}`;
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: assignment
tags: course assignment task
<% "---" %>
[[Learning/Learning Dashboard|Learning Dashboard]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>
**Overview**
Completed:: false
Description:: <% tp.file.cursor(1) %>

## Assignment





---
[[Learning/Learning Dashboard|Learning Dashboard]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**

