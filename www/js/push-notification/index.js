$(function(){
    initialScreen(defaultlanguage, push_notification);
    closeButton('../../');
});
document.addEventListener("deviceready", function()
{
    // プッシュ通知受信時のコールバックを登録します
    window.NCMB.monaca.setHandler
    (
        function(jsonData){
            // 送信時に指定したJSONが引数として渡されます
            alert("callback :::" + JSON.stringify(jsonData));
        }
    );

    var successCallback = function (data) {
        //端末登録後の処理
        alert("Successfully :::" + JSON.stringify(data));
    };
    var errorCallback = function (err) {
        //端末登録でエラーが発生した場合の処理
        alert("Failure :::" + JSON.stringify(err));
    };
    // デバイストークンを取得してinstallation登録が行われます
    // ※ YOUR_APPLICATION_KEY,YOUR_CLIENT_KEYはニフクラ mobile backendから発行されたAPIキーに書き換えてください
    window.NCMB.monaca.setDeviceToken(
        ncmbproperty.application_key,
        ncmbproperty.client_key,
        successCallback,
        errorCallback
    );

    // 開封通知登録の設定
    // trueを設定すると、開封通知を行う
    window.NCMB.monaca.setReceiptStatus(true);

    alert("DeviceToken is registed");
},false);

function getInstallationId() {
    // 登録されたinstallationのobjectIdを取得します。
    window.NCMB.monaca.getInstallationId(
        function(id) {
            alert("installationID is: " + id);
        }
    );
}
$(document).on('click', '#btn-get-installation', function(){
    getInstallationId();
});