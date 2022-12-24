// Kullanıcıdan isim alıyoruz
let isim=prompt("İsminizi Giriniz: ")

if(isim!=null)
{
    document.getElementById("ismim").innerHTML=isim
}
// eğer boş ise tekrar girmesini istiyoruz
else
{
    alert("Lütfen İsminizi Tekrar Giriniz!");
}
// saat ve gün için fonksiyon
function showTime() {
    const today = new Date();
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let dayName = days[today.getDay()];
    let vakit = "Gündüz";

  
    if(h <= 21 && h > 17){
        vakit = "Akşam";
    } 
    else if (h <= 17 && h > 12){
        vakit = "Öğlen";
    } 
    else if (h <= 11 && h >= 5){
        vakit = "Sabah";
    } 
    else {
        vakit = "Gece";
    }

    let time = h + ":" + m + ":" + s;
    document.querySelector("#myClock").innerHTML = `${vakit} ${h} : ${m} : ${s} ${dayName}`
    
}
setInterval(showTime, 1000);
showTime();

