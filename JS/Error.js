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
    arrayNum = [];

    for (i = 0; i <= num; i++) {
        arrayNum.push(i);
    }

    even = arrayNum.filter(number => number % 2 == 0);
    odds = arrayNum.filter(number => number % 2 == 1);

    if (odds.reduce((a, b) => a + b) > even.reduce((a, b) => a + b)) {
        return "odds";
    } else if (odds.reduce((a, b) => a + b) < even.reduce((a, b) => a + b)) {
        return "even";
    } else {
        return "equal";
    }
}