class BandPassFilter {
  constructor(){
    this.lowerLimit = 40
    this.upperLimit = 1000
  }

  filter(array){
      var newArray = []
      array.forEach(function(number) {
        if(number > this.upperLimit){
          newArray.push(this.upperLimit)
        }
        else if(number < this.lowerLimit){
          newArray.push(this.lowerLimit)
        }
        else
          newArray.push(number)
        }, this)
        return newArray
      }

  setLowerLimit(newLowerLimit){
    this.lowerLimit = newLowerLimit
  }

  setUpperLimit(newUpperLimit){
    this.upperLimit = newUpperLimit
  }
    }