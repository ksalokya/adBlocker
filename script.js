//addFilters is an array of domains which you want to block
//these are add service providers
const addFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.wizhumpgyros.com/*",
	"*://*.coccyxwickimp.com/*",
	"*://*.n2019cov.000webhostapp.com/*",
	"*://*.webmail-who-int.000webhostapp.com/*",
	"*://*.010sec.com/*"
]

/*
 # chrome.webRequest is an API to observe and analyze traffic and to intercept, block, or modify requests
 # onBeforeRequest gets activated when a request is about to occur.
 # addListner is used to register an event listener for a web request
 # Link - developer.chrome.com/docs/extensions/reference/webRequest/
*/

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: addFilters},
    ["blocking"]
)
