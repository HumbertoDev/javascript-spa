import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

import {router} from './router/index.router'

router(window.location.hash)

// Vamos a incluir un evento que capture todos los cambios de #
window.addEventListener('hashchange',() =>{
    router(window.location.hash)
})