<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Definition title");
		if(title.length == 0){
			title = `untitled definition (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Definition title", title);
	}
	await tp.file.rename(title);
	let acronym = await tp.system.prompt("Acronym (press enter to skip)");
_%>
---
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: definition
tags: definition
---
# <% `${title}` %>
**Acronym**:: <% `${acronym}` %>
**Aliases**:: <% `${acronym}` %>
**Definition**:: <% tp.file.cursor(1) %>


## Notes


## References


---