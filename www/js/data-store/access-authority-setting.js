$(function(){
    initialButton(defaultlanguage, data_store[2].operation);
    closeButton('../data-store/');
});
$(document).on('click', '#btn-set-acl-on-the-app-side', function(){ data_store_set_acl_on_the_app_side(); });