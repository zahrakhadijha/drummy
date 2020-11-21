window.addEventListener('keydown', (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	if (!audio) return // stop the function from running
	audio.currentTime = 0 // rewinds to the start
	audio.play()
})
