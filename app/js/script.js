const navmenu = document.getElementById("navmenu")
const navmenuproducts = document.querySelector(".navbar__menu__products")

navmenu.addEventListener('click', () => {
    navmenuproducts.style.display = 'flex'
})