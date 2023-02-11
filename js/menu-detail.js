const btn = document.getElementById('keranjang')

// btn.addEventListener('click', keranjang)

btn.onclick = function keranjang(){
    document.querySelector(".notiff").classList.add("notif-aktif")
    console.log("hi")
}

// function keranjang(){
//     // document.getElementById("alerts").classList.add("ada")
//     console.log("hi")
// }