localStorage['serviceURL'] = "http://apps.sbiweb.com/HOTFEST/";
var serviceURL = localStorage['serviceURL'];

var categorias;

$(window).load(function() {
    setTimeout(getCategorias, 100);
});

$(document).ajaxError(function(event, request, settings) {
    $('#divload').fadeOut(); 
    alert("Error accessing the server");
});

function getCategorias(){
    $('#divload').show();
    $.getJSON('http://apps.sbiweb.com/HOTFEST/CategoriaJsonServlet.json', function(data) {
        $('#divload').fadeOut(); 
        $('#categoriasSection').empty();
        categorias = data.categorias ;
        $.each(categorias, function(index, categoria) {
           $('#categoriasSection').append('<a href="listeventos.html?categoriaid=' + categoria.CatId + '" data-ajax="false"><div class="categoriaL categoriaID'+ categoria.CatId +'"><div class="imagenLista"><img src="http://' + categoria.Imagen + '"> </div>'+
            '<div class="namenLista" style="border-top: 4px solid #'+ categoria.Color +'">'+ categoria.Nombre +'</div></div></a>');
        });
        
    });


}