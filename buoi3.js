// 15 fillter
// Ví dụ:
//Phương thức filter () tạo một mảng chứa đầy tất cả các phần tử của mảng vượt qua một bài kiểm tra 
//được cung cấp dưới dạng một hàm).
// Cho một mảng các số, trả về một mảng mới chỉ có các số từ 5 trở lên
var arr_name = ["teo", "ti", "hoa", "tuan"]
const newarr = arr_name.filter(function(name){
    if (name.length<=3){
        return true;
    }
    return false ; // k đưa phần tử nào vào 
    
})
console.log(newarr)
// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }
// function myFunction()

// function fiveAndGreaterOnly(arr) {
		
// }