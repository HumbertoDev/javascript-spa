import views from '../views/beneficios.html'


export default() => {

    const divElement = document.createElement('div')
    divElement.innerHTML = views

    return divElement
}