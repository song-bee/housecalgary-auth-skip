// Listen for when a URL is completely loaded
chrome.webNavigation.onCompleted.addListener(
  function(details) {
    // Show alert when the page is loaded
    chrome.tabs.sendMessage(details.tabId, {action: "closeAuth"});
  },
  // Filter for specific URLs
  {
    url: [{
      urlPrefix: "https://www.housescalgary.ca/property-search/detail"
    }]
  }
); 