The navigation bar will display any page with the tag of #dashboard with the meta property of `include_in_navbar=true`. 

```dataviewjs

let navbar = [];
let loadingMessage = dv.el("span", "**Loading navigation...**", {attr: {style: "font-size:13px; color:gray"}});

let allPages = dv.pages("#dashboard").sort(page => page.file.folder, "asc");
let filteredPages = allPages.filter(p => 
    p.file.tags.values.includes("#dashboard") && p?.include_in_navbar == true
);

for(let page of filteredPages){
    let navItem = '';
    let navName = 'Untitled';
    let navLink = '';

    if(page.navbar_name === undefined){
        navName = page.file.name;
    } else {
        navName = page.navbar_name;
    }
    navLink = page.file.path;

    // Format the nav  item link
    if(dv.current().file.path === page.file.path){
        navItem = `**[[${navLink}|${navName}]]**`
    } else {
        navItem = `[[${navLink}|${navName}]]`
    }

    navbar.push(navItem)
}

dv.paragraph(navbar.join(' | '))

if(filteredPages.values.length > 0){
    loadingMessage.remove();
}

```