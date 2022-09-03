/**
	@type {HTMLTextAreaElement}
*/
let textarea = document.getElementById("textarea")
let saveButton =document.getElementById("save-button")

browser.storage.local.get().then(storage => {
	textarea.value = storage.mysources || ""
})

saveButton.addEventListener("click", () => {
	browser.storage.local.set({mysources: textarea.value})
})