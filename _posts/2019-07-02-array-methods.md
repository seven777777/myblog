---
layout: post
title: Array方法汇总（干货）
time: 2019.07.02 15:06:51
tags: JS 干货
category: work
excerpt : 本文针对Array进行了其的方法汇总，方便实际使用中的查阅。
---

### Array.from()
从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例

##### 用途：
1. 字符串转数组
2. 结合new Set()，进行数组去重
3. 遍历数组
4. 生成一个数字序列

```
<!--字符串转数组-->
Array.from('foo');// ["f", "o", "o"]

<!--去重-->
let s = new Set(['1', '2','2','3']); 
Array.from(s); // ['1','2','3']

<!--遍历数组-->
Array.from([1, 2, 3], x => x + x);// [2, 4, 6]

<!--生成一个数字序列-->
Array.from({length: 5}, (v, i) => i);// [0, 1, 2, 3, 4]
```

### Array.isArray()
用于确定传递的值是否是一个 Array

```
Array.isArray([1, 2, 3]); // true

Array.isArray({foo: 123});// false

Array.isArray(Array.prototype);// true
```
### Array.of()
创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

```
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```
### Array.prototype.concat()
用于合并两个或多个数组
> 此方法不会更改现有数组，而是返回一个新数组。

concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中
```
var arr1 = [[1],2];
var arr2 = [].concat(arr1);
arr1[0].push(2);

arr1 => [[1,2], 2];
arr2 => [[1,2], 2];


var arr3 = [1,2,3];
var arr4 = [].concat(arr1);
arr3.push(5);

arr3 => [1, 2, 3, 5];
arr4 => [1, 2, 3];

```
### Array.prototype.copyWithin()
浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
> 此方法会更改原有数组，但不会改变其长度

##### 语法
`arr.copyWithin(target[, start[, end]])`

不常用，至少目前我没用过。详情可点击[这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)了解。

它是用来移动 Array 或者 TypedArray 数据的一个高性能的方法

### Array.prototype.entries()
返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
> Iterator对象的next方法可以遍历迭代器取得原数组的[key,value]

```
<!--next方法获取键值-->
var arr = ["a", "b", "c"]; 
var iterator = arr.entries();
console.log(iterator.next());

/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next()返回一个对象，对于有元素的数组，
// 是next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
// 直到迭代器结束done才是true。
// next.value是一个["key","value"]的数组，是返回的迭代器中的元素值。

<!--for...of循环获得键值-->
var arr = ["a", "b", "c"];
var iterator = arr.entries();

for (let e of iterator) {
    console.log(e);
}

// [0, "a"] 
// [1, "b"] 
// [2, "c"]
```
##### 用于二维数组按行排序

```
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}

var arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
sortArr(arr);

/*(4) [Array(2), Array(5), Array(5), Array(4)]
    0:(2) [1, 34]
    1:(5) [2, 3, 44, 234, 456]
    2:(5) [1, 4, 5, 6, 4567]
    3:(4) [1, 23, 34, 78]
    length:4
    __proto__:Array(0)
*/
```

### Array.prototype.every()
测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
```
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```
### Array.prototype.fill()
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
##### 语法
arr.fill(value[, start[, end]])
```
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
### Array.prototype.filter()
创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
```
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```
### Array.prototype.find()
返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
### Array.prototype.findIndex()
返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
### Array.prototype.flat() *
按照一个可指定的深度递归遍历数组，将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

##### 用途

1. 扁平化嵌套数组

```
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity); 
// [1, 2, 3, 4, 5, 6]
```



2. 移除数组中的空项

```
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

### Array.prototype.flatMap()

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组
> 它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。

##### Map && flatMap

```
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 等价于
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]

// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```
### Array.prototype.forEach()

> 没有办法中止或者跳出 forEach() 循环，除了抛出一个异常。

若需要提前终止循环，可以使用：简单循环
+ for...of 循环
+ Array.prototype.every()
+ Array.prototype.some()
+ Array.prototype.find()
+ Array.prototype.findIndex()

最常用，不赘述。

### Array.prototype.includes()
判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

### Array.prototype.indexOf()
返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

### Array.prototype.join()
将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

### Array.prototype.keys()
返回一个包含数组中每个索引键的Array Iterator对象。

```
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```
### Array.prototype.lastIndexOf()
返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
### Array.prototype.map() 
创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```
### Array.prototype.pop()
从数组中删除最后一个元素，并返回该元素的值。
> 该方法更改数组的长度

### Array.prototype.push()
将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
### Array.prototype.reduce() 
对数组中的每个元素执行一个自定义的reducer函数(升序执行)，将其结果汇总为单个返回值。

##### 用途
1. 将二维数组转化为一维

```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
 ( acc, cur ) => acc.concat(cur),
 []
);
```

2. 计算数组中每个元素出现的次数

```
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

3. 按属性对object分类

```
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
```

4. 数组去重
 
```
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current) => {
    if(init.length === 0 || init[init.length-1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
```

还有其他详见[官网](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Array.prototype.reduceRight()
接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
##### reduce 与 reduceRight 之间的区别

```
var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.reduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  // "12345"
console.log(right); // "54321"
```
### Array.prototype.reverse()
颠倒数组中元素的位置，并返回该数组的引用。
> 该方法会改变原数组。

### Array.prototype.shift()
从数组中删除第一个元素，并返回该元素的值
> 此方法更改数组的长度。

### Array.prototype.slice()
返回一个含有提取元素的新数组，一个由 begin和 end（不包括end）决定的原数组的浅拷贝
> 原始数组不会被改变。

### Array.prototype.some()
测试是否至少有一个元素可以通过被提供的函数方法，该方法返回一个Boolean类型的值。

```
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

### Array.prototype.sort()
用原地算法对数组的元素进行排序，并返回数组。
> 默认排序顺序是根据字符串Unicode码点。

##### 对非 ASCII 字符排序
> 一些非英语语言的字符串需要使用 `String.localeCompare`。这个函数可以将函数排序到正确的顺序

```
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### Array.prototype.splice()
通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。
> 此方法会改变原数组。

```
<!--从第 2 位开始删除 0 个元素，插入“drum” 和 "guitar"-->
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除

<!--从倒数第 2 位开始删除 1 个元素-->
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]
```
### Array.prototype.toLocaleString()
返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

```
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```
[详情点击](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)。

### Array.prototype.toString()
返回一个字符串，表示指定的数组及其元素


```
var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
//"1,2,a,1a"
```

### Array.prototype.unshift()
将一个或多个元素添加到数组的开头，并返回该数组的新长度。
> 该方法修改原有数组

```
let arr = [4,5,6];
arr.unshift(1,2,3);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

### Array.prototype.values()
返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

```
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();
// 您的浏览器必须支持 for..of 循环
// 以及 let —— 将变量作用域限定在 for 循环中
for (let letter of eArr) {
  console.log(letter);
}
```
