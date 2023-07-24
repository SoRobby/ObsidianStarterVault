<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Feature title");
		if(title.length == 0){
			title = `untitled feature (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Feature title", title);
	}
	await tp.file.rename(title);
	
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let fileProjectRoot = fileObject.path.split("/")[0] + "/" + fileObject.path.split("/")[1];
	let description = await tp.system.prompt("Description");
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: feature
project: <% `${fileObject.path.split("/")[1]}` %>
status: not started
tags: <% `${fileObject.path.split("/")[1].toLowerCase().replaceAll(" ", "-").trim()}` %> feature
<% "---" %>
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>
# <% `${fileObject.basename}` %>
## Overview
Description:: <% `${description}` %>
<% tp.file.cursor(1) %>

## Rationale
*What is the purpose of this feature?*
*What improvements / benfits does this feature have?*


## Business Model
*What is this features business model?*
*How does this feature improve the platform*


## Research
*Research associated with this feature*


## Requirements
*What requirements does this feature have?*


## Architecture
*What does the software architecture look like?*


## Design
*What does the UI look like and how do the different parts function?*


## Results
*Show an image of the completed feature(s)*


## References
*List of references (could be other products, concepts, ui designs, information, etc...)*


---
<% `[[${fileProjectRoot}/Home|Home]]` %> | <% `[[${fileProjectRoot}/Meetings/All Meetings|Meetings]]` %> | <% `[[${fileProjectRoot}/Notes/All Notes|Notes]]` %> | <% `[[${fileProjectRoot}/References|References]]` %>