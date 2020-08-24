$(function(){
    initialButton(defaultlanguage, member_management[1].operation);
    closeButton('../member-management/');
});
$(document).on('click', '#btn-member-registration-by-email-address', function(){
    // var email = '';
    member_email_registration();
});
$(document).on('click', '#btn-login-with-email-address', function(){
    // var email = '';
    // var password = '';
    member_login_with_email();
});