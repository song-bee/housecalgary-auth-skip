// Listen for messages from the background script
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "closeAuth") {
      executeClose();
    }
  }
);

function executeClose() {
  // Small delay to ensure all scripts are loaded and functions are available
  setTimeout(() => {
    try {
      closeAuth();
      console.log('closeAuth() executed successfully');
    } catch (error) {
      console.error('Error executing closeAuth():', error);
    }
  }, 3000);
}

function closeAuth() {
  // Select the div with the id 'authSigninSuccessView'
  var authSigninSuccessView = document.getElementById('authSigninSuccessView');

  // Check if the element exists
  if (authSigninSuccessView) {
    // Select the button within the div
    var closeButton = authSigninSuccessView.querySelector('.si-btn.si-btn--default.js-modal-close');

    // Check if the button exists
    if (closeButton) {
      // Trigger a click event on the button
      closeButton.click();
    } else {
      console.error("Button with class 'si-btn si-btn--default js-modal-close' not found in 'authSigninSuccessView'");
    }
  } else {
    console.error("Element with id 'authSigninSuccessView' not found");
  }
}
