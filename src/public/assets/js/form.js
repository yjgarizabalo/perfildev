$(function(){

   $('.input-area'),$('.input-add'),$('.input-edit').on('focusout', function() {
       
    if($ (this).val().length > 0) {
        $ (this).addClass('has_class');
    } 
    else {
        $ (this).removeClass('has_class');
    }

   })

})