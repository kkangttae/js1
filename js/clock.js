const clock = document.querySelector("#clock");//html 호출

function getClock() {
    const date = new Date(); //현재시간 호출
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0"); //문자로 변경후 칸 채우기
    clock.innerText = `${hours}:${minutes}:${seconds}`; // 호출한 현재시간 출력
}

setInterval(getClock ,1000);  // getclock을 1초마다 실행