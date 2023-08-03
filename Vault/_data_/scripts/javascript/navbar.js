class Navbar {
    createNavbar(app, dv) {
		let nav = [];
		let navItem;

		let pages = dv.pages('#dashboard').sort(page => page.file.folder, "asc");

		for(let page of pages){
			navItem = '';
			
			if(page.file.frontmatter['include_in_navbar']){
				if(dv.current().file.path === page.file.path){
					if(page.file.frontmatter['navbar_name'] === undefined){
						navItem = `**[[${page.file.link.path}|${page.file.name}]]**`;
					} else {
						navItem = `**[[${page.file.link.path}|${page.file.frontmatter['navbar_name']}]]**`;
					}
				} else {
					navItem = `[[${page.file.link.path}|${page.file.frontmatter['navbar_name']}]]`;
				}
				nav.push(navItem);
			}	
		}

		return dv.paragraph(nav.join(' | '))

    }
}