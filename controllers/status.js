const status_module = require('../models/status');

exports.update_status = function(req, res){
    status_module.update_data(req, res);
  }