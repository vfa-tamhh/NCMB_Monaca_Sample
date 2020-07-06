$(function(){
    initialButton(defaultlanguage, sns_cooperation[1].operation);
    closeButton('../sns-cooperation/');
});
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $(document).on('click', '#btn-member-registration-and-authentication', function(){ sns_member_registration_and_authentication(); });
    $(document).on('click', '#btn-link-apple-credentials-to-existing-members', function(){ sns_link_apple_credentials_to_existing_members(); });
    $(document).on('click', '#btn-apple-id-and-unlink-function', function(){ sns_apple_id_and_unlink_function(); });
    $(document).on('click', '#btn-implementation-of-logout-process', function(){ sns_implementation_of_logout_process(); });
};
