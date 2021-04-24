//1: tạo thư mục quản lí soure code
// git init tạo thư mục quản lí soure code
// 2:kiểm tra sự thay đổi của folder (git status)
//git status
// 3lưu trữ thay đổi: git add tenfile (lưu 1 file)
// git add .(lưu tất cả sự thay đổi)
// 4: commit vào mục repository
// git commit -m "lưu file buổi 1"
/*git config --global user.name "do tien anh"
git config --global user.email "anhdt.ute@gmail.com" */

// cac bước làm việc với quản
/* git init
tạo file mới
git add . (lưu file mới)
git commit -m "nội dung" (đóng gói lưu trữ cho phiên bản làm việc)
*/
//1. khai báo biến-- (dynamic type kiểu dữ liệu động)
//var a = 5 // có thể định nghĩa lại, không nên dùng
//let b =10 // chỉ định nghĩa 1 lần
//const c = 15 //hằng số, không được gán lại, bắt buộc có giá trị
//console.log (c)

//2. kiu du lieu
//let a =1000
//console.log (typeof a)// kiểm tra kiểu dữ liệu
//console.log (a)
// 3. object duyệt theo key
// const tienanh={
//     name:"đỗ tiến anh",
//     age:10

// }    //mảng
// //console.log (tienanh.name)
// // cach 2
// console.log (tienanh['name'])// muốn lấy tất cả các key

//4.array: duyệt theo index

// const arrName =["tienanh",'ti','tun']
// console.log(arrName[0])
//5 operator -toán tử
// let a=5
// let b=10
// let c= a++ - b++ - --a - --b + --b - --a +a-- + b--
// // c= 5 - 10 (a=6, b=11)
// // c=5-10-5-10
// // c=5-10-5-10

// console.log(a,b,c)// sau khi chạy lệnh xong, a và b sẽ được gán lại giá trị sau cùng
//6 fuction-- phương thức chương trình con
// function showName(name){
//     console.log(name)
// }
// function tinhTong(a,b){
//     return a+b
// }
// //conslose.log(showName("teo"))
// const ketQua = tinhTong(8,4)
// conslose.log(ketQua)

//7 object method
const teo = {
    name:"nguyễn văn tèo",
    age:10,
    showInfo : function(){
        consle.log("ten: " + this.name + " , tuoi:" + this.age)
    }
}
teo.showInfo()
