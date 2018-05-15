window.addEventListener("DOMContentLoaded", ()=>{

	function removeTransition(e){
		if (e.propertyName !== 'transform') return // skip if its not a transform
		this.classList.remove('playing');

	}

	function playSound(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!audio) return // stop the function from running
		audio.currentTime = 0; // rewind to the start
		audio.play();
		// key.addClass('playing') // jquery variation
		key.classList.add('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition))
	
	window.addEventListener("keydown", playSound);
});
