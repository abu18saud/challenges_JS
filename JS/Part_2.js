/** المتوسط الحسابي
 * قم بكتابة function تستقبل مصفوفة array مكونة من أعداد صحيحة integer ثم قم بإرجاع المتوسط الحسابي لهذه الأعداد المرسلة في المصفوفة.
 */

 function average(array) {
    sum = array.reduce((a, b) => a + b, 0);
    len = array.length;
    return sum/len;
}

/**
 * 
 */