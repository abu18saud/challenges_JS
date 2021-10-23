//مطابقة مصفوفتين
function match_array(array1, array2) {
    // write your code here
    //return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
    // return array1.toString() == array2.toString();
    return array1.sort().toString() == array2.sort().toString();
}


// عداد رقمي تنازلي

function countDown(number) {
    // write your code here
    return Array(number + 1).fill(0).map((_, i) => i * 1).reverse().join(' ');
}


