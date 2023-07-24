---
banner: "![[banner-dashboard.jpg]]"
date_created: 2023-07-05
date_modified: 2023-07-19
description: Section for other folders.
document_type: dashboard
include_in_navbar: true
navbar_name: Dashboard
tags: dashboard
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Dashboard
>[!multi-column]
>>[!blank-container]
>>## 🏠  Navigation
>>[[Concept Board/Concept Board|💡  Concept Board →]]
>>[[Journal/Journal Dashboard|📘 Journal →]]
>>[[Learning/Learning Dashboard|🎓  Learning →]]
>>[[Notes Dashboard|🗒️  Notes →]]
>>[[Projects/Projects|📐  Projects →]]
>>[[Personal Dashboard|🔒  Personal →]]
>>[[Resources/Resources Dashboard|ℹ️  Resources →]]
>>[[Spaces/Spaces Dashboard|📦  Spaces →]]
>
>>[!blank-container]
>>## 📐  Projects (`$=dv.pages('"Projects" and #project').length`)
>>```dataviewjs
>>let projectList = [];
>>let projects = dv.pages('"Projects" and #dashboard and !#projects');
>>projects = projects.filter(obj => obj.is_active === true);
>>for(let i=0; i<projects.length; i++){
>>	projectList.push(`[[${projects[i].file.path}|${projects[i].file.path.split('/')[projects[i].file.path.split('/').length-2]} →]]`)
>>}
>>dv.list(projectList)
>>```
---
>[!multi-column]
>>[!blank-container]
>>### 🚀 Upcoming Launches
>>```dataviewjs
>>const {UpcomingRocketLaunches} = customJS;
>>let element = this.container.createEl('div', {cls: ["tailwind"]});
>>await UpcomingRocketLaunches.getUpcomingRocketLaunches(element);
>>```
>
>>[!blank-container]
>>### &emsp;🛰️Space Image of the Day
>>```dataviewjs
>>const {NASAImageOfTheDay} = customJS;
>>let element = this.container.createEl('div', {cls: ["tailwind"]});
>>let apiKey = "PSrdswa5IKTJeSc007kTh8Vg6Y4A8mrxyIIHTeGp";
>>await NASAImageOfTheDay.getImage(element, apiKey);
>>```

---
### ✏️  Recently Changed
```dataviewjs
function converteTime(time){
	// Convert from ms to minutes
	let convertedTime = ""
	time = time/60000; // time in minutes

	if(time < 60){
		convertedTime = `${Math.ceil(time)} minutes ago`;
	} else if (time < 1440){
		convertedTime = `${Math.ceil(time/60)} hours ago`
	} else {
		convertedTime = `${Math.ceil(time/1440)} days ago`
	}	
	return convertedTime
}

for (let group of dv.pages('!"_data_"').sort(k => k.file.mtime, 'desc').limit(10).groupBy(p => p.page)) {
	dv.table(["Name", "Date Modified", ""], 
		group.rows
			.sort(k => k.file.mtime, 'desc')
			.map(k => [
			k.file.link, 
			converteTime(Date.now()-k.file.mtime),
			`<small>[[${k.file.path}|View →]]</small>`
			]))}
```

**Stats**
Number of files: `$=dv.pages('!"_data_"').length`
Number of notes: `$=dv.pages('"Notes" and !#dashboard').length`
Number of concepts: `$=dv.pages('"Concept Board" and !#dashboard').length`

---

### 📰 Recent News
```dataviewjs
const {News} = customJS;
let element = this.container.createEl('div', {cls: ["tailwind"]});
let newsCategory = 'stocks';
let articleCount = '6';
let apiKey = 'a0f6f4cac40ace9b1049508dda594414';
await News.listNews(element, newsCategory, articleCount, apiKey);
```
---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```