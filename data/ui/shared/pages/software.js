(() => {
  const app = window.YokoPanel;
  if (!app?.addPageInitializer) return;

  app.addPageInitializer("software", () => {
    bindSoftwareControls();
    renderSoftwareList();
  });
})();
