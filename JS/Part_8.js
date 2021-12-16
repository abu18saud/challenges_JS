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


// حساب تكرار حرف
function countChar(sentence, ch) {
    // write your code here
    return (sentence.match(new RegExp(ch, "g")) || []).length;//تعبير نمطي
}

//جمع وعكس الكلمات
function reverseWords(str1, str2) {
    // write your code here
    arr = [str1, str2];
    return arr.reverse().join(', ');
}

//عكس حالة الحروف
function reverseCase(str) {
    // write your code here
    return str.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
}

//إضافة كلمة داخل نص
function say_hi_bye(name, num) {
    // write your code here
    return (num == 0) ? "Bye " + name : "Hi " + name;
}
