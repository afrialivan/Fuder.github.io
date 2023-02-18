const catering = document.getElementById('catering')
const cateringText = document.querySelector('#catering h3')
const cateringImg = document.querySelector('#catering img')
const menu = document.getElementById('menu')
const menuText = document.querySelector('#menu h3')
const menuImg = document.querySelector('#menu img')
const keranjang = document.getElementById('keranjang')
const pesanan = document.getElementById('pesanan')
const bgnav = document.getElementById('bg-nav')

var tinggi = window.innerHeight / 12

function keluar() {
  bgnav.style.top="-15px"
  menuText.classList.remove("on-page")
  cateringText.className = "on-page"
  menuImg.src="img/menu.png"
  cateringImg.src="img/catering-aktif.svg"
}

menu.onmouseleave = keluar
menu.onmouseover = () => {
  cateringText.classList.remove("on-page")
  bgnav.style.top= tinggi + "px"
  menuText.className = "on-page"
  menuImg.src="img/menu-aktif.svg"
  cateringImg.src="img/catering.png"
}



