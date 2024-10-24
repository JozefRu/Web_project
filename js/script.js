
const lightbox = document.createElement('portfolio-item')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img') /* všetky image v html */
images.forEach(image => {
    image.addEventListener('click', e => {  
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return /* po kliknuti mimo obrazku vráti späť */
    lightbox.classList.remove('active')
})

