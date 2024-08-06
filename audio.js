let speech = new webkitSpeechRecognition()
let audio = new Audio
let elTitle = document.querySelector(".title")
speech.lang = "UZ-uz"

speech.onresult = function(e){
    let result = e.results[0][0].transcript
    elTitle.textContent = result
    if(result == "tugadi"){
        audio.src = "./mp3/dicratetby.ogg"
        audio.play()
    }
    else if(result == "kimsiz"){
        audio.src = "./mp3/pasport.ogg"
        audio.play()
    }
    else if(result == "salomat"){
        audio.src = "./mp3/salomaleykum.ogg"
        audio.play()
    }
    else if(result == "pul"){
        audio.src = "./mp3/pul.ogg"
        audio.play()
    }
}


function handleClickBtn(){
    speech.start()
}