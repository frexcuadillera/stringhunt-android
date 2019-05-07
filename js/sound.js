var clickSound = new Audio('assets/sfx/click.wav');

function playSound() {
	var clip = clickSound.cloneNode();
	clip.play();
}