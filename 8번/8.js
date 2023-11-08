const upButton = document.querySelector(".up-button");

window.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    // 1. 스크롤위치가 100px 보다 크면 (위에서 100px 이상 내려오면)
    // 2. 버튼이 보이게 한다.
});

window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        document.querySelector(".up-button").style.display = "block";
        document.querySelector(".up-button").classList.add("show");
        upButton.classList.add("show");
    } else {
        document.querySelector(".up-button").style.display = "none";
        document.querySelector(".up-button").classList.remove("show");
        upButton.classList.remove("show");
    }
});
