// Define global variable
var ncmb = new NCMB(ncmbproperty.application_key,ncmbproperty.client_key);

/**
 * Begin quick start
 */
function quickStart_Datastore() {
    // 保存先クラスの作成
    var TestClass = ncmb.DataStore("TestClass");

    // 保存先クラスのインスタンスを生成
    var testClass = new TestClass();

    // 値を設定と保存
    testClass.set("message", "Hello, NCMB!")
        .save()
        .then(function(obj){
            // 保存に成功した場合の処理
            alert("Response data: " + JSON.stringify(obj));
        })
        .catch(function(err){
            // 保存に失敗した場合の処理
            alert("Error: " + JSON.stringify(err));
        });
}
/**
 * End quick start
 */
/**
 * Begin member management
 */
function member_registrationNewUser() {
    //　Userインスタンスの生成
    var user = new ncmb.User();
    // ユーザー名・パスワードを設定
    user.set("userName", "Yamada Tarou") /* ユーザー名 */
            .set("password", "password") /* パスワード */
            .set("phone_number", "090-1234-5678"); /* 任意フィールドも追加可能 */
    // ユーザーの新規登録処理
    user.signUpByAccount()
            .then(function (obj) {
                // 登録後処理
                alert("Response data: " + JSON.stringify(obj));
            })
            .catch(function (err) {
                // エラー処理
                alert("Error: " + JSON.stringify(err));
            });
}
function member_login_1() {
    // 1. ユーザー名とパスワードでログイン
    ncmb.User.login("Yamada Tarou", "password")
        .then(function(data){
        // ログイン後処理
        alert("Response data: " + JSON.stringify(data));
        })
        .catch(function(err){
        // エラー処理
        alert("Error: " + JSON.stringify(err));
        });
}
function member_login_2() {
    // 2. Userインスタンスでログイン
    var user = new ncmb.User({userName:"Yamada Tarou", password:"password"});
    ncmb.User.login(user)
        .then(function(data){
        // ログイン後処理
        alert("Response data: " + JSON.stringify(data));
        })
        .catch(function(err){
        // エラー処理
        alert("Error: " + JSON.stringify(err));
        });
}
function member_current_user() {
    // カレントユーザー情報の取得
    var currentUser = ncmb.User.getCurrentUser();
    if (currentUser) {
        alert("currentUser: " + JSON.stringify(currentUser));
        console.log("ログイン中のユーザー: " + currentUser.get("userName"));
    } else {
        alert("User has been logout!");
        console.log("未ログインまたは取得に失敗");
    }
}
function member_logout() {
    // ログアウト
    ncmb.User.logout();
    alert('Logout successfully');
}
function member_confirm_email() {
    var currentUser = ncmb.User.getCurrentUser();
    if (currentUser.isMailAddressConfirmed()) {
        // メールアドレス確認済み
        alert('Confirmed email address');
    } else {
        // メールアドレス未確認
        alert('Unconfirmed email address');
    }
}
function member_password_reset(email) {
    var user = new ncmb.User();
    user.set("mailAddress", email);
    user.requestPasswordReset()
        .then(function(data){
            // 送信後処理
            alert('送信後処理');
        })
        .catch(function(err){
        // エラー処理
            alert('エラー処理');
        });
}
function member_email_registration(email) {
    ncmb.User.requestSignUpEmail(email)
         .then(function(data){
            // 送信後処理
            alert('送信後処理');
         })
         .catch(function(err){
           // エラー処理
           alert('エラー処理');
         });
}
function member_login_with_email(email, password) {
    // メールアドレスとパスワードでログイン
    ncmb.User.loginWithMailAddress(email, password)
        .then(function(data){
        // ログイン後処理
        alert("ログイン後処理: " + JSON.stringify(data));
        })
        .catch(function(err){
        // エラー処理
        alert("エラー処理: " + JSON.stringify(err));
        });
}
function member_anonymous_authentication() {
    ncmb.User.loginAsAnonymous()
    .then(function(data){
      // ログイン後処理
      alert("ログイン後処理: " + JSON.stringify(data));
    })
    .catch(function(err){
      // エラー処理
      alert("エラー処理: " + JSON.stringify(err));
    });
}
// Grouping of members
function member_create_role() {
    var freePlanRole = new ncmb.Role("freePlan");
    freePlanRole.save()
                .then(function(role){
                // 非同期処理
                    alert("非同期処理: " + JSON.stringify(role));
                })
                .catch(function(err){
                //　エラー処理
                    alert("エラー処理: " + JSON.stringify(err));
                });

    var silverPlanRole = new  ncmb.Role("silverPlan");
    silverPlanRole.save(function(err, role){
        // コールバック処理
        if (err) {
            alert("エラー処理: " + JSON.stringify(err));
        } else {
            alert("非同期処理: " + JSON.stringify(role));
        }
    });
}
function member_add_member_to_role() {
    var user = new ncmb.User({userName:"goldUser", password:"pass"});
    user.signUpByAccount().then(function(user){
    //既存のロールを検索
    ncmb.Role.equalTo("roleName","goldPlan").fetch().then(function (role){
        if (JSON.stringify(role) === "{}") {
        //ロールが存在しない場合
        } else {
        //会員をロールに追加
        role.addUser(user).update().then(function (role){
            //成功した場合の処理
            alert(JSON.stringify(role));
        }).catch(function(err) {
            //失敗した場合の処理
            alert(JSON.stringify(err));
        });
        }
    }).catch(function (err){
        //検索に失敗した場合
        alert(JSON.stringify(err));
    });
    }).catch(function(err) {
    //会員登録に失敗した場合の処理
    alert(JSON.stringify(err));
    });
}
function member_add_child_role() {
    var subRole = new ncmb.Role("subRole").save().then(function (sub) {
    ncmb.Role.equalTo("roleName","goldPlan").fetch().then(function (role){
        if (JSON.stringify(role) === "{}") {
        //ロールが存在しない場合
        } else {
        //子ロールを追加
        role.addRole(sub).update().then(function (role){
            //成功した場合の処理
            alert(JSON.stringify(role));
        }).catch(function(err) {
            //失敗した場合の処理
            alert(JSON.stringify(err));
        });
        }
    }).catch(function (err){
        //ロールの検索に失敗した場合の処理
        alert(JSON.stringify(err));
    });
    }).catch(function(err) {
    //子ロールの保存に失敗した場合の処理
    alert(JSON.stringify(err));
    });
}
function member_member_child_role_acquisition() {
    ncmb.Role.fetch()
         .then(function(role){
           return role.fetchUser();
          })
         .then(function(users){
            for (var i = 0; i < users.length; i++) {
              var user = users[i];
              console.log(user.userName);
            }
            alert(JSON.stringify(users));
          })
         .catch(function(err){
            // エラー処理
            alert(JSON.stringify(err));
          });
}
/**
 * End member management
 */
/**
 * Begin data store
 */
function data_store_object_storage() {
    var GameScore = ncmb.DataStore("GameScore");
    var gameScore = new GameScore();

    gameScore.set("score", 1337)
            .set("playerName", "Taro")
            .set("cheatMode", false)
            .save()
            .then(function(gameScore){
            // 保存後の処理
                alert(JSON.stringify(gameScore));
            })
            .catch(function(err){
            // エラー処理
                alert(JSON.stringify(err));
            });
}
function data_store_get_object() {
    var GameScore = ncmb.DataStore("GameScore");
    GameScore.fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.score + " - " + object.get("playerName"));
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_update_object() {
    var GameScore = ncmb.DataStore("GameScore");
    var gameScore = new GameScore();

    gameScore.set("score", 1337)
         .set("cheatMode", false)
         .save() // gameScoreオブジェクトを保存
         .then(function(gameScore){
           gameScore.set("cheatMode", true);
           return gameScore.update(); // 保存したgameScoreオブジェクトを更新
         })
         .then(function(gameScore){
           // 更新後の処理
            alert(JSON.stringify(gameScore));
          })
         .catch(function(err){
           // エラー処理
           alert(JSON.stringify(err));
         });
}
function data_store_delete_object() {
    var GameScore = ncmb.DataStore("GameScore");
    var gameScore = new GameScore();
    gameScore.save() // gameScoreオブジェクトを保存
         .then(function(gameScore){
           gameScore.delete()
            .then(function(result){
                console.log(result); // true
                alert(JSON.stringify(result));
            })
            .catch(function(err){
            // エラー処理
            alert(JSON.stringify(err));
            });
         })
         .catch(function(err){
           // エラー処理
           alert(JSON.stringify(err));
         });
}
function data_store_pointer() {
    var Food = ncmb.DataStore("food");
    var food = new Food({name: "orange"});
    var Component = ncmb.DataStore("Component");
    var component = new Component({calorie: "50"});
    food.set("component", component);

    // foodと共にcomponentも保存される
    food.save()
        .then(function(food){
        // 保存後処理
        alert(JSON.stringify(food));
        })
        .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
        });
}
function data_store_relation() {
    // リレーションに追加するオブジェクトを作成
    var Food = ncmb.DataStore("food");
    var food1 = new Food({name: "orange", type: "fruit"});
    var food2 = new Food({name: "apple", type: "fruit"});

    // リレーションを作成してオブジェクトを追加
    var relation = new ncmb.Relation();
    relation.add(food1).add(food2);

    var MainObj = ncmb.DataStore("MainObj");
    var mainobj = new MainObj();

    // リレーションをプロパティに追加
    mainobj.set("foods", relation);

    // 保存（リレーションに追加されたオブジェクトも同時に保存されます）
    mainobj.save()
       .then(function(obj){
         // 保存後処理
         alert(JSON.stringify(obj));
       })
       .catch(function(err){
         // エラー処理
         alert(JSON.stringify(err));
       });
}
function data_store_using_basic_search() {
    // プレイヤーがTaroのスコアを降順で取得
    var GameScore = ncmb.DataStore("GameScore");
    GameScore.equalTo("playerName", "Taro")
         .order("score",true)
         .fetchAll()
         .then(function(results){
            console.log("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.score + " - " + object.get("playerName"));
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_basic_query_operator() {
    var GameScore = ncmb.DataStore("GameScore");
    // notEqualTo("playerName", "Taro")
    GameScore.notEqualTo("playerName", "Taro")
         .order("score",true)
         .fetchAll()
         .then(function(results){
            console.log("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.score + " - " + object.get("playerName"));
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_query_on_array() {
    // equalTo("arrayKey", 2) //match
    var GameScore = ncmb.DataStore("GameScore");
    GameScore.equalTo("arrayKey", 2)
         .order("score",true)
         .fetchAll()
         .then(function(results){
            console.log("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.score + " - " + object.get("playerName"));
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_query_for_pointer() {
    var GameScore = ncmb.DataStore("GameScore");
    // playerに参照先のオブジェクト情報が入る
    GameScore.include("player")
         .order("score",true)
         .fetchAll()
         .then(function(results){
            console.log("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              console.log(object.score + " - " + object.get("playerName"));
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_query_for_relation() {
    var RelatedObjects = ncmb.DataStore("RelatedObjects");

    // baseObjectのrelatingプロパティに関連付けられているRelatedObjectクラスのオブジェクトを検索
    RelatedObjects.relatedTo(baseObject, "relating")
              .fetchAll()
              .then(function(results){
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                  console.log (object.name);
                }
                alert(JSON.stringify(results));
              })
              .catch(function(err){
                console.log(err);
                alert(JSON.stringify(err));
              });
}
function data_store_query_composition() {
    var GameScore = ncmb.DataStore("GameScore");

    // GameScoreクラスでscoreが100以上500未満のオブジェクトを検索
    GameScore.lessThan("score", 500)
         .greaterThanOrEqualTo("score", 100)
         .fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log (object.score);
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_search_using_the_result_of_subquery() {
    var City = ncmb.DataStore("City");
    var Team = ncmb.DataStore("Team");
    var bigCity = City.greaterThan("population", 1000000);

    Team.select("hometown", "cityname", bigCity)
         .fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log (object.id);
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_specify_the_number_of_acquisition() {
    var City = ncmb.DataStore("City");
    var Team = ncmb.DataStore("Team");
    var bigCity = City.greaterThan("population", 1000000);

    Team.select("hometown", "cityname", bigCity)
         .limit(10)
         .fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log (object.id);
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_specifying_the_acquisition_start_position() {
    var City = ncmb.DataStore("City");
    var Team = ncmb.DataStore("Team");
    var bigCity = City.greaterThan("population", 1000000);

    Team.select("hometown", "cityname", bigCity)
         .skip(10)
         .fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log (object.id);
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_sort_search_results() {
    var City = ncmb.DataStore("City");
    var Team = ncmb.DataStore("Team");
    var bigCity = City.greaterThan("population", 1000000);

    Team.select("hometown", "cityname", bigCity)
         .order("score", true)
         .fetchAll()
         .then(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log (object.id);
            }
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
function data_store_acquisition_of_the_number_of_search_results() {
    var GameScore = ncmb.DataStore("GameScore");
    GameScore.equalTo("playerName", "Taro")
         .count()
         .fetchAll()
         .then(function(results){
            console.log(results.count); // 検索結果の件数を表示
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            console.log(err);
            alert(JSON.stringify(err));
          });
}
// making a rank
function data_store_save_score() {
    //スコアの保存
    var ScoreClass = ncmb.DataStore("HighScore");
    var score = new ScoreClass();
    score.set("name", name);
    score.set("score", 0);
    score.save()
        .then(function (data){
            //保存成功時の処理
            alert(JSON.stringify(data));
        })
        .catch(function (error){
            //失敗時の処理
            alert(JSON.stringify(error));
        });
}
function data_store_get_ranking() {
    //ランキングの取得
    var highScore = ncmb.DataStore("HighScore");
    highScore.order("score", true)
         .limit(5)
         .fetchAll()
         .then(function(results){
            //ランキング取得後の処理
            alert(JSON.stringify(results));
          })
         .catch(function(err){
            //エラー時の処理
            alert(JSON.stringify(err));
          });
}
// Access authority setting
function data_store_set_acl_on_the_app_side() {
    var acl = new ncmb.Acl();
    acl.setRoleReadAccess("Private", true) // Privateロールの読み込みを許可
   .setPublicReadAccess(false); // 全体の読み込みを拒否

    var Note = ncmb.DataStore("Note");
    var privateNote = new Note();
    privateNote.set("content", "This note is private!");

    // aclを設定
    privateNote.set("acl", acl);
    privateNote.save();
    alert('Done.')
}
/**
 * End data store
 */
/**
 * Begin Push notification
 */
function push_search_for_push_notifications() {
    ncmb.Push.equalTo("target","ios")
    .fetchAll()
    .then(function(pushs){
       for (var i = 0; i < pushs.length; i++) {
         console.log(pushs[i].message);
       }
       alert(JSON.stringify(pushs));
     })
    .catch(function(err){
       // エラー処理
       alert(JSON.stringify(err));
     });
}
function push_update_push_notifications() {
    ncmb.Push.equalTo("target","android")
    .fetchAll()
    .then(function(pushs){
       for (var i = 0; i < pushs.length; i++) {
         console.log(pushs[i].message);
         pushs[i].set("target",  ["ios"]);
         pushs[i].update() // 更新
            .then(function(push){
                alert(JSON.stringify(push));
            })
            .catch(function(err){
                alert(JSON.stringify(err));
            });
       }
       
     })
    .catch(function(err){
       // エラー処理
       alert(JSON.stringify(err));
     });
}
function push_delete_push_notifications() {
    ncmb.Push.equalTo("target","android")
    .fetchAll()
    .then(function(pushs){
       for (var i = 0; i < pushs.length; i++) {
         console.log(pushs[i].message);
         pushs[i].set("target",  ["ios"]);
         pushs[i].update() // 更新
            .then(function(push){
                return push.delete(); // 削除
            }).then(function(){
                // 削除後処理
                alert('deleted successfully.');
            })
            .catch(function(err){
                alert(JSON.stringify(err));
            });
       }
       
     })
    .catch(function(err){
       // エラー処理
       alert(JSON.stringify(err));
     });
}
// Narrowed delivery
function push_settings_in_the_app() {
    //JavaScript SDKのInstallationクラスを利用して端末情報を取得
    ncmb.Installation.fetchById("object_id")
	 .then(function(installation){
	    //独自フィールドの設定とデータストアへの保存
	    installation.set("region", "Asia");
	    return installation.update();
	  })
	 .then(function(installation){
	    // 更新後の処理
        alert(JSON.stringify(installation));
	  })
	 .catch(function(err){
	    // エラー処理
        alert(JSON.stringify(err));
	  });
}
// Rich push notification
function push_rich_push_notification() {
    var push = new ncmb.Push();
    push.set("immediateDeliveryFlag", true)
    .set("message", "Hello, World!")

    //リッチプッシュ通知用のURLを設定
    .set("richUrl", "https://www.google.com/")
    .set("target", ["ios", "android"]);

    push.send()
    .then(function(push){
      // 送信後処理
      alert(JSON.stringify(push));
     })
    .catch(function(err){
       // エラー処理
       alert(JSON.stringify(err));
     });
}
/**
 * End push notification
 */
/**
 * Begin SNS Cooperation
 */
// Facebook 
function sns_ncmb_facebook_login(response) {
    if (response.status === 'connected') {
      var auth = response.authResponse; // Facebookの認証レスポンス

      // --mobile backend実装部分--

      // expiresInをセッショントークンを有効期限（残秒）から失効日時に変換
      var expire_date = new Date(  auth.expiresIn * 1000 + (new Date()).getTime()).toJSON();
      var date = {__type:"Date", iso:expire_date}; // Date型を保存できる形式に成型
      // 認証に必要なパラメータをオブジェクトにまとめる
      var authData = {id:auth.userID,
                      access_token:auth.accessToken,
                      expiration_date:date};
      var user = new ncmb.User();
      user.signUpWith("facebook", authData) // ユーザの登録
          .then(function(user){
            return ncmb.User.loginWith(user); // SNS連携したユーザでログイン
          })
          .then(function(user){
            // ログイン後処理
            alert("User Info: " + JSON.stringify(user));
          })
          .catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
          });

      // --mobile backend実装部分ここまで--

    } else if (response.status === 'not_authorized') {
      alert(response.status);
    } else {
      alert('Please login to facebook!');
    }

}
// Apple
function sns_member_registration_and_authentication() {
    // ネイティブ実装を呼び出します
    window.cordova.plugins.SignInWithApple.signin(
    { requestedScopes: [0, 1] },
        function(data){
            // Apple ID認証が成功の場合、mobile backendに会員登録・認証を行う準備します。
            var authData = {
                id:data.user,
                access_token:data.authorizationCode,
                client_id:apple_property.client_id
            };
            var user = new ncmb.User();
            user.signUpWith("apple", authData) // 会員登録を行います。
                .then(function(resUser){
                    return ncmb.User.loginWith(resUser); // 登録した会員でログインを実施します
                })
                .then(function(user){
                    // ログイン後処理
                    alert("会員認証完了しました。");
                })
                .catch(function(err){
                    // エラー処理
                    alert("エラー" + JSON.stringify(err));
                });
        },
        function(err){
            // AppleIDでログイン失敗
            alert(JSON.stringify(err));
        }
    );
}
function sns_link_apple_credentials_to_existing_members() {
    // 登録済みの会員をログインします
    ncmb.User.login("userName", "passwrd")
    .then(function(data){
        // ログイン後処理
        window.cordova.plugins.SignInWithApple.signin(
            { requestedScopes: [0, 1] },
                function(data){
                    // Apple ID認証が成功の場合、会員の紐付けを行う準備します。
                    var authData = {
                        id:data.user,
                        access_token:data.authorizationCode,
                        client_id:apple_property.client_id
                    };
                    var user = ncmb.User.getCurrentUser();
                    user.linkWith("apple",authData)
                    .then(function(resUser){
                        // 成功時の処理
                        alert("会員の紐付けが完了しました。");
                    }).catch(function(err){
                        // エラーの処理
                        alert("エラー" + JSON.stringify(err));
                    });
                },
                function(err){
                    alert(JSON.stringify(err));
                }
        );
    })
    .catch(function(err){
        // ログインエラー処理
        alert(JSON.stringify(err));
    });
}
function sns_apple_id_and_unlink_function() {
    var user = ncmb.User.getCurrentUser();
    if (user) {
        user.unLinkWith("apple")
        .then(function(resUser){
            // 成功時の処理
            alert(JSON.stringify(resUser));
        }).catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
        });
    } else {
        // ログイン中ユーザが存在していません。
    }
}
function sns_implementation_of_logout_process() {
    // ログアウト
    ncmb.User.logout();
    // Apple ID認証情報の削除を行います
}
// Twitter
function sns_twitter_login() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        var authData = {
            id:result.additionalUserInfo.profile.id_str,
            screen_name: result.additionalUserInfo.profile.screen_name,
            oauth_consumer_key: twitter_key.oauth_consumer_key,
            consumer_secret: twitter_key.consumer_secret,
            oauth_token: token,
            oauth_token_secret: secret
        };
        var user = new ncmb.User();
        user.signUpWith("twitter", authData) // 会員登録を行います。
        .then(function(resUser){
            return ncmb.User.loginWith(resUser); // 登録した会員でログインを実施します
        })
        .then(function(user){
            // ログイン後処理
            alert("会員認証完了しました。");
        })
        .catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
        });

    }).catch(function(error) {
        alert("エラー" + JSON.stringify(error));
    });
}
function sns_twitter_link() {
    // 登録済みの会員をログインします
    ncmb.User.login("userName", "passwrd")
    .then(function(data){
        // ログイン後処理
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result);
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            var authData = {
                id:result.additionalUserInfo.profile.id_str,
                screen_name: result.additionalUserInfo.profile.screen_name,
                oauth_consumer_key: twitter_key.oauth_consumer_key,
                consumer_secret: twitter_key.consumer_secret,
                oauth_token: token,
                oauth_token_secret: secret
            };
            var user = ncmb.User.getCurrentUser();
            user.linkWith("twitter", authData) // 会員登録を行います。
            .then(function(resUser){
                return ncmb.User.loginWith(resUser); // 登録した会員でログインを実施します
            })
            .then(function(user){
                // ログイン後処理
                alert("会員認証完了しました。");
            })
            .catch(function(err){
                // エラー処理
                alert("エラー" + JSON.stringify(err));
            });

        }).catch(function(error) {
            alert("エラー" + JSON.stringify(error));
        });
    })
    .catch(function(err){
        // ログインエラー処理
        alert(JSON.stringify(err));
    });
}
function sns_twitter_unlink() {
    var user = ncmb.User.getCurrentUser();
    if (user) {
        user.unLinkWith("twitter")
        .then(function(resUser){
            // 成功時の処理
            alert(JSON.stringify(resUser));
        }).catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
        });
    } else {
        // ログイン中ユーザが存在していません。
        alert('Please login!');
    }
}
function sns_twitter_logout() {
    ncmb.User.logout();
    alert('Logout successfully!');
}
// Google
function sns_google_login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user.uid);
        var authData = {
            id:result.additionalUserInfo.profile.id,
            access_token:token
        };
        var user = new ncmb.User();
        user.signUpWith("google", authData) // 会員登録を行います。
        .then(function(resUser){
            return ncmb.User.loginWith(resUser); // 登録した会員でログインを実施します
        })
        .then(function(user){
            // ログイン後処理
            alert("会員認証完了しました。");
        })
        .catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
        });
        
        }).catch(function(error) {
            console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
function sns_google_link() {
    // 登録済みの会員をログインします
    ncmb.User.login("userName", "passwrd")
    .then(function(data){
        // ログイン後処理
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user.uid);
            var authData = {
                id:result.additionalUserInfo.profile.id,
                access_token:token
            };
            var user = ncmb.User.getCurrentUser();
            user.linkWith("google", authData) // 会員登録を行います。
            .then(function(resUser){
                return ncmb.User.loginWith(resUser); // 登録した会員でログインを実施します
            })
            .then(function(user){
                // ログイン後処理
                alert("会員認証完了しました。");
            })
            .catch(function(err){
                // エラー処理
                alert("エラー" + JSON.stringify(err));
            });
            
            }).catch(function(error) {
                console.log(error);
                alert("エラー" + JSON.stringify(error));
        });
    })
    .catch(function(err){
        // ログインエラー処理
        alert(JSON.stringify(err));
    });
}
function sns_google_unlink() {
    var user = ncmb.User.getCurrentUser();
    if (user) {
        user.unLinkWith("google")
        .then(function(resUser){
            // 成功時の処理
            alert(JSON.stringify(resUser));
        }).catch(function(err){
            // エラー処理
            alert("エラー" + JSON.stringify(err));
        });
    } else {
        // ログイン中ユーザが存在していません。
        alert('Please login!');
    }
}
function sns_google_logout() {
    ncmb.User.logout();
    alert('Logout successfully!');
}
/**
 * End SNS Cooperation
 */
/**
 * Begin file store
 */
function file_store_file_search() {
    ncmb.File.equalTo("mimeType", "text/plain")
    .order("createDate", true)
    .fetchAll()
    .then(function(files){
      // 検索後処理
      alert(JSON.stringify(files));
     })
    .catch(function(err){
      // エラー処理
      alert(JSON.stringify(err));
     });
}
function file_store_update_file_acl() {
    var acl = new ncmb.Acl();
    acl.setPublicReadAccess(true);
    ncmb.File.updateACL("abc.txt", acl)
    .then(function(data){
      // 更新後処理
      alert(JSON.stringify(data));
     })
    .catch(function(err){
      // エラー処理
      alert(JSON.stringify(err));
     });
}
function file_store_delete_file() {
    ncmb.File.delete("abc.txt")
    .then(function(data){
      // 削除後処理
      alert('削除後処理');
     })
    .catch(function(err){
      // エラー処理
      alert(JSON.stringify(err));
     });
}
function file_store_get_contents_of_file() {
    ncmb.File.download("abc.txt")
    .then(function(fileData){
      // ファイル取得後処理
      alert(JSON.stringify(fileData));
     })
    .catch(function(err){
      // エラー処理
      alert(JSON.stringify(err));
     });
}
function file_store_get_binary_data_and_display_image() {
    var reader = new window.FileReader();
    reader.onload = function() {   // need load handler
        var response=this.result;
        $('#img-view').html('');
        var html = '';
        html += '<img src="';
        html += response;
        html += '" alt="Images view" width="100%">';
        $('#img-view').html(html);
    };
    
    // ファイル名からファイルを取得
    var fileName = "mBaaS_image.png";
    // ダウンロード（データ形式をblobを指定）
      ncmb.File.download(fileName, "blob")
           .then(function(blob) {
               console.log(blob);
            // ファイルリーダーにデータを渡す
                reader.readAsDataURL(blob);
           })
           .catch(function(err) {
               console.log(err);
              alert(JSON.stringify(err));
           })

    
}
// Content distribution
function file_store_content_distribution() {
    var img_url = 'https://mbaas.api.nifcloud.com/2013-09-01/applications/mYyfZrg34S8UPX6B/publicFiles/mBaaS_image.png';
    $('#img-view').html('');
    var html = '';
    html += '<img src="';
    html += img_url;
    html += '" alt="Images view" width="100%">';
    $('#img-view').html(html);
}
/**
 * End file store
 */
/**
 * Begin script
 */
function script_get() {
    // パラメータを付与せず実行
    ncmb.Script
    //   .query({"name": "Input_Your_name"}) 
      .exec("GET", "testScript.js")
      .then(function(res){
        // 実行後処理
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
      });
}
function script_post() {
    ncmb.Script
      .set({"username":"admin", "password":"123456"})
      .data({"field1":"SDK POST 1", "field2":"SDK POST 2"})
      .exec("POST", "scriptPost.js")
      .then(function(res){
        // 実行後処理
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
      });
}
// Sample collection
function script_sample_get() {
    // パラメータを付与せず実行
    ncmb.Script
    //   .query({"name": "Input_Your_name"}) 
      .exec("GET", "sample_get.js")
      .then(function(res){
        // 実行後処理
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
      });
}
function script_sample_post() {
    ncmb.Script
      .set({"username":"admin", "password":"123456"})
      .data({"field1":"SDK POST 1", "field2":"SDK POST 2"})
      .exec("POST", "sample_post.js")
      .then(function(res){
        // 実行後処理
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
      });
}
function script_sample_put() {
    ncmb.Script
      .set({"username":"admin", "password":"123456"})
      .query({"id": "tAT1Vrcd8kuQa1Tl"})
      .data({"field1":"SDK POST 1", "field2":"SDK POST 4"})
      .exec("PUT", "scriptPut.js")
      .then(function(res){
        // 実行後処理
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        alert(JSON.stringify(err));
      });
}
function script_sample_delete() {
    // メソッドチェインでクエリストリングを付与し実行
    ncmb.Script
      .query({"id": "dmkuaVTaqrx9WRLl"})      // クエリストリングを指定
      .exec("DELETE", "sample_delete.js")
      .then(function(res){
        // 実行後処理
        console.log(res);
        alert(JSON.stringify(res));
      })
      .catch(function(err){
        // エラー処理
        console.log(err);
        alert(JSON.stringify(err));
      });
}
/**
 * End script
 */