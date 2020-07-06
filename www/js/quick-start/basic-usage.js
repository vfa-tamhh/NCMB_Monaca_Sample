$(function(){
    initialButton(defaultlanguage, quick_start[0].operation);
    closeButton('../quick-start/');
});
$(document).on('click', '#btn-quickstart-data', function(){
    quickStart_Datastore();
});