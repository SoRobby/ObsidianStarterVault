<%*
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
	
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let description = await tp.system.prompt("Note description (press enter to skip)");
	let tagsCleaned = "note";
	let tags = await tp.system.prompt("Note tags (separate with comma, press enter to skip)");
	tags = tags.split(",");
	for(let i=0; i<tags.length; i++){
		tagsCleaned += ` ${tags[i].toLowerCase().trim().replaceAll(" ", "-")}`;
	}
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: note
tags: <% `${tagsCleaned}` %>
<% "---" %>
[[Notes Dashboard|Notes Dashboard]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>
**Overview**
Description:: <% `${description}` %>

## Note
<% tp.file.cursor(1) %>


---
[[Notes Dashboard|Notes Dashboard]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**