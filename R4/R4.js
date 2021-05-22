$(document).ready(function() {
    //Almacenamos la URL que nos da la API en la variable url
    var token = "8397dcc99be8628795fda0aa24635923";
    var url = "http://api.weatherstack.com/current?access_key=" + token + "&query=";
    //Llamamos la API cuando hacemos click en el boton
    var cities = ['Bogota', 'Medellin', 'Quibdo', 'Cucuta', 'Cartagena', 'Leticia'];
    for (i = 0; i < cities.length; i++){
        var city = cities[i];
        fetch(url + city)
            .then(response => response.json())
            .then(data => {
                innerHtml = '<tr><td>' + data.location.name + '</td><td>' + data.current.temperature + '</td><td>' + data.current.pressure + '</td><td>' + data.current.wind_speed + '</td><td><img src="' + data.current.weather_icons[0] + '"></td></tr>'
                $('tbody').append(innerHtml);
            })
            .catch(e => {
                console.log('error de conexion con la api')
            });
    }
});
