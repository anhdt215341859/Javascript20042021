// 10: for off chỉ sử dụng cho array
// const arrNames = ["ti","suu", "dan"]
// for (const value of arrNames) {
//     console.log(value)
// }

// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

//     function multiply(arr){ 
//     if(Array.isArray(arr))
//     {
//         let mod = 1;
//         for( let x of arr ) 
//         {
//             mod *=x;
//         }
//         return mod;
//     }

// else
// {
//     return "giá trị không phải mảng"
// }
//     }
// console.log(multiply([2, 3, 4])); // expect: 24

// for in
//  const arrNames = ["ti","suu", "dan"]
//  const teo= {
//      name="teo",
//      age= 24
//  }

//  for (const key in teo) {
//      console.log(key)
//      }
    

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

//  var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
//   function getkey(object){
//       for(const key in object){
//           console.log(key);
//           for (const keyBedroom in object[key]) {
//               console.log(keyBedroom)
//               for (const keyBed in object[key][keyBedRoom]){
//                   console.log(keyBed)
//               }
                   
//               }
//           }
//       }
  
  
//   getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
       
//  function getkey(object){
//      for (const key in object) {
//          console.log(key)
//          if (typeof object[key]=== 'object') {
//             getkey(object[key])
             
//          }
//      }
//  } 
 // 13 – Array method

//const arrNumbers = [1,2,3,4,5]
// thêm phần tử cuối mảng
//arrNumbers.push(11)
// xoá phần tử cuối mảng
//arrNumbers.pop()
//thêm phần tử đầu
//arrNumbers.unshift(113)
// xoá phần tử đầu
//arrNumbers.shift()
// xoá phần tử ở giữa
//arrNumbers.splice(1,4) // 1: vị trí xoá, 4: sô lượng xoá
// thêm phần tử ở giữa
// arrNumbers.splice(1,0, 3,4,5,6,7,8,9,10,11) // 1: vị trí xoá, vị trí 2: sô lượng xoá( ở đây là 0), từ vị trí 3 trở đi là thêm phần tử
// console.log(arrNumbers)

// Ví dụ 
// remove 3 giá trị cuối cùng

// function removeEnd(arr, n) {
// 	arr.splice(arr.length -1 - n, n)
//     return arr
// }

// console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));
//Ví dụ

//Viết hàm JavaScript để lấy phần tử đầu tiên của mảng. Truyền tham số 'n' sẽ trả về các phần tử 'n' đầu tiên của mảng

function first(arr, n) {
  return arr.slice(0,n)// hàm slice tạo 1 mảng mới( vị trí lấy, số lượng lấy)
}

console.log(first([1, 2, 3, 4, 5,6, 7, 8, 9], 7)); // expect [1, 2]

