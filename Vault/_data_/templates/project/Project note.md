<%*
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];
	
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Note title");
		if(title.length == 0){
			title = `untitled note (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Note title", title);
	}
	await tp.file.rename(title);
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: note
project: <% `${fileObject.path.split("/")[1]}` %>
tags: <% `${fileObject.path.split("/")[1].toLowerCase().replaceAll(" ", "-").trim()}` %> note
<% "---" %>
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>
# <% `${fileObject.basename}` %>
**Overview**
Description:: <% tp.file.cursor(1) %>

## Note



## References


---
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>
