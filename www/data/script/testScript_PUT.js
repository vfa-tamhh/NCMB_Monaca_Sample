function updateData(req, res) {
    // ヘッダーのデータを取得
    var username = req.get("username");
    var password = req.get("password");
    var id = req.query.id;
    var field1 = req.body.field1;
    var field2 = req.body.field2;
    
    var NCMB = require('ncmb');
    var ncmb = new NCMB('YOUR_APPLICATION_KEY', 'YOUR_CLIENT_KEY');
  
    if ( username != "admin" || password != "123456" ) {
      res.status(501);
      res.send("Authentication fail!");
      
    }
  
    // データを保存する
    var Item = ncmb.DataStore('Item');

    Item.equalTo("objectId", id)
        .fetchAll()
        .then(function(results) {
            var promises = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                object.set("field1", field1);
                object.set("field2", field2);
                // 該当のデータを削除する
                promises.push(object.update());
            }
            return Promise.all(promises);
        })
        .then(function(result){
            // 成功
            res.send("Update data successfully")
         })
         .catch(function(err){
            // 失敗
            res.status(500).send("Error: " + err);
        });
  }
  
  module.exports = updateData;