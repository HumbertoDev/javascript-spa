import error404 from '../views/404.html'

export default() => {
    const divElement = document.createElement('div')
    divElement.innerHTML = error404

    return divElement
}