// const getData = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log(num);
//   if (num > 5) {
//     resolve(34566542);
//   } else {
//     reject("no data available");
//   }
// });
// getData
//   .then((data) => console.log(data + 2))
//   .catch((err) => console.log("ERR :", err));

const data = new Date(2023);
if (data % 4 === 0) {
  console.log("new Year");
} else {
  console.log("no year");
}
