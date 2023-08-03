---
banner: ""
date_created: 2023-07-08
date_modified: 2023-07-17
description: List of all travel and trips.
document_type: dashboard
tags: dashboard travel trips
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Trips
List of all travel and trips.

```button
name + Add trip
type note(Spaces/Trips/untitled trip) template
action general/Travel and trip
templater true
class tailwind-button-white
```


## Planned Trips
```dataviewjs
let currentPath = dv.current().file.folder + "/Entries";

if(dv.pages(`"${currentPath}"`).length > 0){
    for(let group of dv.pages(`"${currentPath}"`).groupBy(p => p.concepts)) {
        let filteredRows = group.rows.filter(k => k['completed'] === false);
        if (filteredRows.length > 0) {
            dv.table(["Name", "Destination"], 
                filteredRows
                    .sort(k => k.file.ctime, 'desc')
                    .map(k => [
                    k.file.link,
                    k['destination']
                    ]));
        } else {
            dv.paragraph('*No planned trips*')
        }
    }
} else {
    dv.paragraph('*No planned trips*')
}
```


## Completed Trips
```dataviewjs
let currentPath = dv.current().file.folder + "/Entries";

if(dv.pages(`"${currentPath}"`).length > 0){
    for(let group of dv.pages(`"${currentPath}"`).groupBy(p => p.concepts)) {
        let filteredRows = group.rows.filter(k => k['completed'] === true);
        if (filteredRows.length > 0) {
            dv.table(["Name", "Destination"], 
                filteredRows
                    .sort(k => k.file.ctime, 'desc')
                    .map(k => [
                    k.file.link,
                    k['destination']
                    ]));
        } else {
            dv.paragraph('*No completed trips*')
        }
    }
} else {
    dv.paragraph('*No completed trips*')
}
```


---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```