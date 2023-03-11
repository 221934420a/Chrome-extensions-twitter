//background.js
let contextMenuOption1 = {
  "type": "normal",
  "id": "twitter_id",
  "title": "Twitter 用戶@%s",
  "contexts": ["selection"]
};

let contextMenuOption2 = {
  "type": "normal",
  "id": "twitter_search",
  "title": "Twitter 搜尋: %s",
  "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuOption1);
chrome.contextMenus.create(contextMenuOption2);

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "twitter_id") {
    let selectionTxt = info.selectionText;
    let twitterIdUrl = `https://twitter.com/${selectionTxt}`
    chrome.tabs.create({ url: twitterIdUrl });
  }
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "twitter_search") {
    let selectionTxt = info.selectionText;
    let twitterSearchUrl = `https://twitter.com/search?q=${selectionTxt}`
    chrome.tabs.create({ url: twitterSearchUrl });
  }
});