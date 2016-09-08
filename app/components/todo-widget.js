import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodo(text) {
      Ember.get(this, 'todos').pushObject({text: text});
    }
  }
});
