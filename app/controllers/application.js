import Ember from 'ember';

export default Ember.Controller.extend({
  columns: {column1:40,column2:40,column3:40},
  actions:{
    reduce(col){
      let columns = this.get('columns'+'.'+col);
      columns = columns - 10;
      this.set('columns'+'.'+col,columns);
    },
    increase(col){
      let columns = this.get('columns'+'.'+col);
      columns = columns + 10;
      this.set('columns'+'.'+col,columns);
    }
  }
});
