/**
 * Config languge en/ja
 */
const defaultlanguage = "en";

/**
 * This const is your NCMB key
 */
const ncmbproperty = {
    application_key : "50069d5f10ad26c88dfee716f0a6692418ce06e97fdacfd66613779a468bd69b",
    client_key:"21163698bcf740eb4c6112532409a3ccc7fcde8ac4bf6ddcbea8bf21012f592d"
};

/**
 * Your Apple Client ID.
 */
const apple_property = {
    client_id:"com.apple.****"
}

/**
 * Your Twitter key :D
 */
const twitter_key = {
    oauth_consumer_key: "I3j88K1GiMe9pTWA4lWY6Z8r2",
    consumer_secret: "nKupP2FyVV9XTeItBQcw37H4iXUmd2BYl7v4pBpKcB0BvEMqY9"
}

/**
 * This const config the operation. 
 * If you wanna add new operation, please add below an array.
 * The index of items is important.
 * Below is a list of function include index and value.
 * 0 : Quick start - id: btn-quick-start
 * 1 : Member management - id: btn-member-management
 * 2 : Data store - id: btn-data-store
 * 3 : Push Notification - id: btn-push-notification
 * 4 : SNS cooperation - id: btn-sns-cooperation
 * 5 : File store - id: btn-file-store
 * 6 : Location information search - id: btn-location-information search
 * 7 : Script - id: btn-script
 */
const functionlist = [
    {
        id: "btn-quick-start",
        ja_name: "クイックスタート",
        en_name: "Quick start",
        link: "https://mbaas.nifcloud.com/doc/current/introduction/div_quickstart_javascript_monaca.html#gsc.tab=0",
        template: "template/quick-start/index.html",
        ja_description: "このページでは、mobile backendをMonacaアプリと連携させる手順を紹介します</br>Monacaとは、HTML5とJavaScriptでハイブリッドアプリがクラウド上で開発できる統合開発環境です。</br>Monacaクラウドでの開発には下記のブラウザ環境が必要です　※いずれも最新版を推奨</br>Google Chrome</br>Firefox</br>Safari</br>JavaScript、Adobe Flashが利用可能である必要があります",
        en_description: "In this page, we will introduce the procedure to integrate mobile backend with Monaca app.</br>Monaca is an integrated development environment that allows hybrid applications to be developed on the cloud using HTML5 and JavaScript.</br>The following browser environment is required for development with Monaca Cloud *The latest version is recommended for all</br>Google Chrome</br>Firefox</br>Safari</br>JavaScript, Adobe Flash must be available"
    },
    {
        id: "btn-member-management",
        ja_name: "会員管理",
        en_name: "Member management",
        link: "https://mbaas.nifcloud.com/doc/current/user/basic_usage_javascript.html#gsc.tab=0",
        template: "template/member-management/index.html",
        ja_description: "ニフクラ mobile backend での会員の認証方法は以下の4種類です。</br>ユーザー名・パスワードでの認証</br>メールアドレス・パスワードでの認証</br>会員管理 (JavaScript & Monaca) : メールアドレス認証</br>SNSアカウントでの認証</br>SNS連携 (JavaScript & Monaca) : Facebook連携</br>SNS連携 (JavaScript & Monaca) : Google連携</br>SNS連携 (JavaScript & Monaca) : Twitter連携</br>匿名認証</br>会員管理 (JavaScript & Monaca) : 匿名認証",
        en_description: "There are four ways to authenticate members with Nifukura mobile backend.</br>Username/password authentication</br>Authentication with email address and password</br>Member management (JavaScript & Monaca): Email address verification</br>Authentication with SNS account</br>SNS integration (JavaScript & Monaca): Facebook integration</br>SNS integration (JavaScript & Monaca): Google integration</br>SNS linkage (JavaScript & Monaca): Twitter linkage</br>Anonymous authentication</br>Member management (JavaScript & Monaca): Anonymous authentication"
    },
    {
        id: "btn-data-store",
        ja_name: "データストア",
        en_name: "Data store",
        link: "https://mbaas.nifcloud.com/doc/current/datastore/basic_usage_javascript.html#gsc.tab=0",
        template: "template/data-store/index.html",
        ja_description: "",
        en_description: ""
    },
    {
        id: "btn-push-notification",
        ja_name: "プッシュ通知",
        en_name: "Push Notification",
        link: "https://mbaas.nifcloud.com/doc/current/push/basic_usage_javascript.html#gsc.tab=0",
        template: "template/push-notification/index.html",
        ja_description: "このページでは、JavaScriptでプッシュ通知を配信する方法と、</br>Monacaを使って開発したアプリでプッシュ通知を受信するための設定と、</br>管理画面からプッシュ通知を配信する方法について説明していきます。</br>JavaScriptのSDKでは、プッシュ通知の送信・更新・検索・削除が可能となっています。</br>プッシュ通知の受信については、アプリ側でiOSやAndroidのSDKを利用した実装が必要となります。</br>ただし、Monacaを利用する場合はプッシュ通知プラグインを利用することでプッシュ通知の受信が可能になります。",
        en_description: "This page describes how to deliver push notifications with JavaScript,</br>settings for receiving push notifications with apps developed using Monaca, and</br>how to deliver push notifications from the management screen.</br>The JavaScript SDK allows you to send, update, search, and delete push notifications.</br>For receiving push notifications, it is necessary to implement using the SDK of iOS or Android on the application side.</br>However, if you use Monaca, you can receive push notifications by using the push notification plugin."
    },
    {
        id: "btn-sns-cooperation",
        ja_name: "SNS連携",
        en_name: "SNS cooperation",
        link: "",
        template: "template/sns-cooperation/index.html",
        ja_description: "",
        en_description: ""
    },
    {
        id: "btn-file-store",
        ja_name: "ファイルストア",
        en_name: "File store",
        link: "https://mbaas.nifcloud.com/doc/current/filestore/basic_usage_javascript.html#gsc.tab=0",
        template: "template/file-store/index.html",
        ja_description: "このページでは、ファイルストアの基本的な使い方について説明します。</br>ファイルストアでファイルをアップロード・ダウンロードするには、Fileクラスを利用します</br>このクラスのメソッドは全てクラスメソッドとなっており、インスタンスを生成せずに利用します。",
        en_description: "This page explains the basic usage of the file store.</br>To upload/download files in the file store, use File class.</br>The methods of this class are all class methods and are used without creating an instance."
    },
    {
        id: "btn-location-information-search",
        ja_name: "位置情報検索",
        en_name: "Location information search",
        link: "https://mbaas.nifcloud.com/doc/current/geopoint/basic_usage_javascript.html#gsc.tab=0",
        template: "template/location-information-search/index.html",
        ja_description: "NCMBGeoPointは、位置情報を扱うためのクラスです。",
        en_description: "NCMBGeoPoint is a class for handling location information."
    },
    {
        id: "btn-script",
        ja_name: "スクリプト",
        en_name: "Script",
        link: "https://mbaas.nifcloud.com/doc/current/script/basic_usage_javascript.html#gsc.tab=0",
        template: "template/script/index.html",
        ja_description: "ニフクラ mobile backend のスクリプト機能は、 準備や面倒な管理なしにサーバー上でコードの実行が行えるサービス です。Node.js / Ruby で記述したスクリプトファイルを mobile backend 上に登録し実行することで、結果をアプリ側で受け取ることが可能です。",
        en_description: "The scripting feature of Nifukura mobile backend is a service that allows you to execute code on the server without any preparation or cumbersome administration . By registering and executing the script file written in Node.js / Ruby on mobile backend, the result can be received on the application side."
    },
];
const quick_start = [
    {
        id: "",
        ja_name:"基本的な使い方",
        en_name:"Basic usage",
        template: "basic-usage.html",
        operation: [
            {
                id: "btn-quickstart-data",
                ja_name: "Insert Data store sample",
                en_name: "Insert Data store sample"
            }
        ]
    }
];
const member_management = [
    {
        id: "",
        ja_name: "基本的な使い方",
        en_name: "Username Registration",
        template: "basic-usage.html",
        operation: [
            {
                id: "btn-registration-user",
                ja_name: "ユーザーの新規登録",
                en_name: "New user registration"
            },
            {
                id: "btn-login-user",
                ja_name: "ログインー１",
                en_name: "Login 1"
            },
            {
                id: "btn-login-2-user",
                ja_name: "ログインー２",
                en_name: "Login 2"
            },
            {
                id: "btn-current-user",
                ja_name: "カレントユーザー",
                en_name: "Current user"
            },
            {
                id: "btn-logout-user",
                ja_name: "ログアウト",
                en_name: "Logout"
            },
            {
                id: "btn-confirm-email-user",
                ja_name: "メールアドレス確認の有無",
                en_name: "Confirmation of e-mail address"
            }
        ]
    },
    {
        id: "",
        ja_name: "メールアドレス認証",
        en_name: "Email address Registration",
        template: "email-address-verification.html",
        operation: [
            {id: "btn-member-registration-by-email-address", ja_name: "メールアドレスによる会員登録", en_name: "Member registration by email address"},
            {id: "btn-login-with-email-address", ja_name: "メールアドレスでのログイン", en_name: "Login with email address"},
            {id: "btn-confirm-email-user", ja_name: "メールアドレス確認の有無", en_name: "Confirmation of e-mail address"},
            {id: "btn-password-reset-user", ja_name: "パスワードのリセット",en_name: "Password reset"}
        ]
    },
    {
        id: "",
        ja_name: "匿名認証",
        en_name: "Anonymous authentication",
        template: "anonymous-authentication.html",
        operation: [
            {id: "btn-anonymous-authentication", ja_name: "匿名認証", en_name: "Anonymous authentication"}
        ]
    },
    {
        id: "",
        ja_name: "会員のグルーピング",
        en_name: "Grouping of members",
        template: "grouping-of-members.html",
        operation: [
            {id: "btn-create-role", ja_name: "ロールの作成", en_name: "Create Role"},
            {id: "btn-add-member-to-role", ja_name: "会員をロールに追加する", en_name: "Add member to role"},
            {id: "btn-add-child-role", ja_name: "子ロールの追加", en_name: "Add Child Role"},
            {id: "btn-member-child-role-acquisition", ja_name: "会員・子ロールの取得", en_name: "Member child role acquisition"}
        ]
    },
];
const data_store = [
    {
        id: "",
        ja_name: "基本的な使い方",
        en_name: "Basic usage",
        template: "basic-usage.html",
        operation: [
            {id: "btn-object-storage", ja_name: "オブジェクトの保存", en_name: "Object storage"},
            {id: "btn-get-object", ja_name: "オブジェクトの取得", en_name: "Get Object"},
            {id: "btn-update-object", ja_name: "オブジェクトの更新", en_name: "Update object"},
            {id: "btn-delete-object", ja_name: "オブジェクトの削除", en_name: "Delete object"},
            {id: "btn-pointer", ja_name: "ポインタ", en_name: "Pointer"},
            {id: "btn-relation", ja_name: "リレーション", en_name: "relation"},
            {id: "btn-using-basic-search", ja_name: "基本的な検索の利用", en_name: "Using basic search"},
            {id: "btn-basic-query-operator", ja_name: "基本的なクエリのオペレータ", en_name: "Basic query operator"},
            {id: "btn-query-on-array", ja_name: "配列に対するクエリ", en_name: "Query on array"},
            {id: "btn-query-for-pointer", ja_name: "ポインタに対するクエリ", en_name: "Query for pointer"},
            {id: "btn-query-for-relation", ja_name: "リレーションに対するクエリ", en_name: "Query for relation"},
            {id: "btn-query-composition", ja_name: "クエリの合成", en_name: "Query composition"},
            {id: "btn-search-using-the-result-of-subquery", ja_name: "サブクエリの結果を利用した検索", en_name: "Search using the result of subquery"},
            {id: "btn-specify-the-number-of-acquisition", ja_name: "取得件数の指定", en_name: "Specify the number of acquisition"},
            {id: "btn-specifying-the-acquisition-start-position", ja_name: "取得開始位置の指定", en_name: "Specifying the acquisition start position"},
            {id: "btn-sort-search-results", ja_name: "検索結果の並び替え", en_name: "Sort search results"},
            {id: "btn-acquisition-of-the-number-of-search-results", ja_name: "検索結果件数の取得", en_name: "Acquisition of the number of search results"}
        ]
    },
    {
        id: "",
        ja_name: "ランキングを作る",
        en_name: "Make a ranking",
        template: "make-a-ranking.html",
        operation: [
            {id: "btn-save-score", ja_name: "スコアの保存", en_name: "Save score"},
            {id: "btn-get-ranking", ja_name: "ランキングの取得", en_name: "Get ranking"}
        ]
    },
    {
        id: "",
        ja_name: "アクセス権限設定",
        en_name: "Access authority setting",
        template: "access-authority-setting.html",
        operation: [
            {id: "btn-set-acl-on-the-app-side", ja_name: "アプリ側でACLを設定する", en_name: "Set ACL on the app side"},
            {id:"btn-gold-user-access", ja_name:"Gold user access", en_name:"Gold user access"},
            {id:"btn-other-user-access", ja_name:"Other user access", en_name:"Other user access"}
        ]
    },
];
const push_notification = [
    {
        id: "",
        ja_name: "基本的な使い方",
        en_name: "Basic usage",
        template: "basic-usage.html",
        operation: [
            {id: "btn-search-for-push-notifications", ja_name: "プッシュ通知の検索", en_name: "Search for push notifications"},
            {id: "btn-update-push-notifications", ja_name: "プッシュ通知の更新", en_name: "Update push notifications"},
            {id: "btn-delete-push-notifications", ja_name: "プッシュ通知の削除", en_name: "Delete push notifications"}
        ]
    },
    {
        id: "",
        ja_name: "絞込み配信",
        en_name: "Narrowed delivery",
        template: "narrowed-delivery.html",
        operation: [
            {id: "btn-settings-in-the-app", ja_name: "アプリでの設定", en_name: "Settings in the app"}
        ]
    },
    {
        id: "",
        ja_name: "リッチプッシュ通知",
        en_name: "Rich push notification",
        template: "rich-push-notification.html",
        operation: [
            {id: "btn-rich-push-notification", ja_name: "リッチプッシュ通知", en_name: "Rich push notification"}
        ]
    },
];
const sns_cooperation = [
    {
        id: "",
        ja_name: "Facebook連携",
        en_name: "Facebook integration",
        template: "facebook.html",
        operation: [
        ]
    },
    {
        id: "",
        ja_name: "Apple連携",
        en_name: "Apple cooperation",
        template: "apple.html",
        operation: [
            {id: "btn-member-registration-and-authentication", ja_name: "会員登録・認証を行う", en_name: "Member registration and authentication"},
            {id: "btn-link-apple-credentials-to-existing-members", ja_name: "Appleの認証情報を既存会員に紐付ける", en_name: "Link Apple credentials to existing members"},
            {id: "btn-apple-id-and-unlink-function", ja_name: "AppleIDとUnLink機能", en_name: "Apple ID and UnLink function"},
            {id: "btn-implementation-of-logout-process", ja_name: "ログアウト処理の実装", en_name: "Implementation of logout process"}
        ]
    },
    {
        id: "",
        ja_name: "Twitter連携",
        en_name: "Twitter integration",
        template: "twitter.html",
        operation: [
            {id: "btn-twitter-login", ja_name: "会員登録・認証を行う", en_name: "Member registration and authentication"},
            {id: "btn-twitter-link", ja_name: "Twitterの認証情報を既存会員に紐付ける", en_name: "Link Twitter credentials to existing members"},
            {id: "btn-twitter-unlink", ja_name: "TwitterIDとUnLink機能", en_name: "Twitter ID and UnLink function"},
            {id: "btn-twitter-logout", ja_name: "ログアウト処理の実装", en_name: "Implementation of logout process"}
        ]
    },
    {
        id: "",
        ja_name: "Google連携",
        en_name: "Google integration",
        template: "google.html",
        operation: [
            {id: "btn-google-login", ja_name: "会員登録・認証を行う", en_name: "Member registration and authentication"},
            {id: "btn-google-link", ja_name: "Googleの認証情報を既存会員に紐付ける", en_name: "Link Google credentials to existing members"},
            {id: "btn-google-unlink", ja_name: "GoogleIDとUnLink機能", en_name: "Google ID and UnLink function"},
            {id: "btn-google-logout", ja_name: "ログアウト処理の実装", en_name: "Implementation of logout process"}
        ]
    }
];
const file_store = [
    {
        id: "",
        ja_name: "基本的な使い方",
        en_name: "Basic usage",
        template: "basic-usage.html",
        operation: [
            {id: "btn-file-search", ja_name: "ファイルの検索", en_name: "File search"},
            {id: "btn-update-file-acl", ja_name: "ファイルのACLを更新", en_name: "Update file ACL"},
            {id: "btn-delete-file", ja_name: "ファイルの削除", en_name: "Delete file"},
            {id: "btn-get-contents-of-file", ja_name: "ファイルの中身を取得", en_name: "Get contents of file"},
            {id: "btn-get-binary-data-and-display-image", ja_name: "バイナリデータを取得し画像を表示する", en_name: "Get binary data and display image"}
        ]
    },
    {
        id: "",
        ja_name: "コンテンツ配信",
        en_name: "Content distribution",
        template: "content-distribution.html",
        operation: [
            {id: "btn-view-image", ja_name: "View public image", en_name: "View public image"}
        ]
    },
];
const script_function = [
    {
        id: "",
        ja_name: "基本的な使い方",
        en_name: "Basic usage",
        template: "basic-usage.html",
        operation: [
            {id: "btn-script-get", ja_name: "Script GET", en_name: "Script GET"},
            {id: "btn-script-post", ja_name: "Script POST", en_name: "Script POST"}
        ]
    },
    {
        id: "",
        ja_name: "サンプル集",
        en_name: "Sample collection",
        template: "sample-collection.html",
        operation: [
            {id: "btn-script-get", ja_name: "Script GET", en_name: "Script GET"},
            {id: "btn-script-post", ja_name: "Script POST", en_name: "Script POST"},
            {id: "btn-script-put", ja_name: "Script PUT", en_name: "Script PUT"},
            {id: "btn-script-delete", ja_name: "Script DELETE", en_name: "Script DELETE"}
        ]
    }
];