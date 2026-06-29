(() => {
  const app = window.YokoPanel;
  if (!app?.addPageInitializer) return;

  app.addPageInitializer("website", () => {
    bindWebsiteControls();
    renderWebsiteTable();
  });
})();
