<%*
	let displayText = await tp.system.prompt("Display text");
	let link = await tp.system.prompt("Link");
_%>
<% `[${displayText}]` %><% `(${link})` %> <% tp.file.cursor(1) %>