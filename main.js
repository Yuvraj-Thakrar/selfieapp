var SpeechRecognition=window.webkitSpeechRecognition;

recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content=="take my selfie") {
        speak();
        console.log("Taking Selfie"); 
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data= "Taking your selfie in five seconds"

    var utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
Webcam.attach(cammera);
setTimeout(
 function(){
     take_snap();
save();
 },5000);


}

Webcam.set({
    width:360,height:250,image_format:'jpeg', jpeg_quality:90
});

cammera=document.getElementById("camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img"  src="'+data_uri+'">';

        
    });
}

function save(){
    link= document.getElementById("link");
    image=document.getElementById("selfie_img").src;
link.href=image;
link.click();
}