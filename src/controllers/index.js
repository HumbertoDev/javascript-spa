// Importamos nuestras vistas
import Home from '../controllers/home.controller';
import Beneficios from '../controllers/beneficios.controller';
import About from '../controllers/about.controller';
import Servicios from '../controllers/servicios.controller';
import Posts from '../controllers/posts.controller.js'
import Error404 from '../controllers/404.controller'

const pages = {
    home: Home,
    beneficios: Beneficios,
    about: About,
    servicios: Servicios,
    error: Error404,
    posts: Posts
}

export { pages }

