<h1 align="center">adBlocker</h1>

<div align="center">
  <img src="https://github.com/ksalokya/adBlocker/blob/main/misc/ad-blocker.png" width="300px"/>
</div>

## Ad Blocker extensions are most popular browser extensions found in browser's web stores. So what is an Ad Blocker extension❓
## It prevents advertisements, malwares and stops advertisers from accessing your browsing history and personal information.

#### One can block ads using two methods -

##### 1 - Modify your local hosts file by editing your /etc/hosts file and map domains you don't want (adware, malware etc.) to 0.0.0.0.
##### 2 - Create a browser extension. Add an event listener to the onBeforeRequest event (gets activated when a request is about to occur) and add a filter on the domains you want to block.

##### This repo is prototype of 2nd method mentioned above.

### Test this extension locally - 
* Download zip file.
* Extract it.
* Open Chrome and go to settings.
* Go to Extensions option and turn on developer mode.
* Click on Load unpacked and select unzipped folder.
* Enjoy!

#### Leave a star behind if this repo helped you in any way. 😄
