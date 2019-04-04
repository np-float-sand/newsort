xdescribe("Bubble Sort", function() {

    it("handles an empty array", function() {
      expect(bubbleSort([])).toEqual([]);
    });
    it("handles one element", function() {
      expect(bubbleSort([2])).toEqual([2]);
    });
    it("handles more element", function() {
      expect(bubbleSort([2, 6, 4])).toEqual([2, 4, 6]);
     // expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
    });
    it("handles more element", function() {
      expect(bubbleSort([2, 3, 8, 9, 4, 6, 7, 5, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
   });