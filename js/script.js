/* Función ShowAlert (tipoError) -> Realiza error especifico en función del parámetro 'tipoError' 
                                    motrándolo en la zona de alertas con efecto sliding             */
function showAlert(tipoError) {
    switch (tipoError) {
        case "fnamevoid":
            $("#fnamelabel").css("color", "red");
            $("#fname").css("borderColor" , "red");
            $("#alerts").append ("<p>El campo \"Nombre\" es obligatorio<p>");
            break;
        case "surnamevoid":
            $("#surnamelabel").css("color", "red");
            $("#surname").css("borderColor" , "red");
            $("#alerts").append ("<p>El campo \"Apellidos\" es obligatorio<p>");
            break;
    }
    $("#alerts").slideDown(200);
}

/* Función clearPreviousErrors () -> Limpia errores por si se hubieran producido anteriormente */
function clearPreviousErrors() {
            $("#fnamelabel").css("color", "black");
            $("#fname").css("borderColor" , "black");
            $("#surnamelabel").css("color", "black");
            $("#surname").css("borderColor" , "black");
            $("#alerts").html ("");
            
}

/* Listener para comprobar que nombre y apellidos no estén vacíos al formalizar pedido */
$( "#orderform" ).submit(function( event ) {
    clearPreviousErrors();
    if( $("#fname").val() == "" ) {
        showAlert("fnamevoid");                        
        event.preventDefault();
    }
    if( $("#surname").val() == "" ) {
        showAlert("surnamevoid");                        
        event.preventDefault();
    }
    
});
