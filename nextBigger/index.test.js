/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

const nextBigger = function(num) {
  if (num===0) return -1
  const numsarr = []
  while(num > 0){
    const removed = num%10;
    num-=removed
    num/=10
    if(removed < numsarr[numsarr.length-1]){
      num*=10
      num+=numsarr[0]
      num*=10
      num+=removed
      for(let i = 1; i < numsarr.length ; i++){
        num*=10
        num+numsarr[i]
      }
      return num;
    }
    numsarr.push(removed)
  }
  return -1
};

console.log(nextBigger(9),
nextBigger(111),
nextBigger(531));