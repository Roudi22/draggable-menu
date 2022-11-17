const tabsBox = document.querySelector(".tabs-box");
allTabs = document.querySelectorAll(".tab")
arrowsIcons = document.querySelectorAll(".icon i")
let isDragging = false


const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowsIcons[0].parentElement.style.display = scrollVal > 0 ? "flex": "none"
    arrowsIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex": "none"
}

arrowsIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(()=>handleIcons(),50)
    })
});

allTabs.forEach(tab => {
    tab.addEventListener("click", ()=> {
        tabsBox.querySelector(".active").classList.remove("active")
        tab.classList.add("active")
    })
});
const dragging = (e) => {
    if(!isDragging) return
    tabsBox.classList.add("dragging")
    tabsBox.scrollLeft -= e.movementX;
    handleIcons()
}

const dragStop = ()=> {
    isDragging = false
    tabsBox.classList.remove("dragging")
}

tabsBox.addEventListener("mousedown", ()=> isDragging = true)
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop)