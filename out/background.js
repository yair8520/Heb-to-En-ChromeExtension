chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});
chrome.contextMenus.create({
    title: "My Extension",
    contexts: ["selection"],
    onclick: function (info, tab) {
        var selectedText = info.selectionText;
        console.log(selectedText);
    },
});
//# sourceMappingURL=background.js.map