let hiddenMenu=document.getElementById("hideMenu")
let menuIconEl=document.getElementById("menuIcon")
let cancelIconEl=document.getElementById("cancelIcon")
let headerEl=document.getElementById("header")
let logoEl = document.getElementById("logo")
let navEl = document.getElementById("navOptions")
function showMenu() {  
    console.log("clikk")
    hiddenMenu.style.display="block"
    cancelIconEl.style.display="block"
    logoEl.style.display="none"
    menuIconEl.style.display="none"
}
// function hideMenu() {
//     hiddenMenu.style.display="block"
//     cancelIconEl.style.display="none"
//     headerEl.style.display="block"
//     logoEl.style.display="block"
//     menuIconEl.style.display="block"
// }