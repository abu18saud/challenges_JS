//حذف آخر حرف
/*
قم بكتابة دالة function تستقبل نص من نوع string.
 تقوم الدالة بحذف آخر حرف من النص وإرجاع القيمة النصية بعد الحذف.
*/
function deleteLastChar(word) {
  // write your code here
  return word.slice(0, -1);
  //return word.substring(0, str.length - 1);
}

//مساحة المستطيل
/*
قم بكتابة دالة function تستقبل عددين صحيحين موجبين من نوع integer يمثلان قيم الطول والعرض للمستطيل. تقوم الدالة بحساب مساحة المستطيل وإرجاع نتيجته.
*/
function area_of_rectangle(width, height) {
  // write your code here
  return width * height;
}

//القيمة المقلوبة
/*
قم بكتابة دالة function تستقبل عدد صحيح وتقوم بإرجاع قيمة من نوع boolean، تقوم بإرجاع true إذا كان عدد مقلوب وfalse إذا كان غير ذلك.
*/
function isMirrored(num) {
  // write your code here
  return num.toString().split('').reverse().join('') == num.toString();
}

//تاريخ الميلاد
/*
قم بكتابة دالة function تستقبل تاريخ ووقت على شكل قيمة نصية string. تقوم الدالة باللتحقق ما إن كان التاريخ المُدخل تاريخ عُمر صحيح أم لا. بحيث تقوم الداله بإرجاع القيمة True في حال كان التاريخ المُدخل تاريخاً صحيحاً وتقوم بإرجاع القيمة False في حال كان التاريخ المُدخل غير صحيح وذلك حسب الشروط التالية:

١. أن يكون التاريخ المدخل قبل تاريخ اليوم الحالي

٢. أن يكون التاريخ المدخل قبل ٤ أعوام كحد أدنى من تاريخ اليوم الحالي

٣. أن يكون التاريخ المدخل لا يتجاوز 200 عام في الماضي عن التاريخ الحالي
*/
function kSumSubset(dateString) {
  // write your code here
  var now = new Date();
  var d = new Date(dateString);
  year = d.getFullYear();

  return d < now && (now - d) / (1000 * 3600 * 24 * 365) > 4 && year > (now.getFullYear() - 200);
  /* تعليل الحل
في الأساس ، يتم استخدام 1000 هنا فقط لتحويل الثواني إلى ميلي ثانية.

عدد الثواني في اليوم = 24 * 60 * 60 = 86400 ثانية.

1 ثانية = 1000 مللي ثانية.

لذلك بعد حساب التعبير ، تكون النتيجة بالمللي ثانية.

أيام * 24 * 60 * 60 * 1000 = يوم * 86400000 مللي ثانية
  */

//https://pitstop.manageengine.com/portal/en/kb/articles/formula-to-convert-milliseconds-to-days-hours-minutes-and-seconds
}

//بوابة الضرب المنطقي
/*
قم بكتابة دالة function تستقبل متغيرين من نوع boolean. تقوم الدالة بقيام العملية AND على المُتغيرين وإرجاع النتيجة.
*/
function logical_and(a, b) {
  // write your code here
  return a && b;
}

//الجمع التسلسلي

/*
قم بكتابة دالة function تستقبل عدد صحيح integer. تقوم الـدالة بجمع جميع الأعداد من 1 إلى الرقم الذي تم تمريره وإرجاع النتيجة.
*/
function number_sum(num) {
  // write your code here
  return Array(num + 1).fill(0).map((a, b) => a + b).reduce((a, b) => a + b, 0);
}

