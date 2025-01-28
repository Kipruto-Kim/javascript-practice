// // let triangle = "#";
// // let counter = 0;
// // if ((counter = 1)) {
// //   console.log("#");
// //   if ((counter = 2)) {
// //     console.log("##");
// //   }
// //   if ((counter = 3)) {
// //     console.log("###");
// //   }
// //   if ((counter = 4)) {
// //     console.log("####");
// //   }
// //   if ((counter = 5)) {
// //     console.log("#####");
// //   }
// //   if ((counter = 6)) {
// //     console.log("######");
// //   }
// //   if ((counter = 7)) {
// //     console.log("#######");
// //   }
// // }
// let triangle = "#";
// for (let counter = 1; counter <= 7; counter++) {
//   console.log(triangle);
//   triangle += '#'
// }
let triangle = '#'
for ( let counter = 1; counter <= 7; counter++){
  console.log(triangle.repeat(counter))
}