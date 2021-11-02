import views from '../views/home.html'

export default () => {

    // Creamos un div
    const divElement = document.createElement('div')

    // agregamos nuestra view er este div
    divElement.innerHTML = views

    // Retornamos el div con el view adentro
    return divElement
}