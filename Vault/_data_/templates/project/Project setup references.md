<%*
	let title = "References";
	await tp.file.rename(title);
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];	
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: references
project: <% `${fileObject.path.split("/")[1]}` %>
description: List of project references and resources.
tags: <% `${fileObject.path.split("/")[1].toLowerCase().replaceAll(" ", "-").trim()}` %> references
<% "---" %>
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `**[[${fileProjectRoot}/References|References]]**` %>
# References
*Add project related references and resources*

---
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `**[[${fileProjectRoot}/References|References]]**` %>