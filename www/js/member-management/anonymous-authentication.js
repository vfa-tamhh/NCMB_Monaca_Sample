$(function(){
    initialButton(defaultlanguage, member_management[2].operation);
    closeButton('../member-management/');
});
$(document).on('click', '#btn-anonymous-authentication', function(){
    member_anonymous_authentication();
});