
    window.addEventListener("scroll", function(){
        let header = document.querySelector('#header')
        header.classList.toggle('roll',window.scrollY > 0)
    })