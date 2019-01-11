

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
function removeHide (){
	target.classList.remove("hidde");
	target.classList.add("show");
	BallTarget.playSegments([1,20],true);
}
function spaceSound() {
	let sound2 = document.getElementById("playerSpace");
	sound2.play();
}
function sheepSound() {
    let sound = document.getElementById("playerSheep");
    sound.play();            
}

target.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     BallTarget.playSegments([60,100],true);
     setTimeout(addHide, 3000);
     setTimeout(removeHide, 5000);
     setTimeout(sheepSound, 250);
     
});




 