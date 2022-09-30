 //실시간 디지털 시계
 function startTime(){
    let today1 = new Date();
    let h = today1.getHours();
    let m = today1.getMinutes();
    let s = today1.getSeconds();

    h = checkNum(h);
    m = checkNum(m);
    s = checkNum(s);
    document.getElementById('clock').innerHTML=h+':'+m+':'+s;
    let t =setTimeout(startTime,500);//0.5초 마다 startTime 함수를 호출한다.
}
function checkNum(i){
    if(i< 10){
        i='0'+i;
    }
    return i;//조건문을 종료하고 변수 i값을 위startTime함수에 넘겨준다.
}

//함수실행하기
startTime();