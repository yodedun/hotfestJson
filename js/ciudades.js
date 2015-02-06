var serviceURL = localStorage['serviceURL'];

var ciudades;

$(window).load(function() {
    setTimeout(getCiudades, 100);
});

$(document).ajaxError(function(event, request, settings) {
    $('#divload').fadeOut(); 
    alert("Error accessing the server");
});

function getCiudades(){
    $('#divload').show();
    $.getJSON('http://apps.sbiweb.com/HOTFEST/CiudadJsonServlet.json', function(data) {
        $('#divload').fadeOut(); 
        $('#categoriasSection').empty();
        ciudades = data.ciudadesSelect;
        $.each(ciudades, function(index, ciudad) {
            $('#ciudadesSection ul').append('<li class="arrow"><a href="listeventos.html?ciudadId=' + ciudad.CiudadId + '" data-ajax="false"><div class="categoriaL categoriaID'+ ciudad.CiudadId +'">'+
            '<div class="namenLista">'+ ciudad.Nombre +'</div></div></a></li>');
              
         });
        
    });

}