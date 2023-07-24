class VaultPlugins {
    listInstalledPlugins(app, navbar) {
        // Get all plugins
        let plugins = app.plugins.plugins;
        let pluginKeys = Object.keys(plugins);
        for(let pluginKey of pluginKeys){
            navbar.appendChild(createEl("div", {
                text: plugins[pluginKey]['manifest']['name']
            }));
        }

        return 0

    }
}