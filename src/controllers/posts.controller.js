import views from '../views/posts.html'

// funcion asincrona para obtener los post
const getPost = async () => {
    //utilizo fetch para obtener todos los post de laurl de jsonplaceholder. Usando async await ejectuo todo esto de forma asincrona. Almaceno todo en una variable llamada response (ya se es la respuesta a mi peticion al servidor)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = views

    //Antes de obtener las publicaciones debemos seleccionar donde iran los post. Usamos divElement ya que este contiene nuestro view de posts.
    const postsElement = divElement.querySelector('#post')

    //Selecciono el elemento del total
    const totalElement = divElement.querySelector('#total')
    

    // llamo a la funcion y la almaceno en una const
    const posts = await getPost();

    // Obtengo el total de post y lo pinto en mi html
    console.log(posts.length)
    totalElement.innerHTML = posts.length

    // pinto los posts en la consola. No olvidar colocar el async await en el index.router.js
    console.log(posts)

    //hacemos un forEach y pintamos para cada valor el title y el body. Agregamos a nuestro div para post consecutivo
    posts.forEach(post => {
        postsElement.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
        `
    });

    return divElement
}