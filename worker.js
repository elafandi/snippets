const delay = ms => new Promise(res => setTimeout(res, ms));

// addEventListener is directly accessible in worker file
addEventListener("message", event => {
  erasePost(event)
})

async function erasePost(j) {
    let posts = win1.document.getElementsByClassName("post")
    let vanilla_link = posts[j].getElementsByClassName("arrow-right")[0].href
    let new_link = "https://pcpuzzle.com/forum/posting.php?mode=edit&" + vanilla_link.substring(41)
    win2 = window.open(new_link)
    await delay(10000)
    win2.document.getElementById("message").textContent = "‎";
    win2.document.getElementsByName("post")[0].click()
    await delay(10000)
    win2.close()
}