/** إرجاع أكبر وأصغر قيمة في المصفوفة
 * قم بكتابة function تستقبل مصفوفة array من نوع integer وتقوم بإرجاع أكبر عدد وأصغر عدد في المصفوفة.
 */
function largestSmallest(array) {
  // write your code here
  return [Math.max.apply(Math, array), Math.min.apply(Math, array)];
}

/** طرح عناصر مصفوفتين
 * قم بكتابة function تستقبل two arrays من نوع integer ، وتقوم الـ function بطرح العناصر الموجودة في الـ array الأولى من العناصر الموجودة في الـ array الثانية، ثم تقوم بإرجاعarray من نوع integer والتي تمثل حاصل طرح الـ arrays
 */

function subArrays(arr1, arr2) {
  // write your code here
  return arr2.map((n, i) => n - arr1[i]);
}


/** ترتيب مصفوفة تصاعديا
 *  قم بكتابة function تستقبل array من نوع integer , وتقوم الـ function بترتيب عناصر الـ array من الأصغر إلى الأكبر وإرجاع الـ array بعد عملية الترتيب
 */

function sortArray(array) {
  // write your code here
  return array.sort((a, b) => a - b);
}

/** ترتيب المصفوفة حسب الشرط
 * قم بكتابة function تستقبل قيمتين، القيمة الأولى تعبر عن array من نوع integer ، والقيمة الثانية من نوع string تعبر عن رمز لتعيين ترتيب الـ array فإذا كان الرمز المدخل B تقوم الـ function بترتيب عناصر الـ array من الأكبر إلى الأصغر وإذا كان الرمز S تقوم الـ function بالترتيب من الأصغر إلى الأكبر، ثم تقوم بإرجاع الـ array بعد عملية الترتيب
 */

function sortArray_2(array, type) {
  // write your code here
  switch (type) {
    case "S":
      return array.sort((a, b) => a - b);
      break;
    case "B":
      return array.sort((a, b) => b - a);
      break;
  }
}


/** تاريخ اليوم
 * قم بكتابة function تستقبل قيمة من نوع string تمثل تاريخ اليوم، تقوم الـ function بطباعة تاريخ اليوم بـ 3 تنسيقات مختلفة وإرجاعها كقيمة نصية كما في الأمثلة التالية .
 */

function date_format(date) {
  // write your code here 
  //"2020/1/1 | 2020-1-1 | 1/1/2020"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  container = "";
  var d = new Date(date);
  container += new Intl.DateTimeFormat('ko-KR').format(d).replace('.', '/').replace('.', '/').replace('.', '/') + " | ";
  container += d.toISOString().slice(0, 10) + " | ";
  container += new Intl.DateTimeFormat('en-US').format(d);
  return container;
}

function date_format_2(date) {
  // write your code here 
  //"2020/1/1 | 2020-1-1 | 1/1/2020"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

  //var d = (date).toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/,'$2/$1/$3 | $3-$2-$1 | $2/$1/$3');//    //"2020/1/1 | 2020-1-1 | 1/1/2020"
  //String.format("{0}/{1}/{2}", day, mongth, year)
  //  return `${year}/${mongth}/${day} | ${year}-${mongth}-${day} | ${mongth}/${day}/${year}`;


  var d = new Date(date);
  day = d.getDate();
  mongth = d.getMonth() + 1;
  year = d.getFullYear();
  return `${year}/${mongth}/${day} | ${year}-${mongth}-${day} | ${mongth}/${day}/${year}`;
}

/** حذف عنصر في المصفوفة
 * قم بكتابة function تستقبل قيمتين الأولى array من نوع integer والثانية عدد صحيح موجب Non-negative integer ، بحيث تقوم الـ function بحذف العنصر الذي يحتوي على نفس رقم الـ index الذي تم تمريره للـ function من الـ array المرسلة ثم تقوم بإرجاع array جديدة ناتجة عن عملية الحذف
 * https://code.sololearn.com/WpSAGR2SApFU/?ref=app
 */


function deleteElementInArray(arr, index) {
  // write your code here
  delete arr[index];
  return arr;
}