const defaultFilters = [
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*"
    
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true } },
    { urls: defaultFilters },
    ["blocking"]
);