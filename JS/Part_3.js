/** عدد عناصر المصفوفة
 *  قم بكتابة function تستقبل مصفوفة array مكونة من أعداد صحيحة من نوع integer، ثم تقوم الدالة بإرجاع عدد عناصر لتلك المصفوفة.
 */
function num_elements(array) {
    // write your code here
    return array.length;
}

/** نوع القيمة المدخلة
 * قم بكتابة دالة function تستقبل قيمة نصية string. تقوم الـدالة بتحديد نوع القيمة الموجودة داخل القيمة النصية ما إذا كانت string أو integer أو float وإرجاع نوع القيمة.
 */
function input_type(value) {
    // write your code here
    //للمبتدئين - لا يعمل في كودرهب
    if (typeof value == "string") {
        return "string";
    } else if (typeof value == "number") {
        if (value.toString().includes(".") == true) {
            return "double";
        } else {
            return "integer";
        }
    }

    //للمتقدمين
    return isNaN(Number(value)) ? "string" : value % 1 === 0 ? "integer" : "double";
}

/** تحقق عن رقم داخل المصفوفة
 * قم بكتابة دالة function تستقبل مصفوفة array من نوع integer ، وتقوم بالتحقق من integer محدد مما إذا كان ضمن عناصر الـمفصوفه array أم لا، ثم تقوم بإرجاع النتيجة من نوع Boolean .
 */
function find_element(elements_array, element) {
    // write your code here
    return elements_array.includes(element);
}

/** العنصر الأكبر في المصفوفة
 * قم بكتابة دالة function تستقبل مصفوفة array من نوع integer، تقوم الـدالة function بإرجاع أكبر عدد في المصفوفة array.
 */
function max_element(arr) {
    // write your code here
    return Math.max.apply(Math, arr);
}

/** أصغر قيمة عددية
 * قم بكتابة دالة function تستقبل مصفوفة array من نوع integer ، وتقوم الـدالة function بإرجاع أصغر قيمة من بين تلك القيم
 */
function smallest_number(arr) {
    // write your code here
    return Math.min.apply(Math, arr);
}

/** الأُس التربيعي
 * قم بكتابة دالة function تستقبل عدد صحيح integer. تقوم الدالة بإرجاع الأُس التربيعي exponent squared لهذا العدد.
 */
function exponent_squared(number) {
    // write your code here
    return Math.pow(number, 2);
}


/** مطابقة مصفوفتين
 * قم بكتابة دالة function تستقبل مصفوفتين arrays من نوع string وتقوم بإرجاع قيمة true أو false اعتمادا على مطابقة جميع الكلمات في المصفوفة array2 مع الكلمات الموجودة في الـمصفوفة array1.
 */
function match_arrays(array1, array2) {
    // write your code here
    //للمتقدمين - لا تعمل
    return array2.reduce((a, b) => a && array1.includes(b), true);
    //حل Bakr A
    if (arr1.length == arr2.length) {
        return results = arr1.every(function (ele) {
            return arr2.includes(ele);
        });
    }
    else return false;
    //حل موسى الزهراني
    i = array1.length ;
    s = array2.length ;
    
    if(i != s){
      return false
    } else {
      return true
    }

}