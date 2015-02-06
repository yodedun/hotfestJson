var fecha= getUrlVars()["date"];




function eventosLista() {
    //parseEvents = JSON.parse(sessionStorage['events']); 
    //fechasUno = sessionStorage.date;
    eventosCategoria = JSON.parse(sessionStorage.eventsCategoria);
    eventsdate = getObjects(eventosCategoria, 'Fecha', fecha); 
    $.jMonthCalendar.ReplaceEventCollection([]);   
    festivosdate = getObjects(festivos, 'Fecha', fecha);
    Especialesdate = getObjects(Especiales, 'Fecha', fecha);

    $('.nameC').append(fecha);
    employees = eventsdate ;

    $.each(festivosdate, function(index, festivodate) {
    $('#listfestivos').append('<li class=" ' + festivodate.CssClass + '" data-id="' + festivodate.FestivoId + '">' +
            '<div class="descripcionEvento id' + festivodate.FestivoId + '" >' +
            '<div class="date">' + festivodate.Fecha +'</div>' +
            '<div class="titulo">' + festivodate.Titulo +'</div>  ' +                      
            '<div class="tipoEvento">' + festivodate.Categoria + '</div>' +
            '</div>' +
                     

                      
            '</div>' +
            '</li>');
              
    });


    $.each(Especialesdate, function(index, especialdate) {
        $('#listEspecial').append('<li class=" ' + especialdate.CssClass + '" data-id="' + especialdate.FestivoId + '">' +
            '<div class="descripcionEvento id' + especialdate.FestivoId + '" >' +
            '<div class="date">' + especialdate.Fecha +'</div>' +
            '<div class="titulo">' + especialdate.Titulo +'</div>  ' +                      
            '<div class="tipoEvento">' + especialdate.Categoria + '</div>' +
            '</div>' +
                     

                      
            '</div>' +
            '</li>');
              
    });


    $.each(employees, function(index, employee) {
        $('#employeeList').append('<li class="evento" data-icon="false" data-id="' + employee.EventoId + '">' +
            '<a href="evento.html?id=' + employee.EventoId + '" data-ajax="false"  dataId="' + employee.EventoId + '">' +
            '<div class="eventlist" style="background-color: ' + employee.Color +'">' +
            '<div class="imgEvent"><img src="http://' + employee.Imagen + '">' +
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
            '<div class="date">' + employee.Fecha +' - ' + employee.Ciudad +'</div>' +
            '<div class="titulo">' + employee.Titulo +'</div>  ' +                      
            '<div class="tipoEvento">' + employee.CategoriaNombre + '</div>' +
            '</div>' +
            '<div class="cuadrado" style="background: ' + employee.Color +'"> + </div>' +
                     

                      
            '</div>' +
            '</a>' +
            '</li>');
              
    });

    



    $('#divload').fadeOut(); 
};