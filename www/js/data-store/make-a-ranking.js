$(function(){
    initialButton(defaultlanguage, data_store[1].operation);
    closeButton('../data-store/');
});
$(document).on('click', '#btn-save-score', function(){ data_store_save_score(); });
$(document).on('click', '#btn-get-ranking', function(){ data_store_get_ranking(); });