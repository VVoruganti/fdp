# FDP

This project is referencing the [Gitcoin Bounty](https://gitcoin.co/issue/29072) to make a chrome
web extension to... 

1. Recreate the FDP storage experience for a wallet of files
2. Allow a user to save a webpage as a high fidelity PDF
3. Browse and open the pdf at a later point

## User Guide

## Development Details

Essentially there will be 3 different view for the application which are described in more detail below. 

The core business/user logic will be to open the application and login, once they are logged in they can save the current
webpage they are on (sorta like [pocket](https://getpocket.com/) or access a settings page where they can browse the different
saved webpages. 

### FDP Storage

This aspect essentially acts as an authentication/authorization aspect of the application. The core logic of the 
application should be blocked until either an FDP wallet is made or the user authenticates into an existing
FDP account. The reference for the FDP-storage SDK is located at the [fdp-storage repo](https://github.com/fairDataSociety/fdp-storage)

### Saving the Webpage

The webpage is converted to a pdf using the [jsPDF](https://github.com/parallax/jsPDF) npm package. 

### Browse Content

A button will open separate page as denoted by the chrome extension [documentation](https://developer.chrome.com/docs/extensions/reference/tabs/#opening-an-extension-page-in-a-new-tab)
which will have a more detailed directory of saved data. From here the user can open a page and access the original link.
