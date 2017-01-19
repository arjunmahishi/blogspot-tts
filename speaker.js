var controlTracker = 0;

function startSpeech(){
	if (controlTracker == 0){
		text = $(".main-content-body").text();
		lang = $(".langSelector").val();
		responsiveVoice.speak(text, lang);
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
