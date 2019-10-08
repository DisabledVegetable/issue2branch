chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("page content has been loaded");
      insertButtonInActionBar();
    }
  }, 10);
});

function insertButtonInActionBar() {
  const header = document.querySelector(".gh-header-actions");

  if (!header) {
    console.warn("Could not find actions header component in DOM tree");
  }
  const createBranchButton = document.createElement("button");
  createBranchButton.innerHTML = "Create branch from issue";
  createBranchButton.setAttribute(
    "class",
    "btn btn-sm btn-primary float-right create-branch"
  );

  header.appendChild(createBranchButton);

  console.log("button has been created");
}

function generateBasicAuthHeader(username, password) {
  const credentials = `${username}:${password}`;

  return `Basic: ${Base64.encode(credentials)}`;
}
