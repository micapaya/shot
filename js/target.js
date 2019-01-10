

let BallTarget = bodymovin.loadAnimation({
	container: document.getElementById('ball'),
	renderer: 'svg',
	autoplay: false,
	loop: false,
	path: '../ball.json',
}); 
let target = document.getElementById("ball");

function addHide (){
	target.classList.add("hidde");
}

target.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     BallTarget.playSegments([80,100],true);
     setTimeout(addHide, 3000);
     
});



 