chrome.storage.sync.set({ test: "coucou" }, () => {
  console.log("test is setup from outside file");
});
