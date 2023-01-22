let shorts_url = "https://www.youtube.com/shorts/"
let videos_url = "https://www.youtube.com/watch"
chrome.action.onClicked.addListener( () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let tab = tabs[0]
        if (tab.url.startsWith(shorts_url)) {
            let url = tab.url.split("/")
            let short_url = url[4]
            chrome.tabs.update({url: `${videos_url}?v=${short_url}`})
        }
    })
})