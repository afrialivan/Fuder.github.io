const catering = document.getElementById('catering')
const menu = document.getElementById('menu')
const keranjang = document.getElementById('keranjang')
const pesanan = document.getElementById('pesanan')
const bgnav = document.getElementById('bg-nav')

function keluar() {
  bgnav.style.top="-23px"

}

menu.onmouseleave = keluar
menu.onmouseover = () => {
  bgnav.style.top="60px"
}


