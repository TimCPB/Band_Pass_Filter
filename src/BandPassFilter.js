class BandPassFilter {
  constructor(){
    this.lowerLimit = 40
    this.upperLimit = 1000
  }

  filter(array){
      // array.forEach(function(num){
      //   if(num > this.upperLimit){
      //     num = this.upperLimit
      //   }
      //   else return num
      // })
      // return this.upperLimit
      if(array[0] > this.upperLimit){
        return [this.upperLimit]
      }
      else if(array[0] < this.lowerLimit){
        return [this.lowerLimit]
      }
      else
        return array
      }
    }