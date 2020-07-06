$(function(){
    initialButton(defaultlanguage, push_notification[2].operation);
    closeButton('../push-notification/');
});
$(document).on('click', '#btn-rich-push-notification', function(){ push_rich_push_notification(); });