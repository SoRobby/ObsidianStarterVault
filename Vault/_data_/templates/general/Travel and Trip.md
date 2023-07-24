<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Trip title");
		if(title.length == 0){
			title = `untitled trip (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Trip title", title);
	}
	await tp.file.rename(title);
	
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);	
	let destination = await tp.system.prompt("Trip destination(s) (press enter to skip)");
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: trip
tags: travel trip
<% "---" %>
[[Trips Dashboard|Trips]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %>
**Overview**
Destination:: <% `${destination}` %>
People:: 
Start date::
End date::
Completed:: false

## Planning
<% tp.file.cursor(1) %>


## Agenda
### Day 1


### Day 2


### Day 3



---
[[Trips Dashboard|Trips]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**