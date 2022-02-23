let array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f");
console.log(array); //a f d e

array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f", "g", "h");
console.log(array); //a f g h d e

array = ["a", "b", "c", "d", "e"];
array.splice(1, 0, "f");
console.log(array); //a f b c d e

//array.push("f")
array = ["a", "b", "c", "d", "e"];
array.splice(array.length, 0, "f");
console.log("push: ", array); //a b c d e f

//array.pop()
array = ["a", "b", "c", "d", "e"];
array.splice(array.length - 1, 1);
console.log("pop: ", array); //a b c d

//array.shift()
array = ["a", "b", "c", "d", "e"];
array.splice(0, 1);
console.log("shift: ", array); //b c d e

//array.unshift("z")
array = ["a", "b", "c", "d", "e"];
array.splice(0, 0, "z");
console.log("unshift: ", array); //z a b c d e