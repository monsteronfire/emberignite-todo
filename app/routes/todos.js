import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { text: 'Create Ember App' },
      { text: 'Read Ember Igniter' },
      { text: 'Master Ember' }
    ]
  }
});
