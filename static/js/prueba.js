function ver_noticias(data){        
    var noticias = $('#noticias-content');
    var datos = $('#datos');
    datos.html('');
    var contenido = '';
//	noticias.css('background-color','green');
    $.each(data, function(key,value){
	   contenido = contenido + noticia(key,value['titular'],value['descripcion'],('#data'+key));
       datos.append("<div id='"+('data'+key)+"' style='display:none;' class='descripcion'>\
        <div class='row-fluid' style='text-align: center; font-weight: bold; font-size: 14px;\
         border-bottom: 1px solid rgb(236, 236, 236); padding-bottom: 2px;'>"
         +value['titular']+"</div><br>\
         <div data-default-href='https://plusone.google.com/_/+1/confirm?hl=en&amp;url="+value['link']+"'\
         data-size='medium' data-href='"+value['link']+"'\
         class='socialite googleplus-one socialite-instance'></div>\
         <div data-default-href='http://twitter.com/share' data-text='"+value['titular']+"'\
         data-url='"+value['link']+"' data-count='horizontal'\
         class='socialite twitter-share socialite-instance'></div>\
         <div data-default-href='http://www.facebook.com/sharer.php?u="+value['link']+"'\
         data-href='"+value['link']+"'\
         data-send='false' data-layout='button_count' data-width='60' data-show-faces='false' class='socialite facebook-like socialite-instance'></div>"
         +value['descripcion']+"\
         <input type='button' class='btn-primary' value='Volver' onclick='abrir();' ></div>");
    });
    noticias.html("<div class='accordion' id='noticias-andina'>"+contenido+"</div>");

    Socialite.load();
    update();
}

function ver_discursos(data){        
    var discursos = $('#discursos-content');
    var datos = $('#datos');
    datos.html('');
    var contenido = '';
//  noticias.css('background-color','green');
    $.each(data, function(key,value){
        contenido = contenido + discurso(key,value['titular'],value['descripcion'],('#data'+key));
        datos.append("<div id='"+('data'+key)+"' style='display:none;' class='descripcion'><div class='row-fluid'  style='text-align: center; font-weight: bold; font-size: 14px; border-bottom: 1px solid rgb(236, 236, 236); padding-bottom: 2px;'>"+value['titular']+"</div><br>"+value['descripcion']+"<input type='button' class='btn-primary' value='Volver' onclick='abrir();' ></div>");
    });
    discursos.html("<div class='accordion' id='noticias-andina'>"+contenido+"</div>");
    Socialite.load();
    update();
}

function noticia(num,titulo, texto, link){
var nota= "<div class='accordion-group'> <div class='accordion-heading'> <a class='accordion-toggle'  data-toggle='collapse' data-parent='#noticias' href='#noticia"+num+"'>"+ titulo+"</a> </div>  <div style='height: 0px;' id='noticia"+num+"' class='accordion-body collapse'>  <div class='accordion-inner'><div class='texto'>"+texto.substring(0,texto.indexOf("</p>"))+"</div><br /><a class='btn btn-inverse enlace' data-id='"+link+"'>Leer Noticia completa</a></div></div></div>";
return nota;
}

function discurso(num,titulo, texto, link){
var nota= "<div class='accordion-group'> <div class='accordion-heading'> <a class='accordion-toggle'  data-toggle='collapse' data-parent='#discursos' href='#discurso"+num+"'>"+ titulo+"</a> </div>  <div style='height: 0px;' id='discurso"+num+"' class='accordion-body collapse'>  <div class='accordion-inner'><div class='texto'>"+texto.substring(0,500)+"... </div><br /><a class='btn btn-inverse enlace' data-id='"+link+"' target='_blank'>Leer Discurso completo</a></div></div></div>";
return nota;
}

function jsonp(url,id){  
    var head = document.getElementsByTagName('head')[0];  
    var script = document.createElement('script');  
    script.type = 'text/javascript';  
    script.src = url;  
    head.appendChild(script);  
    $('#'+id).html("");
    $('#'+id).html("<img src='static/img/ajax-loader.gif' title='Cargando noticias'><div class='texto'>Cargando</div>");
} 
/*
$.each(data, function(key,value){                
			noticias.append(key);
		});*/
