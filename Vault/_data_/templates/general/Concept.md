<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Concept title");
		if(title.length == 0){
			title = `untitled concept (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Concept title", title);
	}
	await tp.file.rename(title);
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let description = await tp.system.prompt("Concept description (press enter to skip)");
_%>
---
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: concept
tags: concept 
---
[[Concept Board/Concept Board|Concept Board]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>
**Overview**
Concept type:: <% tp.file.cursor(1) %>
Description:: <% `${description}` %>

## Concept


## Research


## Planning


## Prototyping


## Implementation


## References


---
[[Concept Board/Concept Board|Concept Board]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**