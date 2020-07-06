module.exports = function(req, res) {
  if (req.query.name) {
    res.send('Hello: ' + req.query.name);
  } else {
    res.send('Hello');
  }
}