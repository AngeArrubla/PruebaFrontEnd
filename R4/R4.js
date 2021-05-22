$(document).ready(function() {
    //Almacenamos el token y url de la API
    var token = "8397dcc99be8628795fda0aa24635923";
    var url = "http://api.weatherstack.com/current?access_key=" + token + "&query=";
    //Creamos un arreglo para hacer multiples llamados a la API
    var cities = ['Bogota', 'Medellin', 'Quibdo', 'Cucuta', 'Cartagena', 'Leticia'];
    //Realizamos los llamados individualmente ya que la cuenta gratuita no permite llamados en bulk
    for (i = 0; i < cities.length; i++){
        var city = cities[i];
        //Creamos la url con la ciudad correspondiente
        fetch(url + city)
            .then(response => response.json())
            .then(data => {
                //Insertamos el html con la respuesta que nos da la API
                innerHtml = '<tr><td>' + data.location.name + '</td><td>' + data.current.temperature + '</td><td>' + data.current.pressure + '</td><td>' + data.current.wind_speed + '</td><td><img src="' + data.current.weather_icons[0] + '"></td></tr>'
                $('tbody').append(innerHtml);
            })
            .catch(e => {
                //Capturamos el error en caso de que exista
                console.log('error de conexion con la api')
            });
    }
});
