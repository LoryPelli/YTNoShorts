let shorts_url = "https://www.youtube.com/shorts/"
let videos_url = "https://www.youtube.com/watch"
browser.action.onClicked.addListener( () => {
    browser.tabs.query({active: true, currentWindow: true})
    .then(tabs => {
        let tab = tabs[0]
        if (tab.url.startsWith(shorts_url)) {
            let url = tab.url.split("/")
            let short_url = url[4]
            browser.tabs.update({url: `${videos_url}?v=${short_url}`})
        }
    })
})