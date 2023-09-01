var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
{
    console.log("tirando selfie --- ");
        speak();
}
}
function speak(){
    var synth = window.speechSynthesis;

    speakData = "tirando sua selfie em 5 segundos."

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        var imgeid = "selfie1"
        speakData = "tirando sua selfie em 5 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
        save();
        
    },5000)
    setTimeout(function()
    {
        var imgeid = "selfie2"
        speakData = "tirando sua selfie em 10 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
        save();
        
    },10000)
    setTimeout(function()
    {
        var imgeid = "selfie3"
        speakData = "tirando sua selfie em 15 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
        save();
        
    },15000)

    
}
function takeSelfie()
{
    Webcam.snap(function(data_uri){
        if( imgeid=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if( imgeid=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if( imgeid=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    }
        
        );}