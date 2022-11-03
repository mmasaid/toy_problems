/*
Write a function recives array of numbers where the array have
these aspects,

 - consist of numbers only
 - length of array is 10
 - values of array are between 1 and 9
 - maybe contains onde  duplicated values

 When you call the function on array with duplicated values
 it returns them
*/


const fraud = (arr) => {
    const m = new Map()
    const result = arr.filter((item, idx) => {
        !m.get(item) ? m.set(item, 1) : m.set(item, m.get(item) + 1)
        if (m.get(item) !== 1) return item
    })

    return result.length == 1 ? `fraud items values are ${result[0]}` : 'one of the array factors are missed'
}

describe("Fraud", () => {
    describe("When the function is called with duplicated values", () => {
        it("returns one duplicated values", () => {
            expect(fraud([1, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual("fraud items values are 1")
        })

        it("returns more than one the duplicated values", () => {
            expect(fraud([1, 1, 2, 4, 4, 5, 6, 7, 8, 9])).toStrictEqual("one of the array factors are missed")
        })
    })
})


