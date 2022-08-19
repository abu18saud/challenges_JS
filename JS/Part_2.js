/** المتوسط الحسابي
 * قم بكتابة function تستقبل مصفوفة array مكونة من أعداد صحيحة integer ثم قم بإرجاع المتوسط الحسابي لهذه الأعداد المرسلة في المصفوفة.
 */

//للمبتدئين
function average(array) {
    sum = 0;

    for (i = 0; i < array.lenegth; i++) {
        sum += array[i];
    }

    return sum / array.lenegth;
}

//للمتقدمين
function average(array) {
    sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

/** الجمع التراكمي
 * قم بكتابة دالة function تستقبل مصفوفة array من نوع integer وتقوم بإرجاع حاصل جمع جميع الأعداد و عدد العناصر في الـ مصفوفة array.
 */
function cumulative_addition(elements_array) {
    // write your code here
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return [sum, array.length];
}

/** آخر عنصر في المصفوفة
 * قم بكتابة دالة function تستقبل مصفوفة array من نوع integer. تقوم الدالة بإرجاع قيمة آخر عنصر في المصفوفة.
 */
function last_elm(arr) {
    // write your code here
    return arr[arr.length - 1];
    //للمتقدمين
    //return arr.at(-1);
}

/** تكرار النص
 * قم بكتابة دالة function تستقبل قيمتين، قيمة نصية string وعدد صحيح موجب integer. تقوم الدالة بتكرار النص المدخل بحسب العدد الذي تم تمريره.
 */
function word_repeat(word, n) {
    // write your code here
    container = "";
    for (i = 0; i < n; i++) {
        container += word + " ";
    }

    return container;
}

/** مضروب العدد
 * قم بكتابة دالة function تستقبل عدد صحيح من نوع integer، وتقوم الدالة function بإرجاع مضروب العدد المدخل (factorial)
 */

function factorial(number) {
    // write your code here
    ans = 1;
    if (number == 0 || number == 1) {
        return ans;
    } else {
        for (i = number; i > 1; i--) {
            ans = ans * i;
        }
    }
    return ans;
}