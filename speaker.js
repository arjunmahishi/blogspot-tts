var controlTracker = 0;

function startSpeech(){
	if (controlTracker == 0){
		text = $(".main-content-body").text();
		responsiveVoice.speak(text);
		controlTracker ++;
	}
	else{
		responsiveVoice.resume();
	}
}

function pauseSpeech(){
	responsiveVoice.pause();
}

function stopSpeech(){
	responsiveVoice.cancel();
	controlTracker = 0;
}

const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");
const pauseButton = document.getElementById("pause");

speakButton.addEventListener("click", startSpeech);
pauseButton.addEventListener("click", pauseSpeech);
stopButton.addEventListener("click", stopSpeech);
