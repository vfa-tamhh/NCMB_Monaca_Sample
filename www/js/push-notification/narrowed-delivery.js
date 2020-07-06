$(function(){
    initialButton(defaultlanguage, push_notification[1].operation);
    closeButton('../push-notification/');
});
$(document).on('click', '#btn-settings-in-the-app', function(){ push_settings_in_the_app(); });