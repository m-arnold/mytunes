// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  addToPlaylist: function() {
    this.trigger('addToPlaylist', this);
  },

  removeFromPlaylist: function() {
    this.trigger('removeFromPlaylist', this);
  },

  abort: function() {
    this.trigger('abort', this);
  }
});
