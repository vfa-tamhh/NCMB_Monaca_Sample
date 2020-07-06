$(function(){
    initialButton(defaultlanguage, file_store[1].operation);
    closeButton('../file-store/');
});
$(document).on('click', '#btn-view-image', function(){
    file_store_content_distribution();
});