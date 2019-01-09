window.onmousemove = logMouseMoveXY;
let pointer = bodymovin.loadAnimation({
	container: document.getElementById('cursor'),
	renderer: 'svg',
	autoplay: false,
	loop: false,
	path: '../cursor.json',
});
function logMouseMoveXY(e) {
	e = event || window.event;
	let X =  e.pageX ;
	let Y =  e.pageY ;
	
	const width = window.innerWidth;
	const height = window.innerHeight;
	console.log(width,height);
	let curseur = document.getElementById('cursor');
	curseur.style.top = (Y-25) + 'px';
	curseur.style.left = (X-25) + 'px';
	// curseur.style.borderRadius = (((Y*100/height)/4)+((X*100/width)/4)) + '%';
	curseur.style.transform = 'rotate(' + (X*360/width) + 'deg)';
}

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

let mirin = document.getElementById("ball");
target.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     pointer.playSegments([45,55],true);
});
let mirout = document.getElementById("ball");
target.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
     pointer.playSegments([10,0],true);
});

let shoot = 0;

function scoring() 
{ 
shoot = shoot+1; 
document.getElementById('nb').innerHTML = shoot; 

} 
 