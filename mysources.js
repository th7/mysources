console.log("loading mysources addon")

function save(state) {
	browser.storage.local.clear()
	browser.storage.local.set({mysources: state})
}

function normalizeText(text) {
	return text.toLowerCase().replace(/[^a-z]/g, "")
}

function setSources(state) {
	if (!state.enabled) { return }

	let normalizedStoredSources = (state.sources || []).map(normalizeText)

	let options = document.getElementById("form-field-filter-source").getElementsByTagName("option")
	for (let i = 0; i < options.length; i++) {
		let normalizedName = normalizeText(options[i].text)
		if (normalizedStoredSources.includes(normalizedName)) {
			options[i].selected = true
		}
	}
}

browser.storage.local.get().then(storage => {
	if (storage.mysources) {
		setSources(storage.mysources)
	} else {
		let initialState = {
			enabled: true,
			sources: [
				"Basic Rules",
				"Player's Handbook",
				"Dungeon Master's Guide",
				"Monster Manual"
			]
		}
		save(initialState)
		setSources(initialState)
	}
})

browser.storage.onChanged.addListener(() => { 
	browser.storage.local.get().then(storage => setSources(storage.mysources))
})
