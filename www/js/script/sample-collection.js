$(function(){
    initialButton(defaultlanguage, script_function[1].operation);
    closeButton('../script/');
});
$(document).on('click', '#btn-script-get', function(){ script_sample_get(); });
$(document).on('click', '#btn-script-post', function(){ script_sample_post(); });
$(document).on('click', '#btn-script-put', function(){ script_sample_put(); });
$(document).on('click', '#btn-script-delete', function(){ script_sample_delete(); });