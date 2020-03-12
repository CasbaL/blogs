// foreach
Array.prototype.forEach = function (fn){
  console.log('costom-foreach')
  if (typeof fn !== 'function') {
    throw new Error(`Uncaught TypeError: ${fn} is not a function at Array.forEach`)
  }
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const currentv = this[i];
    fn(currentv, i, this)
  }
}
// map
Array.prototype.map = function (fn){
  console.log('costom-map')
  if (typeof fn !== 'function') {
    throw new Error(`Uncaught TypeError: ${fn} is not a function at Array.map`)
  }
  const len = this.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    const currentv = this[i];
    res.push(fn(currentv, i, this))
  }
  return res;
}
// filter
Array.prototype.filter = function(fn) {
  console.log('costom-filter')
  if (typeof fn !== 'function') {
    throw new Error(`Uncaught TypeError: ${fn} is not a function at Array.filter`)
  }
  const len = this.length >>> 0;
  const res = [];
  for (let i = 0; i < len; i++) {
    const currentv = this[i];
    res.push(fn(currentv, i, this))
  }
  return res;
}





let arr = [1,2,3,4,5,6]
// arr.forEach((c,i,a)=> {
//   console.log(c,i,a)
// })
const res_map = arr.map((c) => c+1);
console.log(res_map)