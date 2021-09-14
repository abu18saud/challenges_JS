/** أكثر القيم تكرارا في المصفوفة
 * قم بكتابة function تستقبل array من نوع integer ، تقوم الـ function بإرجاع أكثر القيم تكرارا في المصفوفة
 */

function mostFrequentElement(arr) {
    // write your code here
    //return arr.reduce(
    //(a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null);
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}


/*
الأعداد الأولية في مصفوفة

قم بكتابة function تستقبل array من نوع integer ، وتقوم الـ function بإرجاع الأعداد الأولية prime numbers الموجودة في تلك الـ array
*/


function primesNums(array) {
    // write your code here
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    };

    return array.filter(isPrime);
}

/** الجذر التربيعي
 * قم بكتابة function تستقبل عدد من نوع double تقوم الـ function بحساب الجذر التربيعي له ثم قم بارجاع النتيجة من نوع double
 */

function squares(num) {
    // write your code here		
    return Math.sqrt(num);
}

/** الجذر التكعيبي
 * قم بكتابة function تستقبل عدد صحيح من نوع integer تقوم الـ function بايجاد الجذر التكعيبي له ثم قم بارجاع النتيجة من نوع double
 */

function cubes(num) {
    // write your code here
    c = 1 / 3;
    return Math.pow(num, c);
}

/** الجذر حسب الشرط
 * قم بكتابة function تستقبل عددين الأول عبارة عن عدد من نوع integer والثاني عبارة عن الجذر التربيعي لهذا الرقم من نوع double ، تقوم الـ function بالمقارنة ما إذا كان ناتج الجذر التربيعي مساوي للعدد المدخل ، فإذا كان الناتج صحيح تقوم الـ function بإرجاع الناتج وإن كان غير ذلك تقوم الـ function بإرجاع العدد صفر 0
 */


function rootCheck(sqr, num) {
    // write your code here
    if (Math.sqrt(sqr) == num) {
        return num;
    } else {
        return 0;
    }
}


/** المصفوفة الجذرية
 * 
 * قم بكتابة function تستقبل مصفوفة من نوع double تقوم الـ function بحساب الجذر التربيعي لكل عنصر ( index ) في المصفوفة ثم قم بارجاع النتيجة مصفوفة من نوع double
 */

function arrayRoot(arr) {
    // write your code here
    return arr.map(Math.sqrt);
}


/** حساب مابعد الفاصلة (decimal)
 * قم بكتابة function تستقبل قيمة نصية من نوع string ، يحتوي المدخل على عدد عشري أو صحيح ثم تقوم الـ function بحساب عدد الأرقام التي بعد الفاصلة point ثم قم بإرجاع النتيجة من نوع integer
 */

function DecimalPlaces(num) {
    // write your code here
    if (Math.floor(num) === num) return 0;
    return num.toString().split(".")[1].length;
}

// متوسط المصفوفة
/** قم بكتابة function تستقبل مصفوفة من نوع integer تقوم الـ function بحساب معدل متوسط المصفوفة ثم قم بارجاع النتيجة من نوع double
 */


function getMean(arr) {
    // write your code here
    return arr.reduce((a, b) => a + b) / arr.length;
}