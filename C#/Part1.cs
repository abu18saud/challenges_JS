/** طرح عددين
 * قم بكتابة function تستقبل عددين، العدد الأول يمثل رقماً صحيحاً integer والعدد الثاني يمثل أيضا رقماً صحيحاً integer ، ثم قم بإرجاع حاصل طرح هذين العددين.
 */

public static int sub(int a, int b) {
    // write your code here
return a - b;
}

/** دمج قيمتين نصية
 * قم بكتابة function تستقبل قيمتين من نوع string ، وتقوم بجمعهما وإرجاعهما كقيمة واحدة من نوع string
 */

public static string concat_names(string name1, string name2) {
    // write your code here
	return name1 + " " + name2;
}

/** باقي قسمة عددين
 * قم بكتابة function تستقبل عددين، العدد الأول يمثل رقماً صحيحاً integer والعدد الثاني يمثل أيضا رقماً صحيحاً integer ، ثم قم بإرجاع حاصل باقي قسمة هذين العددين.
 */
public static int div_remainder(int a, int b) {
    // write your code here
return a % b;
}

  /** موقعي في خط الأعداد الصحيحة
   * قم بكتابة function تستقبل قيمة عددية integer وتقارن فيما إذا كانت القيمة المرسلة أصغر من أو أكبر من أو تساوي الصفر ثم قم بإرجاع قيمة نصية string تُعبّر عن حالة القيمة المرسلة.
   */
public static string less_or_more_than_zero(int number) {
    // write your code here
    if(number < 0){
      return "Less than zero";
    }else if(number > 0){
      return "Greater than zero";
    }else{
      return "Equal to zero";
    }
}

  /** النصوص المتشابهة
   * قم بكتابة function تستقبل قيمتين نصية string وتقوم بالتحقق فيما إذا كانتا متشابهتين أم غير متشابهتين في القيمة، ثم قم بإرجاع قيمة نصية string توضح ذلك.
   */
public static string is_same(string name1, string name2) {
    // write your code here
    if(name1 == name2){
      return "متشابهتين";
    }else{
      return "غير متشابهتين";
    }
}

/** عدد زوجي أم فردي
 * قم بكتابة function تستقبل عدد من نوع integer، تقوم الـ function بإرجاع قيمة من نوع string توضّح ما إذا كان العدد زوجي أو فردي
 */

 public static string odd_even(int number) {
    // write your code here
  if (number % 2 == 0) {
    return "زوجي";
  } else {
    return "فردي";
  }
}


