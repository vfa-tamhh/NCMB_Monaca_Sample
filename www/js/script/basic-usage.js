$(function(){
    initialButton(defaultlanguage, script_function[0].operation);
    closeButton('../script/');
});
$(document).on('click', '#btn-script-get', function(){ script_get(); });
$(document).on('click', '#btn-script-post', function(){ script_post(); });