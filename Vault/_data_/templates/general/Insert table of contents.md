<%*
	let startingLevel = await tp.system.suggester([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], false, "Select the table of contents starting level");
_%>
```dataviewjs
//dv.view("toc", {"startingLevel": <% `${startingLevel}` %>, "addHeader": true})
```
<% tp.file.cursor(1) %>