

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: SPV Home Page');
};

// Handle drcError update on GET.
exports.drcerror_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: DRC error update : ' + req.params.drcError + ' (GET)');
};

// Handle drcError update on POST.
exports.drcerror_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: DRC error update : ' + req.params.drcError + ' (POST)');
};

// Handle spvCell update on GET.
exports.spvcell_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: SPV cell ' + req.params.spvCell + ' update for DRC error : ' + req.params.drcError + ' (GET)');
};

// Handle spvCell update on POST.
exports.spvcell_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: SPV cell update POST');
};