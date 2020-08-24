$(function(){
    initialButton(defaultlanguage, data_store[2].operation);
    closeButton('../data-store/');
});
$(document).on('click', '#btn-set-acl-on-the-app-side', function(){ data_store_set_acl_on_the_app_side(); });
$(document).on('click', '#btn-gold-user-access', function(){ data_store_gold_user_access(); });
$(document).on('click', '#btn-other-user-access', function(){ data_store_other_user_access(); });