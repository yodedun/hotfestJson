function listEventosAll() {

    if (getUrlVars() == "categoriaid") {
        var categoriaSelect  = getUrlVars()["categoriaid"];
        eventsdate = getObjects(events, 'CategoriaId', categoriaSelect );
        $('.nameC').append(eventsdate[0].CategoriaNombre);
    } else if (getUrlVars() == "ciudadId") {
        var categoriaSelect  = getUrlVars()["ciudadId"];
        eventsdate = getObjects(events, 'CiudadId', categoriaSelect );
        $('.nameC').append(eventsdate[0].Ciudad);
    }

    
    employees = eventsdate ;

    $.each(employees, function(index, employee) {
        $('#employeeList').append('<li class="evento eventoAl" data-id="' + employee.EventoId + '">' +
            '<a href="evento.html?id=' + employee.EventoId + '"  dataId="' + employee.EventoId + '" data-ajax="false">' +
            '<div class="eventlist" style="background-color: ' + employee.Color +'">' +
            '<div class="imgEvent" style="border-bottom: 4px solid ' + employee.Color +'"><img src="http://' + employee.Imagen + '">' +
            '</div>' +
            '<style type="text/css"> ' +
            '#employeeList .descripcionEvento.id' + employee.EventoId + ':before {' +
            'border-top: 20px solid transparent;' +
            'border-left: 20px solid transparent;' +
            'border-bottom: 20px solid' + employee.Color +';' +
            'border-right: 20px solid transparent;' +
            '}' +
            '</style>' +
            '<div class="descripcionEvento id' + employee.EventoId + '" >' +
            '<div class="date">' + employee.Fecha +'</div>' +
            '<div class="titulo">' + employee.Titulo +'</div>  ' +                      
            '<div class="tipoEvento">' + employee.CategoriaNombre + '</div>' +
            '</div>' +
            '<div class="cuadrado" style="background-color: ' + employee.Color +'"> + </div>' +
                     

                      
            '</div>' +
            '</a>' +
            '</li>');
    
       
          
    });
    $(".eventoAl").click(function(){
        $('.divload').show();
        Lungo.Router.section("dEvento");
        $('.divload').fadeOut();
    });
    console.log('carga');
    $('#divload').fadeOut(); 
};