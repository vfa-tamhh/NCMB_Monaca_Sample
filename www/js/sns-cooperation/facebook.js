$(function(){
    initialButton(defaultlanguage, sns_cooperation[0].operation);
    closeButton('../sns-cooperation/');

});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var LoginSuccess = function(response){
    alert(JSON.stringify(response));
    // sns_ncmb_facebook_login(response);
    // var authResponse = response.authResponse;
    // GetProfileInfo(authResponse).then(function(user) {
    //     //   StorageService.setLoginUser({
    //     //       name: user.name,
    //     //       id: user.id,
    //     //       email: user.email,
    //     //       profile_url: "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
    //     //   });
    //     sns_ncmb_facebook_login(user);
    // }, function(error){
    //     alert('Error retrieving user profile' + JSON.stringify(error));
    // });
    
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
    // alert('call me');
});
}