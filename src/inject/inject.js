const readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    console.log("page content has been loaded");
    insertButtonInActionBar();
  }
}, 10);

function insertButtonInActionBar() {
  const header = document.querySelector(".gh-header-actions");

  if (!header) {
    console.warn("Could not find actions header component in DOM tree");
  }

  const buttonTpl = `
    <div class="i2b-button-container float-right inactive">
      <span class="i2b-popover">Add your username and token so you can create a branch from issue ! </span>
      <button class="btn-sm create-branch">Create branch from issue</button>
    </div>
  `;
  const createBranchButton = document.createElement("template");
  createBranchButton.innerHTML = buttonTpl.trim();

  header.appendChild(createBranchButton.content.firstChild);
  console.log("button has been created");
}
