module.exports = function(req, res) {
  var NCMB = require('ncmb');
  var ncmb = new NCMB('YOUR_APPLICATION_KEY', 'YOUR_CLIENT_KEY');

  var Item = ncmb.DataStore('Item');
  Item.fetchAll()
      .then(function(items){
        // ランダムに 1 件選択
        item = items[Math.floor(Math.random() * items.length)];
        res.status(200).json(item);
      })
      .catch(function(error){
        res.status(500).json({error: 500});
      });
}