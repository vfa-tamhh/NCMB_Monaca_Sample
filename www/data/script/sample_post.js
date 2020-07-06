function saveData(req, res) {
  // POSTのデータを取得
  var field1 = req.body.field1;
  var field2 = req.body.field2;

  // ヘッダーのデータを取得
  var username = req.get("username");
  var password = req.get("password");

  var NCMB = require('ncmb');
  var ncmb = new NCMB('YOUR_APPLICATION_KEY', 'YOUR_CLIENT_KEY');

  if ( username != "admin" || password != "123456" ) {
    res.status(401);
    res.send("Authentication fail!");
  }

  // データを保存する
  var Item = ncmb.DataStore('Item');
  var item = new Item();
  item.set("field1", field1)
      .set("field2", field2)
      .save()
      .then(function(item){
        // 成功
        res.send("POST data successfully!");
      })
      .catch(function(err){
        // 失敗
        res.status(500).send("Error: " + err);
      });
}

module.exports = saveData;