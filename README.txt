# Trabajo Práctico Integrador

### Grupo Nº 3
Federico Silibestre
Martin Blassón
Julio Dorado

#### [Repositorio](https://github.com/silibestref/TP2_INTEGRADOR_MoviesYa.git)

# _Movie-Ya_
## _Tu Lugar para alquilar peliculas_
> Con el proposito de agilizar el alquiler de peliculas en formato fisico, y dado que nuestros clientes muchas veces se acercaban a nuestros locales sin saber si la pelicula que deseaban alquilar estaba disponible o no, nos vimos en la tarea de generar un sistema online actualizado.
[![N|Solid](https://i.ibb.co/VH18BF4/Captura-de-pantalla-2022-05-16-203035.png)](https://i.ibb.co/VH18BF4/Captura-de-pantalla-2022-05-16-203035.png)

### Funciones:
- agregar una nueva pelicula al catalogo
- remover peliculas antiguas o discontinuadas o no populares
- buscar y enlistar peliculas
- agregar peliculas al carrito 
- actualizar el carrito 
- alquilar peliculas 

### Reglas de negocio:
- Validar que las funciones solo sean ejecutadas por los usuarios con el perfil correspondiente 
- Validar que la pelicula este disponible 


Rutas que responden a las funcionalidades:
```sh
app.get('/listarPeliculas'
app.get('/'
app.post('/agregarPelicula'
app.delete('/eliminarPelicula/:codigo'
app.put('/actualizarPelicula/:codigo'
```

| Modulos | Documentación |
| ------ | ------ |
| Express | [https://expressjs.com/es/4x/api.html][PlDb] |
| Axios | [https://www.npmjs.com/package/axios][PlDb] |
| Mocha | [https://mochajs.org/#getting-started][PlDb] |
| Chai | [https://www.chaijs.com/guide/plugins/][PlDb] |
| Chai-spies | [https://www.chaijs.com/plugins/chai-spies/][PlDb] |
| Body-Parser | [https://www.npmjs.com/package/body-parser][PlDb] |
| Morgan | [https://expressjs.com/en/resources/middleware/morgan.html][PlDb] |



