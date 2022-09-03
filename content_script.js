console.log("loading mysources addon")
let options = document.getElementById("form-field-filter-source").getElementsByTagName("option")
let allSources = [];
for (let i = 0; i < options.length; i++) { allSources.push(options[i].id.replace("filter-source-", "")) }
console.log("all source options:")
console.log(allSources)

browser.storage.local.get().then(storage => {
	console.log("selecting sources:")
	let storedText = (storage.mysources || "").toLowerCase()
	console.log(storedText)
	for (let i = 0; i < options.length; i++) {
		var shortId = options[i].id.replace("filter-source-", "")
		if (storedText.includes(shortId) || storedText.includes(options[i].text.toLowerCase())) {
			options[i].selected = true
		}
	}
})
