let video = document.querySelector('#videoplayer video');
let playerframe = document.querySelector('#videoplayer');
let playerbutton = document.querySelector('#videoplayer #playbutton');
playerframe.addEventListener('click', () => {
	if (video.paused) {
		console.log('clckon')
		video.play();
		playerbutton.style.opacity = '0';
		video.style.opacity = '1';
	} else {
		console.log('clckoff')
		video.pause();
		playerbutton.style.opacity = '1';
		video.style.opacity = '0.5';
	}
});
