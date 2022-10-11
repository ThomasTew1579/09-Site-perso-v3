let homePhoto = document.querySelector(".home_photo")
let home = document.getElementById("home")

homePhoto.addEventListener("mouseover", () => { 
    home.classList.add("active")
});
homePhoto.addEventListener("mouseleave", () => {
  home.classList.remove("active");
});


let about = document.getElementById("about")
let article = document.querySelectorAll("article")



function active (id, scroll){
    if (window.scrollY < scroll) {
        id.classList.replace("active", "desactive");
    } else {
        id.classList.replace("desactive", "active");
    }
}

document.addEventListener("scroll", () => {
    console.log(window.scrollY)
    
    active(about, 200)

    active(article[0], 900)
    active(article[1], 1400)
    active(article[2], 1900)
    active(article[3], 2400)
    active(article[4], 2900)

    
})