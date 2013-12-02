var opacUrl = "https://www.opac.uni-erlangen.de/InfoGuideClient.uersis/start.do?Login=wouer20&searchString[0]=";
var ejournalUrl = ""; // @ToDo
var databaseUrl = ""; // @ToDo


function searchInOpac(info, tab) {
  var selectionText = info.selectionText;
  var selectedContext = info.menuItemId;
  var url;
  
  switch(selectedContext) {
      case "opac":
          url = opacUrl;
          break;
      case "ejournal":
          url = ejournalUrl;
          break;
      case "database":
          url = databaseUrl;
          break;
      default:
          url = opacUrl;
  }
  
  chrome.tabs.create({
    url: url + selectionText,
  });
  console.info("Suche nach \"" + selectionText + "\"");
}


chrome.contextMenus.create({
  "title" : "ub.fau.de suchen nach \"%s\" in ...",
  "contexts" : ["selection"],
  "onclick" : searchInOpac,
  "id": "parent"
});
console.info("FAU-OPAC Suchhund bereit...");

// Create a parent item and two children.
var child1 = chrome.contextMenus.create({
    "title" : "In FAU-OPAC nach \"%s\" suchen...",
    "contexts" : ["selection"],
    "onclick" : searchInOpac,
    "parentId" : "parent",
    "id" : "opac"
});
var child2 = chrome.contextMenus.create({
    "title" : "In FAU-E-Jorunals nach \"%s\" suchen...",
    "contexts" : ["selection"],
    "onclick" : searchInOpac,
    "parentId" : "parent",
    "id" : "ejournal"
});
var child3 = chrome.contextMenus.create({
    "title" : "In FAU-Datenbanken nach \"%s\" suchen...",
    "contexts" : ["selection"],
    "onclick" : searchInOpac,
    "parentId" : "parent",
    "id" : "database"
});

console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2 + " child3:" + child3);