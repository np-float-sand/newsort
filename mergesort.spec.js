describe('Merge Sort', function() {
    
    // beforeEach( () => {
    //     const result = split([38, 27, 43, 3, 9, 82, 10]) 
    //   });
        describe('Split Array function', function() {
        it('is able to split an array into two halves', function() {
        // your code here 
        const result = split([38, 27, 43, 3, 9, 82, 10]) 
        expect( result.length ).toEqual(2)
        });


        it('the halves have  expected size', function() {
            // your code here  
            const result = split([38, 27, 43, 3, 9, 82, 10])     
            expect( result[0].length).toEqual(3)
            expect( result[1].length).toEqual(4)
        });
    })

    describe('Merge function', function(){
            it('is able to merge two sorted arrays into one sorted array', function(){
            // test the merging algorithm
            const half1 = [3, 27, 38, 43];
            const half2 = [9,10, 82];
            const result2 = merge (half1, half2 )
            expect( result2).toEqual([3, 9, 10, 27, 38, 43, 82]);

            });
        });
    
    describe('merge sort', function() {
        it('does good things',
        function() {
            const sorted = mergeSort([38, 27, 43, 3, 9, 82, 10])

            expect( sorted ).toEqual([3, 9, 10, 27, 38, 43, 82])
        }
    )})

  });