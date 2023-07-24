<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Formula title");
		if(title.length == 0){
			title = `untitled formula (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Formula title", title);
	}
	await tp.file.rename(title);
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
_%>
---
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: formula
tags: formula 
---
[[All Formulas|All Formulas]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>

> [!summary] Description
> **Description**:: <% tp.file.cursor(1) %>

## Formula
$$my\space formula \tag{ 1 }$$
Where,
*Add description of formula variables (e.g. "g = relative gravity at specified distance.")*
$my\space var$ = My variable.

## Example



## Related



## Sources
1. 



---
[[All Formulas|All Formulas]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**