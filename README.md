# Blogspot-TTS
A text-to-speech interface to let users 'listen' to blog posts instead of reading them. 

[Click here](https://arjunmahishi.github.io/blogspot-tts/) for demo

[Click here](http://teckguide.blogspot.com/2016/12/your-own-jarvis.html) to see it live on a blog

# Instructions to install on Blogspot
Paste the following code snippet where ever you want to see the tts control buttons

```
<button class="btnn" onclick="startSpeech()">
<i aria-hidden="true" class="fa fa-play"></i> 
</button>
<button class="btnn" onclick="pauseSpeech()">
<i aria-hidden="true" class="fa fa-pause"></i> 
</button>
<button class="btnn" onclick="stopSpeech()">
<i aria-hidden="true" class="fa fa-stop"></i>
</button> 
Listen to the post instead of reading it (if you are busy)
```

# Credits 
The ResponsiveVoice API was downloaded from [http://responsivevoice.org/](http://responsivevoice.org/). My code is just a wrapper built on top of it.
