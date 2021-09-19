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



// تحويل رقم ثماني إلى رقم ثنائي
function binToOct(b) {
    // write your code here
    var octal = parseInt(b, 2).toString(8);
    return octal;
}

// تحويل رقم ثماني إلى رقم ثنائي
function octToBin(octal) {
    // write your code here
    var binary = parseInt(octal, 8).toString(2);
    return binary;
}

// جمع عددين داخل قيمة نصية

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

    if (expr.includes("+")) {
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
