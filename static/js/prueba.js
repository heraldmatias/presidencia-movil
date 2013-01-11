
function ver_noticias(data){        
        var noticias = $('#noticias-content');
        var contenido = '';
//	noticias.css('background-color','green');
        $.each(data, function(key,value){
		contenido = contenido + noticia(key,value['titular'],value['descripcion'],value['link']);
	});
        noticias.html("<div class='accordion' id='noticias-andina'>"+contenido+"</div>");
}

function ver_discursos(data){        
        var noticias = $('#discursos-content');
        var contenido = '';
//  noticias.css('background-color','green');
        $.each(data, function(key,value){
        contenido = contenido + discurso(key,value['titular'],value['descripcion'],value['link']);
    });
        noticias.html("<div class='accordion' id='noticias-andina'>"+contenido+"</div>");
}

function noticia(num,titulo, texto, link){
var nota= "<div class='accordion-group'> <div class='accordion-heading'> <a class='accordion-toggle'  data-toggle='collapse' data-parent='#noticias' href='#noticia"+num+"'>"+ titulo+"</a> </div>  <div style='height: 0px;' id='noticia"+num+"' class='accordion-body collapse'>  <div class='accordion-inner'><div class='texto'>"+texto+"</div><br /><a class='btn btn-inverse enlace' href='"+link+"' target='_blank'>Leer Noticia completa</a></div></div></div>";
return nota;
}

function discurso(num,titulo, texto, link){
var nota= "<div class='accordion-group'> <div class='accordion-heading'> <a class='accordion-toggle'  data-toggle='collapse' data-parent='#discursos' href='#noticia"+num+"'>"+ titulo+"</a> </div>  <div style='height: 0px;' id='noticia"+num+"' class='accordion-body collapse'>  <div class='accordion-inner'><div class='texto'>"+texto+"</div><br /><a class='btn btn-inverse enlace' href='"+link+"' target='_blank'>Leer Discurso completa</a></div></div></div>";
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

