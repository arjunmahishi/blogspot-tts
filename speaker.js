function startSpeech(){
	console.log("IN!");
	text = $(".main-content-body").text();
	responsiveVoice.speak(text);
}

function stopSpeech(){
	responsiveVoice.cancel();
}

const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");

speakButton.addEventListener("click", startSpeech);
stopButton.addEventListener("click", stopSpeech);
