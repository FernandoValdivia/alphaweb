const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show__menu')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show__menu')
})
/* colocar la clase del body a dark */
const darkTheme = () => {
    document.querySelector('body').classList.toggle("light")
    document.querySelector('#mode-icon').setAttribute('class','bx bxs-moon')
}
/* quitar la clase dark al body */
const lightTheme = () => {
    document.querySelector('body').classList.remove("light")
    document.querySelector('#mode-icon').setAttribute('class','bx bxs-sun')
}
/* si el body tiene la clase dark puesta  */
const changeTheme = () => {
    document.querySelector('body').getAttribute("class") === "light" ? lightTheme() : darkTheme();
}

