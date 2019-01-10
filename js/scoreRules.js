let shoot = 0;

function scoring() { 
shoot = shoot+1; 
document.getElementById('nb').innerHTML = shoot; 
} 

let score = bodymovin.loadAnimation({
	container: document.getElementById('item'),
	renderer: 'svg',
	autoplay: false,
	loop: false,
	path: '../scorePlus1.json',
});

function playingscore () {
	score.playSegments([58,80], true);

}

