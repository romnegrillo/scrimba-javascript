const saveInputButtonEl = document.getElementById("save-input-button")
const saveTabLinkButtonEl = document.getElementById("save-tab-link-button")
const clearButtonEl = document.getElementById("clear-button")
const bookmarkListEl = document.getElementById("bookmark-list")
const inputTextEl = document.getElementById("input-text")

let localStorageBookmarks = JSON.parse(window.localStorage.getItem("bookmark"))
let bookmarkList = []

if (localStorageBookmarks) {
    bookmarkList = localStorageBookmarks
    renderBookmarkList(bookmarkList)
}


saveInputButtonEl.addEventListener("click", function () {
    let inputTextValue = inputTextEl.value.trim()
    if (inputTextValue != "") {
        bookmarkList.push(inputTextEl.value)
        window.localStorage.setItem("bookmark", JSON.stringify(bookmarkList))
        renderBookmarkList(bookmarkList)
    }

    inputTextEl.focus()
})

saveTabLinkButtonEl.addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {

        let activeTab = tabs[0].url
    
        bookmarkList.push(activeTab)
        window.localStorage.setItem("bookmark", JSON.stringify(bookmarkList))
        renderBookmarkList(bookmarkList)

    });
})

clearButtonEl.addEventListener("dblclick", function () {
    bookmarkList = []
    window.localStorage.clear()

    renderBookmarkList(bookmarkList)
})

function renderBookmarkList(bookmarks) {
    let bookmarkContents = ""
    for (let i = 0; i < bookmarks.length; i++) {
        bookmarkContents += `
        <a href="${bookmarks[i]}" target="_blank">
        <li>${bookmarks[i]}</li>
        </a>
        `
    }
    bookmarkListEl.innerHTML = bookmarkContents
    inputTextEl.value = ""
}