const music = document.getElementById("backgroundMusic");
let musicEnabled = false;

window.addEventListener('load', function(){
	music.play().then(() =>{
		music.muted = false;
	}).catch(error => {
		console.log("auto play prevented by browser");
	});
});

function enableMusic(){
	if(!musicEnabled){
		music.muted = false;
	music.play();
	musicEnabled = true;
	document.querySelector(".audio-control button").innerHTML = '<i class="fa fa-volume-up"></i> Disable Music';
	}
	else{
		music.muted = true;
		musicEnabled = false;
		document.querySelector(".audio-control button").innerHTML = '<i class="fa fa-music"></i> Enable Music';
	}
}