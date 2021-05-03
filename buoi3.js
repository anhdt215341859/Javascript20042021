// 15 fillter
// Ví dụ:
//Phương thức filter () tạo một mảng chứa đầy tất cả các phần tử của mảng vượt qua một bài kiểm tra 
//được cung cấp dưới dạng một hàm).
// Cho một mảng các số, trả về một mảng mới chỉ có các số từ 5 trở lên
// var arr_name = ["teo", "ti", "hoa", "tuan"]
// const newarr = arr_name.filter(function(name){
//     if (name.length<=3){
//         return true;
//     }
//     return false ; // k đưa phần tử nào vào 
    
// })
// console.log(newarr)


// vis dụ:
// yêu cầu in ra mảng person dứoi 25 tuổi
//[tèo, tuán, hoa]
// const arrPerson =[
//         {id:1, name: 'tèo', age: 20},
//         {id:2, name: 'tủn', age: 25},
//         {id:3, name: 'hoa', age: 22},
//         {id:4, name: 'tuấn', age: 21},
//         {id:5, name: 'lan', age: 26},
// ]


// const filterarrperson = arrPerson.filter(function(person){
//         if (person.age<25){
//             return true;
//         }
//         return false ; // k đưa phần tử nào vào 
        
//     }).map(function(object){
//         return object.name
//     })
//     console.log(filterarrperson)

// var ages = [32, 33, 16, 40];
// function checkAdult(age) {
//   return age >= 18;
// }

// 16 hàm reduce (gộp (+_*/))
// const arrNums = [1, 2, 3, 4, 5]
// // reduce có hai tham số, muốn trả về kiểu dữ liệu gì thì khai báo tham số thứ 2 (thuộc kiểu dữ liệu trả về)
// const newArrNums = arrNums.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// //         lần 1: 
// //  accumulator : 0 (value) - biến tích luỹ
// //    currentValue: 1 (value)
// // return 5
// // lần 2: 
// // accumulator : 5 (value)
// // currentValue: 2 (value)
// // return 7
// },0)
// console.log(newArrNums)

// ví dụ 2 
// const arrPerson =[
//         {id:1, name: 'tèo', age: 20},
//         {id:2, name: 'tủn', age: 25},
//         {id:3, name: 'hoa', age: 22},
//         {id:4, name: 'tuấn', age: 21},
//         {id:5, name: 'lan', age: 26},
// ]
// const newArrPerson = arrPerson.reduce(function(accumulator, currentValue){
//         if(currentValue.age<25){
//             accumulator.push(currentValue.name);
//         }
//         return accumulator
// },[])
// console.log(newArrPerson)
    //    hàm reduce chỉ lưu biến tíhc luỹ, currentValue chỉ để check điều kiện

    // ví dụ
    // trả về {a :3, b:2 , c:1}
    // function countOccurrences(arr) {
    //     const object = arr.reduce(function(accumulator, currentValue){
    //         if (currentValue in accumulator){
    //             accumulator[currentValue]++;
    //         }else {
    //                 accumulator[currentValue] = 1
    //             }
    //         return accumulator
    //     },{})
    //     console.log(object)

    // }
    // countOccurrences(["a", "b", "c", "b", "a", "a"]);
    

    //16 hàm sort

    // const arrNums = [1,10, 12,11,8,7,14] // xuất ra [1,10.11,12,14,7,8]
    // arrNums.sort()
    // console.log(arrNums.sort(function (a, b){
    //     return a - b;
    // }))

    // const arrChar = ['a','A','b','B','c','C']
    // console.log(arrChar.sort())

    // 18 function scope (): các gía trị ưu tiên lấy trong () trước, không có mới tìm bên ngoài

    // let a = 5
    // function setValue(){
    //     let a = 10
    //     console.log(a)//10
    // }
    // setValue(10)
    // console.log(a) //5

    // 19:arrow function

//     const arrNums = [1, 2, 3, 4, 5]
// // kiểu cũ
//     // const newArr = arrNums.map(function(number){
//     //     return number *2 
//     // })

//     // kiểu arrow function
//     const newArr2 = arrNums.map((number) => {
//         return number * 2
//     })
// console.log ()


const teo ={
    name : "teo",
    age: 20,
}
