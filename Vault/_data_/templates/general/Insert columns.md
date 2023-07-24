<%*
	let columnCount = await tp.system.suggester([1, 2, 3, 4], [1, 2, 3, 4], false, "Select the number of columns");
	
	let output = "> [!multi-column]\n";
	for (let i=1; i <= columnCount; i++) {
	    output += "> Column " + i + "\n>\n";
	}
_%>
<% `${output}` %><% tp.file.cursor(1) %>