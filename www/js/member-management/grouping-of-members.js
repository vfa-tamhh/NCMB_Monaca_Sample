$(function(){
    initialButton(defaultlanguage, member_management[3].operation);
    closeButton('../member-management/');
});
$(document).on('click', '#btn-create-role', function(){ member_create_role(); });
$(document).on('click', '#btn-add-member-to-role', function(){ member_add_member_to_role(); });
$(document).on('click', '#btn-add-child-role', function(){ member_add_child_role(); });
$(document).on('click', '#btn-member-child-role-acquisition', function(){ member_member_child_role_acquisition(); });