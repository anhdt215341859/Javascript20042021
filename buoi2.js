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

 var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getkey(object){
      for(const key in object){
          console.log(key);
          for (const keyBedroom in object[key]) {
              console.log(keyBedroom)
              for (const keyBed in object[key][keyBedRoom]){
                  console.log(keyBed)
              }
                   
              }
          }
      }
  
  
  getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
       
 function getkey(object){
     for (const key in object) {
         console.log(key)
         if (typeof object[key]=== 'object') {
            getkey(object[key])
             
         }
     }
 } 