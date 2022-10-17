/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

emptyArrayError = 'Empty Array!'


Array.prototype.customSort = function () {
    // https://www.geeksforgeeks.org/insertion-sort/

    let n = this.length
    if (n == 0) return Promise.reject(new Error(emptyArrayError))

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
    if (!this[0]) return Promise.reject(new Error(emptyArrayError))

    return this[0]
}


Array.prototype.getLastElement = function () {
    if (!this[0]) return Promise.reject(new Error(emptyArrayError))

    return this[this.length - 1]
}


Array.prototype.search = function (wanted) {
    if (this.length == 0) return Promise.reject(new Error(emptyArrayError))

    let results = []
    this.forEach((element, index) => {
        if (element === wanted) {
            let result = {}
            result.index = index
            result.value = element
            results.push(result)
        }
    })

    if (results.length == 0) return Promise.reject(new Error('Not Found!'))
    else return results
}



///////////////////////////////////


// console.log(arr.__proto__)

arr = [2, 6, 8, 4, 9, 2, 0, 4, 93, - 1]
arr2 = [1]
arr3 = []
arr4 = [true, 1, 'word']
arr5 = [1, 2, 3, 'word', 4, 2]

describe('customSort', () => {
    it('Should sort the array', () => {
        expect(arr.customSort()).toEqual([-1, 0, 2, 2, 4, 4, 6, 8, 9, 93]);
        expect(arr2.customSort()).toEqual([1]);
    });
    it('Should thow error', () => {
        expect(arr3.customSort()).rejects.toThrow(emptyArrayError);
    });
})

describe('getFirstElement', () => {
    it('Should return the first element of the array', () => {
        expect(arr5.getFirstElement()).toEqual(1);
        expect(arr4.getFirstElement()).toEqual(true);
    })
    it('Should thow error', () => {
        expect(arr3.getFirstElement()).rejects.toThrow(emptyArrayError);
    })
})

describe('getFirstElement', () => {
    it('Shuld return the last element of the array', () => {
        expect(arr5.getLastElement()).toEqual(2);
        expect(arr4.getLastElement()).toEqual('word');
    })
    it('Should thow error', () => {
        expect(arr3.getLastElement()).rejects.toThrow(emptyArrayError);
    })
})

describe('getFirstElement', () => {
    it('Should return an array of objects with the keys (value, index)', () => {
        expect(arr5.search(2)).toEqual([{ index: 1, value: 2 }, { index: 5, value: 2 }]);
        expect(arr5.search(1)).toEqual([{ index: 0, value: 1 }]);
        expect(arr5.search('word')).toEqual([{ index: 3, value: 'word' }]);
        expect(arr2.search(1)).toEqual([{ index: 0, value: 1 }]);
    })
    it('Should thow error', () => {
        expect(arr5.search('1')).rejects.toThrow('Not Found!');
        expect(arr3.search(1)).rejects.toThrow(emptyArrayError);
    })
})
