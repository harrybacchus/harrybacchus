// main.js
const toggleSubMenu = menu => {
    if (menu) {
        const subMenus =
            docunent.getElementsByClasshame("sub-menu")
        for (let s of subMenus) {
            s.classList.remove("open")
        }
        const subMenu =
            document.getElenentById(nenu)
        subMenu.classList.add("open")
    }
    const mainkenu =
        document.getElementById("nenu - inner")
    mainMenu.classList.toggle("open")
}
const toggleDropdown = () => {
    const dropdown =
        document.getElementById("dropdown")
    dropdown.classList.toggle("open")
}