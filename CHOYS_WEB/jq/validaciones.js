//LLAMADO A LAS FUNCIONES
$(function(){

	$("#span_nom").hide();
	$("#span_email").hide();
	$("#span_telefono").hide();
	$("#span_intereses").hide();
	$("#btn_regresar").click(limpiar_campos);
	$("#btn_guardar").click(validar);
});

//DEFINICIONDE VARIABLES PARA LA COMPARACION DE CONTENIDO
//EN CAJAS DE TEXTO
var letras = /^[a-zA-Z ]+$/;
var correo = /[a-zA-Z]+[@]{1}[a-z]+[.]{1}[c]{1}[o]{1}[m]{1}$/;
var numero = /[0-9]{10}$/;

//METODO PARA VALIDAR SI HAY UN CAMPO VACIO Y SI HAY UN CAMPO
//CON CONTENIDO ERRONEO
function validar(){
var Nombre = document.getElementById("txt_nombre").value;
var Email = document.getElementById("txt_email").value;
var Telefono = document.getElementById("txt_telefono").value;
var tiene_hijos=document.getElementsByName("rbn_tienehijos");

	//NOMBRE  
	if( Nombre === "" ){
		$("#div_nombre").attr("class","form-group has-error");
		$("#span_nombre").show().text('El campo Nombre no debe estar vacío');
	}else if(!Nombre.match(letras)){
        $("#div_nombre").attr("class","form-group has-error");
		$("#span_nombre").show().text('El formato de Nombre solo debe contener letras');
	}else{
		$("#div_nombre").attr("class","form-group has-success");
		$("#span_nombre").hide();
	}

	//CORREO
	if( Email === "" ){
		$("#div_email").attr("class","form-group has-error");
		$("#span_email").show().text('El campo Email no debe estar vacio');
	}else if(!Email.match(correo)){
        $("#div_email").attr("class","form-group has-error");
		$("#span_email").show().text('El formato de Email es incorrecto (letras@letras.com)');
	}else{
		$("#div_email").attr("class","form-group has-success");
		$("#span_email").hide();
	}

	//TELEFONO
	if( Telefono === "" ){
		$("#div_telefono").attr("class","form-group has-error");
		$("#span_telefono").show().text('El campoTelefono no debe estar vacio');
	}else if(!Telefono.match(numero)){
        $("#divtelefono").attr("class","form-group has-error");
		$("#spantelefono").show().text('El formato de Telefono es incorrecto (SOLO 10 NUMEROS)');
	}else{
		$("#divtelefono").attr("class","form-group has-success");
		$("#spantelefono").hide();
	}

	//INTERESES
	if(!document.getElementById("cbx_libros").checked &&
       !document.getElementById("cbx_musica").checked &&
       !document.getElementById("cbx_deportes").checked &&
       !document.getElementById("cbx_otros").checked ){
    	$("#div_intereses").attr("class","form-group has-error");
        $("#span_intereses").show().text('Selecciona un interes');
    }else{
    	$("#div_intereses").attr("class","form-group has-success");
    $("#span_intereses").hide();;
    }
}

//METODO PARA LIMPIAR LOS CAMPOS
function limpiar_campos(){

	//NOMBRE
	document.getElementById("txt_nombre").value = "";
	$("#div_nombre").attr("class","form-group");
	$("#span_nombre").hide();
	
	//EMAIL
	document.getElementById("txt_email").value = "";
	$("#div_email").attr("class","form-group");
	$("#span_email").hide();

	//TELEFONO
	document.getElementById("txt_telefono").value = "";
	$("#div_telefono").attr("class","form-group");
	$("#span_telefono").hide();

   //TIENE HIJOS?
    tiene_hijos[0].checked=true;

    //ESTADO CIVIL
    document.getElementById("cbx_estadocivil").value="SOLTERO";

    //INTERESES
    document.getElementById("cbx_libros").checked =false;
    document.getElementById("cbx_musica").checked =false;
    document.getElementById("cbx_deportes").checked =false;
    document.getElementById("cbx_otros").checked =false;
    $("#div_intereses").attr("class","form-group");
    $("#span_intereses").hide();;
}