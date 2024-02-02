
setInterval(() => {
    const slider = document.querySelector(".slider");
    const items = document.querySelector(".items");
    // let activeslide = document.activeElement;
    const activeslide = slider.querySelector("[data-active]")
    // const activeslide = document.activeElement("[data-active]")
    let newIndex = [...slider.children].indexOf(activeslide) + 1
    if (newIndex > 8) { newIndex = 0 }

    slider.children[newIndex].dataset.active = true
    delete activeslide.dataset.active

}, 5000);

