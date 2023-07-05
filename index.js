/* find duplicate elements in array */

/* first method */

var arr1 = [3, 2, 1, 3, 4, 1, 2, 5];
var arr2 = [];
for (i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) {
    arr2.push(arr1[i]);
  }
}

console.log('first method', arr2);

/* second method */

var b = arr1.sort();
var c = [];
var temp = '';

for (i = 0; i < arr1.length; i++) {
  if (temp !== b[i]) {
    c.push(b[i]);
    temp = b[i];
  }
}

console.log('second method', arr2);

/* third method */

var obj = {};

for (var i of arr1) {
  obj[i] = true;
}
console.log('third method', Object.keys(obj));

/* fourth method */

console.log('fourth method', [...new Set(arr1)]);

/********/
