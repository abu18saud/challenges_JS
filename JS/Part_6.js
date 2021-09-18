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




// تحويل الأرقام إلى نصوص
// https://github.com/yamadapc/js-written-number
// https://newbedev.com/javascript-convert-number-to-words-code-example
// https://github.com/ASammour/TafqeetJs

function numToEng(n) {

    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    // write your code here
    if (n < 20) return num[n];
    var digit = n % 10;
    if (n < 100) return tens[~~(n / 10) - 2] + (digit ? "-" + num[digit] : "");
    if (n < 1000) return num[~~(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " and " + number2words(n % 100));
    return number2words(~~(n / 1000)) + " thousand" + (n % 1000 != 0 ? " " + number2words(n % 1000) : "");
}

function numToEng2(n) {
    return number2words(~~(n / 1000));
}


// التحويل من ١٢ ساعة إلى ٢٤ ساعة والعكس
function convertTime(time) {
    // write your code here
    var d = new Date(time);
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    tt = d.get

    //return `${year}/${mongth}/${day} | ${year}-${mongth}-${day} | ${mongth}/${day}/${year}`;


    if (time.includes("am") || time.includes("am")) {
        return hour;
    } else {
        return hour;
    }
}




// تحديد الأعداد الفردية و الزوجية

function oddsVsEvens(num) {
    // write your code here
    var odds = 0;
    var evens = 0;

    for (i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            evens += i;
            console.log(i);
        } else {
            odds += i;
        }
    }


    if (evens > odds) {
        return "even";
    } else if (evens < odds) {
        return "odd";
    } else {
        return "equal";
    }
}