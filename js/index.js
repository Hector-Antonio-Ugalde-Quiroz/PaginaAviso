//Inicio
$( document ).ready(function() {
    $('#exampleModal').modal('toggle');
    $('#button').attr("disabled", true);
});
//

$( '.checkbox' ).on( 'click', function() {
    if( $(this).is(':checked') ){
        // Hacer algo si el checkbox ha sido seleccionado
        $('#button').attr("disabled", false);
    } else {
        // Desabilitar el boton
        $('#button').attr("disabled", true);
    }
});