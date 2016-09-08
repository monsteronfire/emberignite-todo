import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      const text = Ember.get(this, 'text');
      Ember.get(this, 'onAdd')(text);
      Ember.set(this, 'text', '');
      this.$('input').focus();
    }
  }
});
