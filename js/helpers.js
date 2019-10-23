function saveUserToken() {
  const username = document.querySelector("#i2b-username").value;
  const token = document.querySelector("#i2b-token").value;

  if (!username || !token) {
    return console.warn("username or token not found");
  }

  chrome.storage.local.set({
    i2b_token: generateBasicAuthHeader(username, token)
  });
}

function getUserToken() {
  console.log("retrieved token =>", window.localStorage.getItem("token"));
}

function generateBasicAuthHeader(username, password) {
  const credentials = `${username}:${password}`;
  // Base64 encode string
  return `Basic: ${btoa(unescape(encodeURIComponent(credentials)))}`;
}
