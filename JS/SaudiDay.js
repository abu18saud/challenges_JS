// بمناسبة اليوم الوطني نهنئ قيادتنا الرشيدة وشعبنا العظيم ب 91عاماً من الطموح والعزة والافتخار


// طباعة string مع تحویل اول حرف الى Capital

function Captalize(str1) {
    // write your code here
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}

// تكرار نص عدد من المرات

function repeatFunc(str1, count) {
    // write your code here
    collect = "";
    for (i = 0; i < count; i++) {
        collect += str1;
    }
    return collect;
}

// طباعة الحرف المقابل بالترتیب العكسي
function replaceFunc(character) {
    // write your code here
    arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "P", "W", "X", "Y", "Z"];
    index = arr.indexOf(character);
    calc = 26 - (index + 1);
    return arr[calc];
    //C#
    /*     string[] arr = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "P", "W", "X", "Y", "Z" };
        int index = Array.FindIndex(arr, row => row == character);
        int calc = 26 - (index + 1);
        return arr[calc]; */

}

// التحقق من وجود رقم ضمن نطاق معیّن
function isInRange(x, y, z) {

    if (y > x && y < z) {
        return true;
    } else {
        return false;
    }

    // write your code here
    /*     var arr = [],
        c = z - x + 1;
    
        while ( c-- ) {
            arr.push(z--);
    
        } */

    //arr = Array(z).fill(x).map((_, i) => i * 1);



    //arr =  Array.apply(z, Array(Math.abs(z) - 1))
    /* sign = (z - x).toString().includes("-") ? -1 : 1;

    arr = new Array(Math.abs(Math.floor((z - x) / 1) + 1)).fill().map((_, i) => x + i * sign); */

    /*     arr = new Array.apply(x ,Array(Math.floor((z - x) / 1) + 1)).map(
            (v, k) => x + k * 1
          ); */

    //return arr;//arr.includes(y)
}

// حساب اطول كلمة في جملة
function findLongestWord(str1) {
    // write your code here
    var array = str1.split(/\s+/);

    var wordLength = array.map(function (i) {
        return i.length;
    });
    var largest = Math.max.apply(Math, wordLength);
    return array[wordLength.indexOf(largest)];
}


// مجموع الأعداد ال ُمدخلة
function OddOrEven(num) {
    arr = num.toString();
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;

    //sum = arr.reduce((a, b) => parseInt(a) + parseInt(b));
    // write your code here
}