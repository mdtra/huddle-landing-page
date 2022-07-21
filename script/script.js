window.addEventListener('resize', function () {

    let bodyDoc = document.querySelector('body')
    let widthBody = bodyDoc.offsetWidth

    let icons = document.querySelectorAll('.fa-brands')
    
    if (widthBody <= 750){
        for (let i = 0; i <= icons.length; i++) {
            icons[i].classList.remove('fa-lg')
            icons[i].classList.add('fa-xs')
        }
    }
    else {
        for (let i = 0; i <= icons.length; i++) {
            icons[i].classList.remove('fa-xs')
            icons[i].classList.add('fa-lg')
        }
    }
})


