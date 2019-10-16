const init = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(init);
    console.log("popup has been loaded");
    initPopupEvent();
  }
}, 300);

function initPopupEvent() {
  const button = document.querySelector("#submit");

  if (!button) {
    return console.warn("No submit button was found");
  }
  button.addEventListener("click", saveUserToken);
}

function saveUserToken() {
  const username = document.querySelector("#username").value;
  const token = document.querySelector("#token").value;

  if (!username || !token) {
    return console.warn("username or token not found");
  }

  console.log("username =>", username);
  console.log("token =>", token);
  window.localStorage.setItem(
    "issue2Branch",
    JSON.stringify({ username, token })
  );
}

function getUserToken() {
  console.log("retrieved token =>", window.localStorage.getItem("token"));
}

function generateBasicAuthHeader(username, password) {
  const credentials = `${username}:${password}`;

  return `Basic: ${Base64.encode(credentials)}`;
}
