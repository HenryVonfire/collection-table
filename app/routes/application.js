import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var stuff = [];
    for (var i = 0; i < 1000; i++) {
      stuff.push({
        name: 'Name' + i,
        surname: 'Surnameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' + i,
        age: 'age' + i
      });
    }
    return stuff;
  }
});
