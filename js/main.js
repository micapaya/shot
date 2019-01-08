window.onmousemove = logMouseMoveXY;

function logMouseMoveXY(e) {
	e = event || window.event;
	let X =  e.pageX ;
	let Y =  e.pageY ;
	const width = window.innerWidth;
	const height = window.innerHeight;
	let curseur = document.getElementById('cursor');
	curseur.style.top = (Y-25) + 'px';
	curseur.style.left = (X-25) + 'px';
	curseur.style.borderRadius = (((Y*100/height)/4)+((X*100/width)/4)) + '%';
}
let pointer = bodymovin.loadAnimation({
	container: document.getElementById('cursor'),
	renderer: 'svg',
	autoplay: true,
	loop: true,
	path: '../cursor.json',
});
let BallTarget = bodymovin.loadAnimation({
	container: document.getElementById('ball'),
	renderer: 'svg',
	autoplay: false,
	loop: false,
	path: '../ball.json',
}); 
let target = document.getElementById("ball");
target.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     BallTarget.playSegments([45,55],true);
});


 