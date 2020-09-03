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
    expect(bandPassFilter.filter([30, 50, 1050])).toEqual([40, 50, 1000])
  })

  it("can set a new lower limit", function() {
    bandPassFilter.setLowerLimit(20)
    expect(bandPassFilter.filter([10, 30])).toEqual([20, 30])
  })

  it("can set a new upper limit", function() {
    bandPassFilter.setUpperLimit(1200)
    expect(bandPassFilter.filter([1500, 1100])).toEqual([1200, 1100])
  })

  it("throws an error for a non-integer value", function() {
    expect(function() { bandPassFilter.filter([50, "hello"]) } ).toThrowError()
    expect(function() { bandPassFilter.filter([null, 40]) } ).toThrowError()
    expect(function() { bandPassFilter.filter([60, 70.4]) } ).toThrowError()
  })
})