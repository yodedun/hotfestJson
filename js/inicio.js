

var selectedValue2 = localStorage.nameciudad;

$.jMonthCalendar.ChangeMonth(new Date()) ;


$('#deviceProperties').click(function() {
        var status = device.platform;
            alert(status);

});
$("#hoy").click(function() {
    $('#divload').show();
    $.jMonthCalendar.ChangeMonth(new Date());
    localStorage['datemes'] = actual;
    $('#divload').fadeOut();
    return false;

});

$("#ciudades").change(function(){
       cambioCiudad();
       console.log('cambioCiudad')
    });

$("#eventos").change(function(){
       cambioCategoria();
    });    


function categoriasF() {
    $("option.addcat").remove()
    var serviceURL = localStorage['serviceURL'];
    $.getJSON('http://apps.sbiweb.com/HOTFEST/CategoriaJsonServlet.json', function(data) {
       
        categorias = data.categorias ;
        $.each(categorias, function(index, categoria) {
            $('#eventos').append('<option class="addcat" value="'+ categoria.CatId +'">'+ categoria.Nombre +'</option>');
        });
        
    });


};

function ciudadesF() {
    $("option.addCity").remove();
    var serviceURL = localStorage['serviceURL'];
    $.getJSON('http://apps.sbiweb.com/HOTFEST/CiudadJsonServlet.json', function(data) {
        
        ciudades = data.ciudadesSelect;
        $.each(ciudades, function(index, ciudad) {
            $('#ciudades').append('<option class="addCity" value="'+ ciudad.CiudadId +'">'+ ciudad.Nombre +'</option>');
              
        });
        
    });
    
};

function especiales() {

    
    
};

function multievento() {

    $('.DateBox > div').each(function(){

        $(this).children().remove('.festivo');
        $(this).children().remove('.especial');
  
        if(
            ($(this).children()).length > 1 ){           
            $(this).addClass('multievento')
        }
 
    });

    
};

function mescache() {

    if(localStorage.getItem('datemes')== null){           
        $.jMonthCalendar.ChangeMonth(new Date())
    }
    else{ 
        $.jMonthCalendar.ChangeMonth(new Date(localStorage.getItem('datemes')) )
    };
   
};




function ciudadcache() {

    $('#ciudades').val(selectedValue2).change();
        
};

function calendarIni() {
    categoriasF();
    ciudadesF();
    

    // si no hay ciudad seleccionada
    //selectedValue = localStorage.nameciudad;
    console.log(selectedValue2 +'dos');

    if(selectedValue2 == null ){ 
    
        $('#addtour5').show();  
        $('.escoge').show();        
        selectedValue = '0';
        $('#divload').hide();
        $('.bCiudad').addClass("seleccion");
    }
    else{ 
        if(selectedValue2 === '0' ){ 
            $('#addtour5').show();    
            $('.escoge').show();        
            selectedValue = '0';
            $('.bCiudad').addClass("seleccion");
             
        }
        else{ 
            $('.escoge').hide();
            setTimeout(ciudadcache,300);
            //var selectedValue = localStorage.getItem('nameciudad');

            //$('#eventos').val(0).change();
            //setTimeout(ciudadcache,10);
        };
    };
    //$.jMonthCalendar.Initialize(options, events);
};

function cambioCiudad() {
   
     $('#divload').show();

        localStorage['nameciudad'] = $('#ciudades').val();
        var selectedValue2 = localStorage.nameciudad;
    
        console.log(selectedValue2 + 'ciuudad');
        //$('.bCiudad').removeClass("seleccion");
       // $('.escoge').remove();
        
        //selectedValueE = 0; //reseteo categoria
        //localStorage.removeItem('namecategoria'); //borro categoria

        $.jMonthCalendar.ReplaceEventCollection([]);//reemplazo eventos
                           
        //localStorage.removeItem('nameciudad');
        //localStorage['nameciudad'] = selectedValue;
        
        var serviceURL = localStorage['serviceURL'];
        $.getJSON('http://apps.sbiweb.com/HOTFEST/EventoJsonServlet.json?idCiudad='+ selectedValue2 +'&idCategoria=todas&repite=SI', function(data) {
         
                events = data.events;
                console.log(events);
                $.jMonthCalendar.AddEvents(events);

                setTimeout(function(){
                    //$('#eventos').val(0).change();
                    categoriacache();
                  
                }, 200);
                
            });

        $(window).load(function() {
       //     setTimeout(getEvents, 100);
            
        });


        mescache();
        
     
        selectedValueE =localStorage.getItem('namecategoria');
         
        
        //$('#eventos').val(0);
        //setTimeout( dates, 100);     
        $('#divload').fadeOut(); 

}  








function categoriacache() {
    if(localStorage.getItem('namecategoria')== null ){   
             
        selectedValueE = '0';
        eventosCategoria = JSON.stringify(events);
        sessionStorage['eventsCategoria'] = eventosCategoria;
        setTimeout(multievento, 60);
            setTimeout(festivosF, 70);
         
    }

    else{ 
        if(localStorage.getItem('namecategoria')=== '0' ){   
            
            selectedValueE = '0';
            eventosCategoria = JSON.stringify(events);
            sessionStorage['eventsCategoria'] = eventosCategoria;
            setTimeout(multievento, 60);
            setTimeout(festivosF, 70);
            $('#divload').hide();
            
    
        }
        else{ 
         
            selectedValueE =localStorage.getItem('namecategoria');
            setTimeout(function(){
                $('#eventos').val(selectedValueE).change();}, 45);
                multievento(); 

             
        };
    };
        
};

    

  


function cambioCategoria() {
     $('#divload').show();

        selectedValueE = $('#eventos').val();  
       
        if( selectedValueE == 0 ){  
             $.jMonthCalendar.ReplaceEventCollection([]);  
            eventosCategoria = JSON.stringify(events);
         
            sessionStorage['eventsCategoria'] = eventosCategoria;
            localStorage['namecategoria'] = selectedValueE;
            $.jMonthCalendar.Initialize(options, events);

            multievento();
            setTimeout(festivosF, 70);
            $('#divload').hide();
        }
        else{ 

            $.jMonthCalendar.ReplaceEventCollection([]);

            //eventsCiudad = getObjects(events, 'CiudadId', selectedValue );    
            localStorage['namecategoria'] = selectedValueE;
            eventsCategoria = getObjects(events, 'CategoriaId', selectedValueE );

            $.jMonthCalendar.Initialize(options, eventsCategoria);
             
            eventosCategoria = JSON.stringify(eventsCategoria)
            sessionStorage['eventsCategoria'] = eventosCategoria;
          
            mescache();
            multievento(); 
            setTimeout(festivosF, 70);

            $('#divload').hide();
            //backCategoria();
            //setTimeout( dates, 100); 
        };
    

        
        //setTimeout( dates, 100);      

}    


function mescache() {

    if(localStorage.getItem('datemes')== null){           
        $.jMonthCalendar.ChangeMonth(new Date())
    }
    else{ 
        $.jMonthCalendar.ChangeMonth(new Date(localStorage.getItem('datemes')) )
    };
   
};

function eventodestacado() {
    eventsDestacados = getObjects(events, 'Destacado', 1 );
    $.each(eventsDestacados, function(index, destacados) {
        $('#caruselKol3 ').append('<div class="item">' +
        '<div class="eventdesc" style="background:' + destacados.Color +'" data-id="'+ destacados.EventoId+'"> '+ 
                '<a href="evento.html?id=' + destacados.EventoId + '" data-ajax="false" >' +
                   
                                '<div class="imgEvent">' +
                                    '<img src="http://' + destacados.Imagen + '">' +
                                '</div> ' +
                                '<div class="descripcionEvento">' +
                                    '<div class="date">' + destacados.Fecha +' </div>' +
                                    '<div class="titulo">' + destacados.Titulo +' </div>' +
                                            
                                '</div>' +
                       
                       
                '</a>'+
        '</div></div>');
              
    });

    $('.kol3-carousel').slick({
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              autoplay: true,
                              speed: 300,
                              centerMode: false,
                              arrows: false,
                            });




    $(".eventdesc a").click(function(){
        $('.divload').show();
        Lungo.Router.section("dEvento");
        $('.divload').fadeOut();
    });
};




function festivosF() {
        //$.jMonthCalendar.AddEvents(festivos);
        //$.jMonthCalendar.AddEvents(Especiales);  

};

