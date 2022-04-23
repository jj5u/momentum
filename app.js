const title = document.querySelector("div.hello h1");

console.dir(title);

title.innerText = "Got You!";
title.style.color = "blue";

function handleTitleClick() {
    title.innerText = "Clicked";
    title.style.color = "red";
}

function handleMouseEnter() {
    title.innerText = "Hovered";
    title.style.color = "white";
}

function handleMouseLeave() {
    title.innerText = "Bye!";
}


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("you copied!");
}

function handleWindowWheel() {
    alert("you just rolled!")
}

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("wheel", handleWindowWheel);