const imagenes = document.querySelectorAll('.img-galleria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        

    })

})

contenedorLight.addEventListener('click', (e)=>{

    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classListt.toggle('sowImage')
        menu.style.opacity="0"
    }


})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classListt.toggle('sowImage')

}