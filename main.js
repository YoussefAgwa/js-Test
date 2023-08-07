// [1] Event loop ?? IDK
// [2]  
// let myArr = [1,2,3,4,5];

// myArr.unshift(0); //To add Element in start of array
// myArr.push(6); //To add Element in end of array
// [3]
// output is 3

// [4]
// output i s
/*
  0 after exection directly
  1 after 1s from exection
  2 after 2s from exection
  3 after 3s from exection
  4 after 4s from exection
  and the output will shown one by one
*/

// [5]
// output is ['baz']

// [6]
// output is =>
/*
  1
  Hello
  true
*/

// [7]
// instanceof ?? IDK
///////////////////////////////////////////////////////////////////////////
// [Q3] 
// 1:-
//  [1]
// const objectTest = {
//   first : 10 ,
//   second : 20 ,
//   third : 30 ,
//   forth : "1hfdhuiu",
// };

// Object.prototype.num = 40;

// function sumObjectValues(obj) {
//   let sum =0;
//   for(let key in obj ){
//     if (typeof obj[key] == "number" && obj.hasOwnProperty(key)) {
//       sum += obj[key];
//     }
//   }
//   console.log(sum);
// }
// sumObjectValues(objectTest);
///////////////////////////////

// [2] 
// function big() {
//   console.log(`big`);
//     function smaller() {
//       console.log(`smaller`);
//         function smallest () {
//           console.log(`smaller`);
//         }
//         smallest();
//     }
//     smaller();

// }
// big();


// //[3]
// let arr = [1,2,3,4,500,80,6,7]
// let max;
// arr.forEach(function (el) {
//   if(arr[el] > arr[el+1]){
//     max = arr[el];
//   }
// })
// console.log(max);
// console.log(Math.max(...arr)); //

//[4]
// const day1 = new Date("12-01-2001").getTime();
// const day2 = new Date("12-01-2023").getTime();
// const res = (day2 - day1); 
// console.log(Math.floor(res / (1000 * 60 * 60 * 24 * 365)));

//[7] 
// let arr = [1,2,3,4];
// function reverse(arr) {
//   let arrRev =[];
//   for(let i = arr.length - 1 ; i >= 0 ; i--) {
//     arrRev.push(arr[i]);
//   }
//   console.log(arrRev);
// }
// reverse(arr);
// console.log(arr.reverse()); //another one

//[8]
let object1 = {
  a: 1,
  b: 2,
  c :3
}
let arr = [];
// function convert(obj) {
//     console.log(Object.entries(object));
// }
// convert(object);
/////////////// another soltuion
// function convert(obj) {
//   arr = Object.keys(obj).map((key) => [key,obj[key]]);  
//   console.log(arr);
// }
//   convert(object1);
