let h,m,s,session="A.M.";

function showTime()
{
    let date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();

    if(h==0)
    {
        h=12;
    }
    if(h>12)
    {
        h-=12;
        session="P.M.";
    }
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    let time=h+":"+m+":"+s+" "+session;
    document.getElementById('MyClock').innerHTML=time;
    document.getElementById('MyClock').textContent=time;
    setTimeout(showTime, 1000);
}

showTime();