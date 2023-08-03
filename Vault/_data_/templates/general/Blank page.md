<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Page title");
		if(title.length == 0){
			title = `untitled page (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Page title", title);
	}
	await tp.file.rename(title);
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let description = await tp.system.prompt("Page description (press enter to skip)");
_%>
---
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: 
tags: 
---
# <% `${title}` %>
**Overview**
Description:: <% `${description}` %>

## Section 1


## Section 2

