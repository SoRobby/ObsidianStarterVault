<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Constant title");
		if(title.length == 0){
			title = `untitled constant (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Constant title", title);
	}
	await tp.file.rename(title);
_%>
---
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: constant
tags: constant 
---
# <% `${title}` %>

> [!summary] Description
> **Description**:: <% tp.file.cursor(1) %>

## Definition
$$my\space constant \tag{ 1 }$$


## Sources
1. 


---