
function kullaniciAdi(){
    let isim = prompt("isminizi girin");
    document.getElementById("myName").innerText = isim;
}

kullaniciAdi();

let clock = document.getElementById("myClock");
let weekDay = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

function showTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let d = weekDay[today.getDay()] 

    clock.innerHTML = h + ":" + m + ":" + s + " " + d

setTimeout(showTime, 1000)    
}

showTime();

