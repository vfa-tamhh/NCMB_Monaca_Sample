$(function(){
    initialButton(defaultlanguage, push_notification[0].operation);
    closeButton('../push-notification/');
});
$(document).on('click', '#btn-search-for-push-notifications', function(){ push_search_for_push_notifications(); });
$(document).on('click', '#btn-update-push-notifications', function(){ push_update_push_notifications(); });
$(document).on('click', '#btn-delete-push-notifications', function(){ push_delete_push_notifications(); });