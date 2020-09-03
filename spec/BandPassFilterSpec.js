describe("BandPassFilter", function(){
  var bandPassFilter

  beforeEach(function() {
    bandPassFilter = new BandPassFilter();
  })

  it("A new filter has a lower limit of 40 and an upper limit of 1000", function() {
    expect(bandPassFilter.lowerLimit).toEqual(40)
    expect(bandPassFilter.upperLimit).toEqual(1000)
  })

  it("returns [50] when given [50]", function() {
    expect(bandPassFilter.filter([50])).toEqual([50])
  })

  it("adjusts a value from above the upper limit", function() {
    expect(bandPassFilter.filter([1050])).toEqual([1000])
  })

  it("adjusts a value from below the lower limit", function() {
    expect(bandPassFilter.filter([20])).toEqual([40])
  })

  it("returns a filtered array", function() {
    expect(bandPassFilter.filter([50, 100, 1500])).toEqual([50, 100, 1000])
  })
})