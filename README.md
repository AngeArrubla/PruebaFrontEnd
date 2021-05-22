# Prueba FrontEnd Trainee
Prueba para la posición de frontend developer trainee, se resuelve usando HTML5, CSS, Bootstrap5 y JQuery
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

# Solución
### R2
#### Planteamiento
Crear una web R2.html, y maquetar la tabla de datos de ejemplo, responsive mobile, tablet y web, y debe cumplicar
con las siguientes caracteristicas de diseño web, en este ejemplo solo utilizar html y css.
### Desarrollo
Para este punto se decidió usar solo html y css puro con el fin de demostrar mis habilidades en los dos lenguajes, para el icono se hizo uso
de la hoja de estilos de Google. Para solucionar el responsive de la tabla se uso la propiedad nativa ```overflow-x: auto;```. Además para alinear
el icono y texto de los ```th``` se implento un flexbox.

### R3
#### Planteamiento
Crear una web R3.html, y maquetar el diseño suministrado. Al dar click en el play reproducir un video en un modal.
Las fotografias y video, a consideracion del candidato. Se evaluara Metatagas, Favicon, Codificacion (html, css y
javascript), y responsive.
### Desarrollo
En el desarrollo de este punto se decidió hacer uso de jquery y bootstrap, ambos solo fueron usados para la implementación del modal, ya que bootstrap
trae consigo la posibilidad de implementar facilmente estos elementos y ademas contiene propiedades para solucionar los problemas comunes del responsive
de elementos multimedia ```embed-responsive embed-responsive-16by9```. Con jquery se implemento la accion que obtiene por medio del data-src del icono la 
url del video, posteriormente al abrirse el modal agregamos a la url un string que permite que se reproduzca automaticamente el video, finalmente nos 
encargamos que al cerrarse el modal se pause la reproducción. Para el responsive hacemos uso de los media queries y flexbox, además de algunos estilos 
para que se vea agradable y para ordenar la imagen e icono que permite abrir el modal.

### R4
#### Planteamiento
Crear una pagina R4.html, y consumir un servicio gratuito de datos (Rest Api - GET), para listar informacion, en una
tabla con diseño similiar a la solicitada en R2.
### Desarrollo
Para el desarrollo de este punto hacemos uso de jquery y bootstrap, esta vez, para darle estilos a la tabla e insertar dinamicamente los datos.
Con el fin de realizar el llamado a la API se hace uso de Fetch, el cual recibe como parametro una url construida de la siguiente manera:
  - una url base proporcionada por la documentacion
  - un token unico (Se almacena en una variable por facilidad de uso pero se recomienda almacenar en variables de entorno)
  - una query, que es el nombre de la ciudad a consultar.
Para lograr construir dinamicamente la tabla, se almacena en el vector cities las ciudades a consultar, y se va construyendo la url con cada una de ellas
la respuesta es tratada de tal forma que genera una string que se envia como parametro al metodo append proporcionado por jquery, el cual inserta html a un
elemento. 

### NOTA
- Se debe tener en cuenta que la API tiene un limite de 250 consultas y que cada vez que se carga la pagina se estan generando 6, al llegar al limite la tabla 
  no se generará y veremos un error en la consola.
- Se trató de hacer uso de la mayor cantidad de herramientas posibles con el fin de demostrar mi capacidad de manejo.
- No se requieren instalaciones externas ya que las librerias son llamadas en el header de cada html.
