window.onmousemove = logMouseMoveXY;
let pointer = bodymovin.loadAnimation({
	container: document.getElementById('cursor'),
	renderer: 'svg',
	autoplay: false,
	loop: true,
	path: '../cursor.json',
});
function logMouseMoveXY(e) {
	e = event || window.event;
	let X =  e.pageX ;
	let Y =  e.pageY ;
	
	const width = window.innerWidth;
	const height = window.innerHeight;
	let curseur = document.getElementById('cursor');
	curseur.style.left = (X-25) + 'px';
	// curseur.style.borderRadius = (((Y*100/height)/4)+((X*100/width)/4)) + '%';
	// curseur.style.transform = 'rotate(' + (X*360/width) + 'deg)';
}


function afterClick (){
	pointer.playSegments([1,10],true);
}

let mirin = document.getElementById("ball");
target.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     pointer.goToAndStop(60, true);
      setTimeout(afterClick, 500);
});
let mirout = document.getElementById("ball");
target.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
     pointer.playSegments([60,45],true);
      setTimeout(afterClick, 500);
});

let mirclic = document.getElementById("ball");

target.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     pointer.playSegments([80,100],true);
     setTimeout(afterClick, 500);
});

