$(function(){
    initialButton(defaultlanguage, member_management[0].operation);
    closeButton('../member-management/');
});
$(document).on('click', '#btn-registration-user', function(){
    member_registrationNewUser();
});
$(document).on('click', '#btn-login-user', function(){
    member_login_1();
});
$(document).on('click', '#btn-login-2-user', function(){
    member_login_2();
});
$(document).on('click', '#btn-current-user', function(){
    member_current_user();
});
$(document).on('click', '#btn-logout-user', function(){
    member_logout();
});
$(document).on('click', '#btn-confirm-email-user', function(){
    member_confirm_email();
});
