$(document).ready(function() {
    var $videoSrc;
    //Llamamos el icono con la clase video-btn y activamos la funcion cuando
    //hacemos click
    $('.video-btn').click(function() {
        //guardamos en la variable el parametro data-src, que es la url
        $videoSrc = $(this).data( "src" );
    });

    // Cuando el modal se abre activamos una funcion
    $('#myModal').on('shown.bs.modal', function (e) {
        //Toma el elemento con id video y le asgina en el atributo src la url del video
        //concatenada a los parametros que permiten la reproduccion automatica
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    //Cuando el modal se cierra activamos una funcion
    $('#myModal').on('hide.bs.modal', function (e) {
        //Asignamos solo la url sin el valor agregado
        $("#video").attr('src',$videoSrc); 
    })
});

