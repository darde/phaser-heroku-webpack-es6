var Preload = function(){};

Preload.prototype = {

  preload: function() {

    // Preload assets here...

  },

  create: function() {

    // call level one here...
    this.state.start('Level1');
  }
}

module.exports = Preload;