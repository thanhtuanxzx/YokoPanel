(() => {
  const app = window.YokoPanel;
  if (!app?.addPageInitializer) return;

  app.addPageInitializer("database", () => {
    bindDatabaseControls();
    renderDatabaseTable();
  });
})();
