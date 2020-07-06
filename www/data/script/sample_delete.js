function deleteData(req, res) {
    // 削除するIDを取得
    var id = req.query.id;

    var NCMB = require('ncmb');
    var ncmb = new NCMB('YOUR_APPLICATION_KEY', 'YOUR_CLIENT_KEY');

    var Item = ncmb.DataStore('Item');

    Item.equalTo("objectId", id)
        .fetchAll()
        .then(function(results) {
            var promises = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                // 該当のデータを削除する
                promises.push(object.delete());
            }
            return Promise.all(promises);
        })
        .then(function(result){
            // 成功
            res.send("DELETE data successfully")
         })
         .catch(function(err){
            // 失敗
            res.status(500).send("Error: " + err);
        });
}

module.exports = deleteData;