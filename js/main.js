



if ((localStorage.getItem("IsSmall")) === ("yes")) {
    sidebarId.classList.add("small-sidebar")

} else {
    sidebarId.classList.remove("small-sidebar")

}

const toggleSidebar = () => {

    if ((localStorage.getItem("IsSmall")) === ("yes")) {
        localStorage.setItem("IsSmall", "no")
        sidebarId.classList.remove("small-sidebar")

    }
    else {
        localStorage.setItem("IsSmall", "yes")

        sidebarId.classList.add("small-sidebar")

    }
}