const readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    insertButtonInActionBar();
    initPopover();
  }
}, 10);

function insertButtonInActionBar() {
  const header = document.querySelector(".gh-header-actions");

  if (!header) {
    console.warn("Could not find actions header component in DOM tree");
  }

  const createBranchButton = document.createElement("template");
  createBranchButton.innerHTML = button.trim();
  header.appendChild(createBranchButton.content.firstChild);
}

function initPopover() {
  // Attach event listener to popup submit button
  const submitButton = document.querySelector("#i2b-submit");
  if (!submitButton) {
    console.warn("Could not find #i2b-submit component in DOM tree");
  }
  submitButton.addEventListener("click", saveUserToken);
}

chrome.storage.onChanged.addListener(e => {
  enableCreateIssueButton();
});

// Update button and popover style
function enableCreateIssueButton() {
  const i2bButton = document.querySelector(".i2b-create-branch");
  const i2bPopup = document.querySelector(".i2b-form-container");
  i2bButton.classList.remove("i2b-inactive");
  i2bButton.classList.add("i2b-active");
  i2bPopup.classList.add("i2b-hide");

  const activeCreateBranchButton = document.querySelector(".i2b-active");

  activeCreateBranchButton.addEventListener("click", createBranchFromIssue);
}

function createBranchFromIssue() {
  console.log("should create branch from issue here ");

  // Get window location and parse the url on "/" to get the username, repo name and issue ID
  // Then craft API call to create the issue
  // Should lock the button after the branch has been created
  // Maybe we should check on the repo if the branch already exist (to avoid displaying the button)
  // const reposUrl = window.location;
}
