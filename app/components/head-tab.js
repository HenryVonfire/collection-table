import Ember from 'ember';

export default Ember.Component.extend({
  maxSize:500,
  _validWidth(col, value, maxSize) {
    if(value > 40 && value !== NaN) {
      let sum = 0;
      for(let i in this.get('columns')){
        if(i !== col) {
          sum = sum + this.get(`columns.${i}`);
        }
      }
      if(sum + value <= maxSize){
        return true;
      }
    }
    return false;
  },
  _updateColumn(){
    for (let col in this.get('columns')) {
      const width = document.getElementById(col).style.width;
      const widthValue = parseInt(width.replace('px'));
      //console.log(col,widthValue,this.get('maxSize'),this._validWidth(col,widthValue,this.get('maxSize')));
      if(this._validWidth(col,widthValue,this.get('maxSize'))){
        this.set(`columns.${col}`,widthValue);
      } else {
         document.getElementById(col).style.width = this.get(`columns.${col}`);
      }
    }

  },
  mouseDown(){
    this.set('clicked',true);
  },
  mouseUp(){
    this.set('clicked',false);
  },
  mouseLeave(){
    this._updateColumn();
  },
  mouseMove(){
    if(this.get('clicked')){
        this._updateColumn();
    }
  }
});
