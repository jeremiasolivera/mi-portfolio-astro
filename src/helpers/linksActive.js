const $aboutLink = document.querySelector(".about-link")
const aboutSection = document.querySelector(".about")

const scrollPosition = window.scrollY


function scrollWindow(){
    
    if(scrollPosition >= aboutSection.offsetTop){
        $aboutLink.classList.add(".link-active")
    }

}

window.addEventListener('scroll', scrollWindow)