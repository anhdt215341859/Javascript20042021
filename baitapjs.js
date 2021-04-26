
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
  let w //Chiều rộng
  let h //Chiều cao
  let l //Chiều dài
// @returns {Number} Diện tích
//
function getBoxVolume(w, h, l) {
    // Viết code ở đây
    let v = w * h * l;
    console.log(v);
  }

  console.log(getBoxVolume(11.5, 20.1, 30)); // 6000
  console.log(getBoxVolume(4, 5, 6)); // 120
  
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