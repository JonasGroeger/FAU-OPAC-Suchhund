var opacUrl = "https://www.opac.uni-erlangen.de/InfoGuideClient.uersis/start.do?Login=wouer20&searchString[0]="

function searchInOpac(info, tab) {
  var selectionText = info.selectionText;
  chrome.tabs.create({
    url: opacUrl + selectionText,
  });
  console.info("Suche nach \"" + selectionText + "\"");
}

chrome.contextMenus.create({
  "title" : "Im FAU-OPAC nach \"%s\" suchen...",
  "contexts" : ["selection"],
  "onclick" : searchInOpac
});
console.info("FAU-OPAC Suchhund bereit...");