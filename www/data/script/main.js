var NCMB = NCMB || require("./lib/ncmb");
var ncmb = new NCMB("cb2151919d6f10cce43bd7453483e3a1319dd56c8596dc61b150ba76592808ca", "30b4f31d33ac5ec210c4ff20d52f0e6f9e21ab2ef2888d137029f178c6c0dece");
const fs = require('fs');

function registrationUser() {
    //　userインスタンスの生成
    var user = new ncmb.User();
    // ユーザー名・パスワードを設定
    user.set("userName", "Yamada Tarou") /* ユーザー名 */
        .set("password", "password") /* パスワード */
        .set("phone_number", "090-1234-5678"); /* 任意フィールドも追加可能 */
    // ユーザーの新規登録処理
    user.signUpByAccount()
        .then(function(){
            // 登録後処理
            console.log("registrationUser is OK");
        })
        .catch(function(err){
            // エラー処理
            console.log(err);
        });
}

function loginOption1() {
    // 1. ユーザー名とパスワードでログイン
    ncmb.User.login("Yamada Tarou", "password")
    .then(function(data){
        // ログイン後処理
        console.log(data);
    })
    .catch(function(err){
        // エラー処理
        console.log(err);
    });
}

function loginOption2() {
    // 2. userインスタンスでログイン
    var user = new ncmb.User({userName:"Yamada Tarou", password:"password"});
    ncmb.User.login(user)
        .then(function(data){
            // ログイン後処理
            console.log(data);
        })
        .catch(function(err){
            // エラー処理
            console.log(err);
        });
}

function getCurrentUser() {
    // カレントユーザー情報の取得
    var currentUser = ncmb.User.getCurrentUser();
    if (currentUser) {
        console.log("Current user name is: " + currentUser.get("userName"));
    } else {
        console.log("You are not login!");
    }
}

function logOut() {
    ncmb.User.logout();
    console.log("Logout");
}

function checkEmail() {
    var currentUser = ncmb.User.getCurrentUser();
    if (currentUser.isMailAddressConfirmed()) {
        // メールアドレス確認済み
        console.log("Confirmed!");
    } else {
        // メールアドレス未確認
        console.log("Did not confirm.");
    }
}

function resetPwd() {
    var user = new ncmb.User();
    user.set("mailAddress", "vfa.tamhh@gmail.com");
    user.requestPasswordReset()
        .then(function(data){
            // 送信後処理
            console.log(data);
        })
        .catch(function(err){
            // エラー処理
            console.log(err);
        });
}

function requestEmail(){
    ncmb.User.requestSignUpEmail("vfa.tamhh@gmail.com")
         .then(function(data){
            // 送信後処理
            console.log(data);
         })
         .catch(function(err){
           // エラー処理
           console.log(err);
         });
}

function loginEmail() {
    ncmb.User.loginWithMailAddress("vfa.tamhh@gmail.com", "password")
    .then(function(data){
      // ログイン後処理
      console.log(data);
    //   logOut();
    })
    .catch(function(err){
      // エラー処理
      console.log(err);
    });
}

function execute() {
    // registrationUser();
    // loginOption1();
    // loginOption2();
    // getCurrentUser();
    // logOut();
    // checkEmail();
    // resetPwd();
    // requestEmail();
    // loginEmail();
    
}

/**
 * execute the function.
 */
execute();