// 10: for off chỉ sử dụng cho array
// const arrNames = ["ti","suu", "dan"]
// for (const value of arrNames) {
//     console.log(value)
// }

// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

    function multiply(arr){ 
    if(Array.isArray(arr))
    {
        let mod = 1;
        for( let x of arr ) 
        {
            mod *=x;
        }
        return mod;
    }

else
{
    return "giá trị không phải mảng"
}
    }
console.log(multiply([2, 3, 4])); // expect: 24