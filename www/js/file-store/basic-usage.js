$(function(){
    initialButton(defaultlanguage, file_store[0].operation);
    closeButton('../file-store/');
});
$(document).on('click', '#btn-file-search', function(){ file_store_file_search(); });
$(document).on('click', '#btn-update-file-acl', function(){ file_store_update_file_acl(); });
$(document).on('click', '#btn-delete-file', function(){ file_store_delete_file(); });
$(document).on('click', '#btn-get-contents-of-file', function(){ file_store_get_contents_of_file(); });
$(document).on('click', '#btn-get-binary-data-and-display-image', function(){ file_store_get_binary_data_and_display_image(); });