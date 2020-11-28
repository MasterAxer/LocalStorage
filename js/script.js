
var cuenta=0;
        	$(document).ready(function(){
				var localnom=[],
				localmail=[];
        		/*Boton guardar*/
        		$('#boton-guardar').click(function(){
			      /*Captura de datos escrito en los inputs*/        
			        var nom = $("#nombre").val();
			        var correo = $("#email").val();
					localnom.push(nom);
					localmail.push(correo);
			        /*Guardando los datos en el LocalStorage*/
			        localStorage.setItem("Nombre", JSON.stringify(localnom));
                    localStorage.setItem("Email", JSON.stringify(localmail));
                    
			       
			        /*Limpiando los campos o inputs*/
			        $("#nombre").val("");
			        $("#email").val("");
			    });

			    /*Boton cargar storage */
			    $('#boton-ver').click(function(){
                    /*Obtener datos almacenados*/
                   
                	var nombre = JSON.parse(localStorage.getItem("Nombre"));
                	var correo = JSON.parse(localStorage.getItem("Email"));
					/*Mostrar datos almacenados*/
					for(var i=0;i<nombre.length;i++){
					$("#salida").append("<tr><td>"+nombre[i]+"</td><td>"+correo[i]+"</td></tr>");
					}
                    
                   
			    });

			    /*Boton limpiar*/
			    $("#boton-limpia").click(function(){
			    	/*Limpiando los campos o inputs*/
			        $("#nombre").val("");
			        $("#email").val("");
			    });
        	});