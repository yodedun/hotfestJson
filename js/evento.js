var firstID= getUrlVars()["id"];

descripcion();

function descripcion() {
    
    parseEvents = JSON.parse(sessionStorage.eventsCategoria); 
    var descripcionEvento = getObjects(parseEvents, 'EventoId', firstID ); 
    employees = descripcionEvento[0] ;
   
    var imagen = "http://";
    var rutaImagen = imagen + employees.Imagen ;
    //$('#test').append(employee.Titulo);
    $('#eventDetails .eventCalendar').append('<p class="line1"> <i class="fa fa-star"></i> ' + employees.Titulo + '<span class="bubble"> - ' + employees.CategoriaNombre + '</span></p>' +
        ' <p class="line2"> <i class="fa fa-calendar"></i> Fecha: '+ employees.Fecha +' - '+ employees.Hora + '</p> ' + 
        '<p class="line4"><i class="fa fa-building"></i> ' + employees.Ciudad + '</p>' +
        '<p class="line4">Lugar: ' + employees.Escenario + '</p>'+
        '<p class="line4"> ' + employees.Direccion + '</p>');
    $('#eventDetails .tituloHora').append('<p class="line3">' + employees.Description + '</p>' );

    $('.imagenEvento').append("<img src='" + rutaImagen + "'/>");
    $('.imagenback').append("<img src='" + rutaImagen + "'/>");

        
    $('#eventDetails').append('<style>.detalles:before{border-top:45px solid' + employees.Color + '}</style>');
    $('.blur').css("background",employees.Color );



    Latitud2 = employees.Latitud;
    Longitud2 = employees.Longitud;
    titulo2 = employees.Titulo;
    urlNormal = employees.Url
    urlCompra = employees.UrlCompra

    $('#bar-btn').append('<div class="btn btn-mapa"> <i class="fa fa-map-marker"></i> Ver Mapa </div>');
    myFunction();

    function myFunction() {


            

            if( employees.Url !== "")
            {
                $('#bar-btn').append('<a class="btn btn-link"> <i class="fa fa-info-circle"></i> Más info </div>' );
            } else{
                console.log('no')
            };

            if( employees.UrlCompra !== "")
            {
                $('#bar-btn').append('<a class="btn btn-compra"> <i class="fa fa-money"></i> Link compra </div>');
            } else{
                console.log('no')
            };




    } 


$(".btn-link" ).click(function() {        
                                      
            window.open(''+ urlNormal  +'', "_blank");
                                              
            });
$(".btn-compra").click(function() {        
                                      
                window.open(''+ urlCompra +'', "_system");
                                              
            });

$(".btn-mapa").click(function() {      


                    console.log('map'),
                    window.plugins.webintent.startActivity({
                        action: window.plugins.webintent.ACTION_VIEW,
                        url: 'geo:'+ Latitud2 +','+ Longitud2 +'?q=' + Latitud2 +','+ Longitud2
                        },

                    function() {},
                        function() {
                                ruta= 'http://maps.apple.com/?daddr='+Latitud2+','+Longitud2;
                                window.open(ruta, "_system"); 
                            }
                        );   
                                  
                });


    console.log('carga');
    $('#divload').fadeOut();
};