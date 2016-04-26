import Ember from 'ember';

export default Ember.Component.extend({
  column1: Ember.computed('columns.column1', function() {
    return `width:${this.get('columns.column1')}px;`.htmlSafe();
  }),
  column2: Ember.computed('columns.column2', function() {
    return `width:${this.get('columns.column2')}px;`.htmlSafe();
  }),
  column3: Ember.computed('columns.column3', function() {
    return `width:${this.get('columns.column3')}px;`.htmlSafe();
  }),
});
