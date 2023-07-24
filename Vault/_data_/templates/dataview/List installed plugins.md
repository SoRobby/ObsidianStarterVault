```dataviewjs
const {VaultPlugins} = customJS;
let element = this.container.createEl('nav', {cls: ["tailwind"]});
await VaultPlugins.listInstalledPlugins(app, element);
```
<% tp.file.cursor(1) %>