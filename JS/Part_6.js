

// تحويل رقم ثنائي إلى رقم ثماني
// قم بكتابة دالة function تستقبل متغير من نوع string يعبر عن قيمة ثمانية binary number، ثم قم بإرجاع النتيجة بعد التحويل الى قيمة ست عشرية octal number بنوع int
function binToOct(b) {
    // write your code here
    var octal = parseInt(b, 2).toString(8);
    return octal;
}

// تحويل رقم ثماني إلى رقم ثنائي
// قم بكتابة دالة function تستقبل متغير من نوع int يعبر عن قيمة ثمانية octal number، ثم قم بإرجاع النتيجة بعد التحويل الى قيمة ثنائية binary number من نوع string.
function octToBin(octal) {
    // write your code here
    var binary = parseInt(octal, 8).toString(2);
    return binary;
}

// فصل الكلمات
//https://attacomsian.com/blog/javascript-array-lowercase-uppercase
//
function capSpace(txt) {
    // write your code here
    words = txt.split(/(?=[A-Z])/)
    word = words.map(name => name.toLowerCase());
    return word.reduce((a, b) => a + " " + b);
}

// طرح عددين بدون علامة الطرح

function mySub(num1, num2) {
    // write your code here
    // Iterate till there
    // is no carry
    if (num2 == 0)
        return num1;

    while (num2 != 0) {
        // borrow contains common
        // set bits of y and unset
        // bits of x
        let borrow = (~num1) & num2;

        // Subtraction of bits of x
        // and y where at least one
        // of the bits is not set
        num1 = num1 ^ num2;

        // Borrow is shifted by one
        // so that subtracting it from
        // x gives the required sum
        num2 = borrow << 1;
    }
    return num1;
}

// جمع عددين داخل قيمة نصية
// قم بكتابة دالة function تستقبل قيمتين نصية من نوع string ، في حال كانت القيمتين المدخلتين تحتوي على أعداد تقوم الدالة بجمع الأعداد و إرجاعها كقيمة نصية ، و في حال كانت أحد المدخلات تحتوي على أحرف تقوم بإرجاع -1 كقيمة نصية

function addStrNums(num1, num2) {
    // write your code here
    result = parseInt(num1) + parseInt(num2);
    if (isNaN(result)) {
        return -1;
    } else {
        return result;
    }
}

// التحقق من العملية الرياضية

function mathExpr(expr) {
    // write your code here
    arr = [];
    result = 0;
    words = txt.split(/(?=[A-Z])/)

    if (expr.includes(/(?=[*/-+])/)) {
        arr = expr.split('+');
        result = parseInt(arr[0]) + parseInt(arr[1]);
    } else if (expr.includes("*")) {
        arr = expr.split('*');
        result = parseInt(arr[0]) * parseInt(arr[1]);

    } else if (expr.includes("/")) {
        arr = expr.split('/');
        result = parseInt(arr[0]) / parseInt(arr[1]);

    } else if (expr.includes("-")) {
        arr = expr.split('-');
        result = parseInt(arr[0]) - parseInt(arr[1]);

    }
    else if (expr.includes("%")) {
        arr = expr.split('%');
        result = parseInt(arr[0]) % parseInt(arr[1]);

    } else {
        return false;
    }


    if (isNaN(result)) {
        return false;
    } else {
        return result;
    }
}
