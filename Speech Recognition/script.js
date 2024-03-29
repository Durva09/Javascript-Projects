var SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

function speech()
{
const recognition=new SpeechRecognition();
recognition.lang='en-US';
recognition.interimResults=true;

let words=document.querySelector('.words');
let p=document.querySelector('p');
//let p=document.createElement('p');

//words.appendChild(p);

recognition.addEventListener('result',e => {
    let transcript= Array.from(e.results)
                    .map(results => results[0])
                    .map(results => results.transcript)
                    .join('');
    p.textContent=transcript;                
    // if(e.results[0].isFinal)
    // {
    //     //p=document.createElement('p');
    //     // words.appendChild(p);
    //     // document.getElementsByName(p).value=transcript;
    // }
    
});

    recognition.start();
}    
