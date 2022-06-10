/**
 * صيغة البريد الإلكتروني
قم بكتابة دالة function تستقبل قيمة نصية من نوع string وتقوم بالتحقق مما إن كان يحتوي على بريد الكتروني صحيح أو لا، بحيث ترجع الـدالة function قيمة من نوع boolean
ملاحظة: شروط أن يكون بريد الكتروني صحيح
ان لا يبدأ النص برقم أو برمز
ان يحتوي الجزء الأول على خانه على الأقل
ان يحتوي النص على الرمز @
أن يتبع رمز @ حرف على الأقل ثم . ثم حرفين على الأقل
لا مانع من أن يحتوي الجزء الذي يسبق @ على الرموز التالية _.-
 */

function isEmail(email) {
    // write your code here
    //return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}

/** تشابه الترتيب الأبجدي
 * قُم بكتابة دالة function تستقبل قيمتين نصية. تقوم الدالة بترتيب القيمتين النصية أبجدياً وإرجاع أول حد تشابه بين القيمتين النصية.
 */
function similarOrdered(word1, word2) {
    // write your code here
    let w1 = word1.split('').sort();
    let w2 = word2.split('').sort();
    return w1.filter(x => w2.includes(x)).join('').substring(0,2);
}

function similarity(word1, word2) {
    var longer = word1.split('').sort().join('');
    var shorter = word2.split('').sort().join('');
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    // return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }

