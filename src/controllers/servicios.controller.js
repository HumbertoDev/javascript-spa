import views from '../views/servicios.html'

export default() =>{
    const divElement = document.createElement('div')
    divElement.innerHTML = views

    return divElement
}