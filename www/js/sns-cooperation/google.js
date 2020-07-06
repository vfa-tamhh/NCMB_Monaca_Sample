$(function(){
    initialButton(defaultlanguage, sns_cooperation[3].operation);
    closeButton('../sns-cooperation/');

    $(document).on('click', '#btn-google-login', function(){
        sns_google_login();
    });
    $(document).on('click', '#btn-google-link', function(){
        sns_google_link();
    });
    $(document).on('click', '#btn-google-unlink', function(){
        sns_google_unlink();
    });
    $(document).on('click', '#btn-google-logout', function(){
        sns_google_logout();
    });
});