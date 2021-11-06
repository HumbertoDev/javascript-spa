// importamos el index controler
import {pages} from '../controllers/index'

// llamamos al elemento donde se cargará el contenido y lo almacenamos en una variable
let content = document.getElementById('root');

// Llenamos el primer pantallazo con el de la home.
content.appendChild(pages.home())
// crear funcion que recibe como argumento principal el hash que se obtiene del browser
const router = async (route) => {
    //Cada vez que se inicie la función, el contenido empieza vacio. Esto lo hacemos para que no se acumule el contenido abajo del otro.
    content.innerHTML = ''
    // imprimimos la locación para saber qué parámetro estamos usando.
    console.log(window.location.hash)
    // usamos switch para evaluar las condiciones
    switch(route){
        //Devuelve la view de home.js 
        case '': {
            // utilizamos appendChild() para agregar nuestro divElement a content.
            return content.appendChild(pages.home());
        }
        case '#/' : {
            return content.appendChild(pages.home())
        }
        //Devuelve la view de beneficios.js
        case '#/beneficios':{
            return content.appendChild(pages.beneficios())
        }
        //Devuelve el view de about.js
        case "#/about":{
            return content.appendChild(pages.about())
        }
        //Devuelve el view de serivicios.js
        case '#/servicios':{
            return content.appendChild(pages.servicios())
        }
        case '#/posts':{
            return content.appendChild(await pages.posts())
        }
        default:
            return content.appendChild(pages.error())
    }
}

// exportamos para poder usar esta funcion en el main.js
export { router };