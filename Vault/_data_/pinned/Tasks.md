---
cssclass: pinned-pages
---
**Tasks**
```dataviewjs
let tasks = dv.pages('').file.tasks
let completedTasks = dv.pages('').file.tasks.where(t => t.completed)
let incompletedTasks = dv.pages('').file.tasks.where(t => !t.completed)

let percentCompleted = (completedTasks.length/tasks.length)*100

dv.el("div", `
<progress value="${(completedTasks.length/tasks.length)*100}" max="100"></progress>
<small>${Math.round((completedTasks.length/tasks.length)*100, 0)}% completed (${incompletedTasks.length} tasks remaining)</small>
`)
```
```tasks
not done
group by folder
path does not include _data_
sort by priority
short mode
```

