$(function(){
    initialButton(defaultlanguage, sns_cooperation[2].operation);
    closeButton('../sns-cooperation/');
    
  $(document).on('click', '#btn-twitter-login', function(){
    sns_twitter_login();
  });
  $(document).on('click', '#btn-twitter-link', function(){
    sns_twitter_link();
  });
  $(document).on('click', '#btn-twitter-unlink', function(){
    sns_twitter_unlink();
  });
  $(document).on('click', '#btn-twitter-logout', function(){
    sns_twitter_logout();
  });

});

