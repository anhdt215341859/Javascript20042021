
// bài 1
// khai báo biến
// let x = 8
// let y = 4
// let a 
// let b 
// let c 
// let d 
//  a = x + y
//  b = x - y
//  c = x * y
//  d = x / y
// console.log(a,b,c,d)

// bài 2 - kiểu dữ liệu
// var name = 'Đỗ Tiến Anh'
// var age = 25
// var manymoney = false
// var thoitiet = {
//     temp = 30, 
//     rain = false,
//     location = 'tan binh, sai gon, viet nam',
// }
// console.log(thoitiet.location)

//bài 4 arraylist : danh sách mảng
// khai báo mảng chứa các object mô tả danh sách các loài vật
//     var listAnimal = {
//         dv1: {name='cat', age= 2 },
//         dv2: {name= 'dog', age=3},
//         dv3: {name='pig', age=4},
//     };
// listAnimal.length
// console.log(listAnimal.length - 1)

//bài 5: toán tử
// tính chu vi, diện tích hình chữ nhật
// let width = 10;
// let height = 20;
// let s
// let p
// s = width * height;// diện tích
// p = (width + height) * 2;// chu vi
// console.log(p)
// tính chu vi, diện tích hình tròn

// const pi=3.14
// let x 
// let s = x * x * pi
// let p = 2 * x * pi

//bài 6: phép tính tăng giảm
    // var a = 10
    // var x = --a + a++ // x = 9 + 11
    // console.log(x)
    // var a = 10
    // var b = 18
    // var x = a-- + b++ - ++b - ++a
    // //  x = 9 + 19 - ++b - ++a
    // //  x = 9 + 19 - 19 - 11
    // // lưu ý, --a hoặc ++a, thì tính rồi lưu số a lại để thực hiện phép tính tiếp theo
    // console.log(x)

    // // bài 7 - phép gán
    // var a = 10;
    // // viết tất cả phép gán được học để gấp đôi số a
    // var x = a*2;
    // var y = a + a;
    // console.log(x)

    // bài 8 - FUNCTION

    // Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

//
 //* Tính thể tích khối hộp
 //* https://www.wikihow.com/Calculate-Volume-of-a-Box
//   let w //Chiều rộng
//   let h //Chiều cao
//   let l //Chiều dài
// // @returns {Number} Diện tích
// //
// function getBoxVolume(w, h, l) {
//     // Viết code ở đây
//     let v = w * h * l;
//     console.log(v);
//   }

//   console.log(getBoxVolume(11.5, 20.1, 30)); // 6000
//   console.log(getBoxVolume(4, 5, 6)); // 120
  
// bài 9 - object method 
/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
// var rectangle = { 
//   width: 5, 
//   height : 10, 
//   area = (width * height),
//     getWidth : function () {
//       console.log("chiều rộng là: " + this.width)
//     },
//     getHeight : function () {
//       console.log("chiều cao là: " + this.height)
//     },
//     getArea : function () {
//       //return (this.width * this.height);
//       console.log("diện tích là: " + this.area)
//     },
// };
// rectangle.getWidth()
// rectangle.getHeight()
// rectangle.getArea()

// 10 – Các phép so sánh

// Ví dụ:

// var a = [1, 2];//[1, 2];
// var b = [1, 2];//[1, 2];
// console.log(a === b);
// // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// === vừa so sánh giá trị vừa so sánh kiểu dữ liệu
// Ví dụ:

// var a = {
//   foo: 'bar'
// };

// var b = {
//   foo: 'bar'
// };

// console.log(a === b);
// // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

// Ví dụ : 

// var x = '1000';
// var y = '200';

// console.log(x > y);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
// so sánh kiểu biến trước, giá trị sau: kiểu biến đều là string, nên k so sánh giá trị => kết quả trả về là false

// 11 – Vòng lặp

// Ví dụ
// var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
//  var a = [1, 2, 4, 8, 16];
//  a.reverse();
//  console.log(a.length);
// var a = [1, 2, 4, 8, 16];
// let object = []
// for (let i = a.length - 1; i >= 0; i--){
//     object = object + a[i] + ",";  
// }
// console.log(object);

//Ví dụ
// var a = [1, 2, 3, 4, 5];
// var b = [10, 20, 30];
/**
 * Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */
//  var a = [1, 2, 3, 4, 5];
//  var b = [10, 20, 30];
//  let array= []; let c;
//  for (var j=0; j<b.length; j++){
//      for (var i=0; i<a.length; i++){
//          c= a[i] * b[j];
//          array= array + c + "; ";
//      }
//  }
//  console.log(array)

 //Ví dụ
/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
// let start
// let end
// function calculate(start, end) {
//     let mod = 1 
// if (start<end)    
//     {
//         for (let i = start; i< end; i++) {
//         mod = mod * i;  
//     }
//     console.log(mod)
//     }
// else if (start = end)
//     {
//     console.log(start)
//     }
// else
//     { 
//     console.log ("hãy nhập lại số start < end");
//     }
// }
// console.log(calculate(1, 4))  

// function kiemtrasoNguyento(number) {
//     let count= 0
//     if(number<2){
//         console.log("Khong phai la so nguyen to")
//         return
//     }

//     for(let i=2;i <= number; i++){
//         if (number%i ==0)
//         count++;
//     }
//     if (count ==1){
//         console.log("la so nguyen to")

//     }
//     else {console.log("không la so nguyen to")}
// }
// kiemtrasoNguyento(0)

// 12 – For in , for of



// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     let mod = 1;
//     for( let x of arr ) {
//         mod *= x;
//     }
//     return mod;
// }
// console.log(multiply([2, 3, 4])); // expect: 24

// for in
//  const arrNames = ["ti", "suu", "dan"]
//  let meo = {
//     name : 'do tien anh',
//     age: 24
//  }

//  for (let key in meo) {
//      console.log(key);
//      }
/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
//  var apartment = {
//     bedroom: 
//     {
//       area: 20,
//       bed: 
//         {
//          type: 'twin-bed',
//          price: 100
//         }
//     }
//   };
//   function getkey(object){
//       for (const key in object) {
//           console.log(key);
//           for (const keybedroom in object[key]) {
//               console.log(keybedroom);
//               for (const keybed in object[key][keybedroom]) {
//                   console.log(keybed);
//                   }
//               }
                  
//         }
//     }
//     getkey(apartment)

   /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */

 // cách 2 
// var apartment = {
//     bedroom: 
//     {
//       area: 20,
//       bed: 
//         {
//          type: 'twin-bed',
//          price: 100
//         }
//     }
//   };

//  function getkey(object){
//      for (const key in object) {
//          console.log(key)
//          if (typeof object[key]=== 'object') {
//             getkey(object[key])
             
//          }
//      }
//  } 
//  getkey(apartment)

// array method

// Ví dụ 
// remove n giá trị cuối cùng

// function removeEnd(arr,n){
//         arr.splice(arr.length - n, n)
//         console.log(arr)
// }
// removeEnd([1,2,3,4,5,6,7,8],4)
//Ví dụ

//Viết hàm JavaScript để lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng

// function first(arr, n) {
//         return arr.slice(0,n);
// }
// console.log(first([1,2,3,4,5,6,7,8], 2)); // expect [1, 2]

// 13 higher order function
// cộng các phần tử trong mảng rồi nhân kết quả với 2 dùng higher order function

// function nhan2(number){
//     return number*2
// }
// function tinhTong(arr, func){
//     let result = 0
//     for (const value of arr){
//         result += value
//     }
//     return func(result)
// }
// console.log(tinhTong([1,2],nhan2))

//**
// function nhan2(number){
//   return number*2
// }
// function bieuthuc(arr, funct){
//   add = 0;
//   for (const x of arr) {
//     add+=x;
//   }
//   return funct(add)
// }
// console.log(bieuthuc([1,2,3,4,5], nhan2))
/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
//  function double(num) {
//   return num * 2;
// } 

// function transform(numbers, callback) {
//     const neeArr=[]
//     for (const value of numbers){ // lấy từng phần tử trong mảng number ra
//         neeArr.push(callback(value)) // truyền mảng vừa tạo vào function call back (double) rồi lấy kết quả truyền vào lại hàm neeArr (đang là hàm rỗng)
//     } 
//     return neeArr // trả ra mảng mới
//     }
    
  
    
//     var output = transform([2, 4, 6], double);
//     console.log(output);
    // Expect: [4, 8, 12]

  //   function mod (num){
  //     return num * 2;
  //   }

  //   function double (arr, callback) {
  //       let total = []
  //       for (const x of arr) {
  //         total.push( callback( x ) );
  //       }
  //       return total;
  //   }
  // var output = double ([1,2,3,4, 5], mod)
  //   console.log(output)

      // 15 – Hàm map, 
    //thay đổi các giá trị phần tử trong mảng, k thay đổi kích thước trong mảng
    // khi sự thay đổi đc thực hiện, sẽ tạo ra mảng mới chứa mảng thay đổi
//Ví dụ

// const arrNumbers = [1, 2, 3, 4, 5]

// //syntax: array.map(function(currentValue, index, arr), thisValue)
// const newArrNumbers = arrNumbers.map(function(number, index) {
//     console.log(number)
//     return number
// })
// console.log(newArrNumbers)

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây
// var arr =[1, 2, 3, 4, 5]
// function tripple (num){
//   return num*3;
  
// }
// const newarr = arr.map(tripple)
// console.log(newarr)

// ví dụ map method 2
// Make an array of strings of the names
// function namesOnly(arr) {
//   //const namearr = arr.map(tripple)
// }

// var arrPerson = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ];
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// function getNamesOnly(item) {
//   var namesOnly = [item.name].join(" ");
//   return namesOnly;}
// //var name =arrPerson.map(getNamesOnly)
// //console.log(name);
// console.log(arrPerson.map(getNamesOnly));


// ví dụ
// viết hàm xuất diện tích với dữ liệu có trong mảng

// var arrayHeightWidth = ([
//   {
//     witdh: 4,
//     height : 6
//   },
//    {
//     witdh: 5,
//     height : 7
//   },
//   {
//     witdh: 1,
//     height : 3
//   },
//   {
//     witdh: 5,
//     height : 10
//   },
//   {
//     witdh: 10,
//     height : 10
//   }
// ]) 

// function renderAcreage(arr) {
//   var acreage = arr.witdh * arr.height;
//   return acreage;
// }
// console.log(arrayHeightWidth.map(renderAcreage))

// 16 - hàm fillter 
// Ví dụ:

// Cho một mảng các số, trả về một mảng mới chỉ có các số từ 5 trở lên
var arr = [1,2,3,4,5,6,7,8,9,10];
function fiveAndGreaterOnly(num) {
		return num > 5;
}
console.log(arr.filter(fiveAndGreaterOnly))
