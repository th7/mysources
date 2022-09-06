let enabled = document.getElementById("my-sources-enabled")
let text = document.getElementById("my-sources-text")

function save(state) {
	browser.storage.local.clear()
	browser.storage.local.set({mysources: state})
}

function readUI() {
	return {enabled: enabled.checked, sources: text.value.split(/\n+/) }
}

function writeUI(state) {
	enabled.checked = state.enabled
	text.value = state.sources.join("\n")
}

browser.storage.local.get().then(storage => {
	if (storage.mysources) {
		writeUI(storage.mysources) 
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
		writeUI(initialState)
	}
})

text.addEventListener("input", () => { save(readUI()) })
enabled.addEventListener("change", () => { save(readUI()) })
