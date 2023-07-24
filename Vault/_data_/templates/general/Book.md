<%*
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let description = `{{description}}`;
	description = description.replaceAll(":", " -").replaceAll('"', "'").replaceAll("  ", " ");
_%>
---
author: {{author}}
description: "<% `${description}` %>"
category: {{category}}
cover: {{coverUrl}}
date_created: {{DATE:YYYY-MM-DD}}
date_modified: {{DATE:YYYY-MM-DD}}
date_published: {{publishDate}}
document_type: book
isbn10: {{ISBN10}}
isbn13: {{ISBN13}}
page_count: {{totalPage}}
publisher: {{publisher}}
status: unread
tag: book
title: "{{title}}"
---
[[<% `${fileObject.parent.path}/Books Dashboard` %>|Books]] / **[[<% `${filePath.slice(0,-3)}` %>|<% `${fileObject.basename}` %>]]**

![cover | 150]({{coverUrl}})
# {{title}}

## Chapter 01 - <chapter_name><% tp.file.cursor(1) %>


---
[[<% `${fileObject.parent.path}/Books Dashboard` %>|Books]] / **[[<% `${filePath.slice(0,-3)}` %>|<% `${fileObject.basename}` %>]]**