//captcha Generator

function captchaGenerator()
{
    let cap=new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                      '0','1','2','3','4','5','6','7','8','9');

    let i=0;
    let a =cap[Math.floor(Math.random() * cap.length)];
    let b =cap[Math.floor(Math.random() * cap.length)];
    let c =cap[Math.floor(Math.random() * cap.length)];
    let d =cap[Math.floor(Math.random() * cap.length)];
    let e =cap[Math.floor(Math.random() * cap.length)];

    let result= a +" "+ b +" "+ c +" "+ d +" "+e;
    document.getElementById("captcha").value = result;
}

//checks Captcha

function isValid()
{
    let given = removeSpace(document.getElementById('captcha').value);
    let user = removeSpace(document.getElementById("userCaptcha").value);

    if(given==user)
    {
        alert("true");
    }
    else
    {
        alert("false");
    }
}


//remove Extra Spaces

function removeSpace(s)
{
    return s.split(" ").join('');
}