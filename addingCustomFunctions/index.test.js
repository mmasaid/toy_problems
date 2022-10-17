/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO


Array.prototype.customSort = function () {
    // https://www.geeksforgeeks.org/insertion-sort/

    let n = this.length
    if (n == 0) return 'Empty Array!'

    let i, key, j;
    for (i = 1; i < n; i++) {
        key = this[i];
        j = i - 1;

        while (j >= 0 && this[j] > key) {
            this[j + 1] = this[j];
            j = j - 1;
        }
        this[j + 1] = key;
    }
    return this
}


Array.prototype.getFirstElement = function () {
    if (this[0]) return this[0]
    else return 'Empty Array!'
}


Array.prototype.getLastElement = function () {
    if (!this[0]) return 'Empty Array!'

    let counter
    for (let i = 0; ; i++) {
        if (this[i]) counter = i
        else break
    }

    return this[counter]
}


Array.prototype.search = function (wanted) {
    // return this.filter((element) => element === wanted)

    if (this.length == 0) return 'Empty Array!'

    let results = []
    this.forEach((element, index) => {
        if (element === wanted) {
            let result = {}
            result.index = index
            result.value = element
            results.push(result)
        }
    })

    if (results.length == 0) return 'Not Found!'
    else return results
}



///////////////////////////////////


// console.log(arr.__proto__)

arr = [2, 6, 8, 4, 9, 2, 0, 4, 93, - 1]
arr2 = [1]
arr3 = []
arr4 = [true, 1, 'word']
arr5 = [1, 2, 3, 'word', 4, 2]

describe('Tests', () => {
    it('test customSort', () => {
        expect(arr.customSort()).toEqual(
            [-1, 0, 2, 2, 4, 4, 6, 8, 9, 93]
        );
        expect(arr2.customSort()).toEqual([1]);
        expect(arr3.customSort()).toEqual('Empty Array!');
    });
    it('test getFirstElement', () => {
        expect(arr5.getFirstElement()).toEqual(1);
        expect(arr3.getFirstElement()).toEqual('Empty Array!');
        expect(arr4.getFirstElement()).toEqual(true);
    })
    it('test getLastElement', () => {
        expect(arr.getLastElement()).toEqual(-1);
        expect(arr3.getLastElement()).toEqual('Empty Array!');
        expect(arr4.getLastElement()).toEqual('word');
    })
    it('test search', () => {
        expect(arr5.search(2)).toEqual(
            [{ index: 1, value: 2 }, { index: 5, value: 2 }]
        );
        expect(arr5.search(1)).toEqual(
            [{ index: 0, value: 1 }]
        );
        expect(arr5.search('1')).toEqual('Not Found!');
        expect(arr5.search('word')).toEqual(
            [{ index: 3, value: 'word' }]
        );
        expect(arr2.search(1)).toEqual(
            [{ index: 0, value: 1 }]
        );
        expect(arr3.search(1)).toEqual('Empty Array!');
    })
})
