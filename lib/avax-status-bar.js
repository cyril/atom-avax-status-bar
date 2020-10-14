var avax;

avax = null;

module.exports = {
  config: {
    display: {
      type: 'string',
      'default': 'right',
      'enum': ['left', 'right']
    },
    refresh: {
      type: 'integer',
      'default': 60
    }
  },
  activate: function() {
  },
  deactivate: function() {
    if (avax != null) {
      avax.destroy();
    }

    return avax = null;
  },
  consumeStatusBar: function(statusBar) {
    var AvaxStatusBarView;
    AvaxStatusBarView = require('./avax-status-bar-view');
    avax = new AvaxStatusBarView();
    avax.initialize(statusBar);
    return avax.attach();
  }
};
