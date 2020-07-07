$(function(){
    initialButton(defaultlanguage, sns_cooperation[0].operation);
    closeButton('../sns-cooperation/');

});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var LoginSuccess = function(response){
        // var authResponse = response.authResponse;
        sns_ncmb_facebook_login(response);    
    };
    var LoginError = function(error){
        console.log('Login Error: ' + JSON.stringify(error));
        alert('Error retrieving user profile' + JSON.stringify(error));
    };
    function LoginFacebook(){
        facebookConnectPlugin.login(['email', 'public_profile'], LoginSuccess,
        function loginError (error) {
            console.error(error)
            alert('Error retrieving user profile' + JSON.stringify(error));
        });
    }
    $(document).on('click', '#btn-login', function(){
        LoginFacebook();
    });
}