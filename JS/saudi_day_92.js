//إيجاد العنصر 92
/*
قم بكتابة دالة تستقبل مصفوفة من الأعداد الصحيحة. تقوم هذه الدالة بإيجاد رقم الخانة للعنصر 92 وإرجاع قيمته. في حال عدم وجود العنصر 92، تقوم الدالة بإرجاع القيمة 92.
*/

function findElement92(numbers) {
    // write your code here
    if (numbers.indexOf(92) == -1) {
        return 92;
    } else {
        return numbers.indexOf(92);
    }
}

//استخراج العنصر الأول والأخير في المصفوفة

/*
قم بكتابة دالة تستقبل مصفوفة رقمية وتقوم بإرجاع مصفوفة جديدة تحتوي على العنصر العنصر الأول و الأخير من المصفوفة الممررة.
*/

function getFirstLastEl(numbers) {
    // write your code here
    if (numbers.length < 2) {
        return numbers;
    } else {
        arr = [numbers[0], numbers[numbers.length - 1]];
        return arr;
    }
}

// حساب القرن من السنة
/*
قم بكتابة دالة تستقبل عدد صحيح يُمثل سنة ميلادية. تقوم الدالة بحساب لأي قرن ترجع تلك السنة الميلادية.
*/

function getCentury(year) {
    // write your code here
    century = year * 0.01;
    return Math.ceil(century);
}

//ارجاع جميع عنواين IP بين عنوانين مختلفين
/*
قم بكتابة function تقوم باستقبال متغيرين من نوع String يرمزان لعنوانين لل IP ومتغير ثالث يرمز لمجموعة من عنوانين ال IP تقوم ال function بارجاع جميع العناوين اللتي تقع بين IP1 و IP2 من مجموعة العناوين المعطاه مع مراعاة الترتيب
*/
function get_available_IPs(ip1, ip2, addresses) {
    // write your code here
    return addresses.sort().reverse().filter(value => value > ip1 && value <= ip2);
    // return function (a) {  };

}

//نقل الرقم في المصفوفة
/*
قم بكتابة دالة function تستقبل مُدخلين، مصفوفة من الأرقام الصحيحة، ورقم صحيح. تقوم الدالة بنقل جميع الأرقام التي تمثل الرقم الصحيح إلى نهاية القائمة مع الحفاظ على ترتيب العناصر الاخرى، وإرجاع المصفوفة بالترتيب الجديد.
*/

function extractNumber(num, nums) {
    // write your code here
    withoutRepetition = nums.filter(a => a !== num);
    remainder = nums.length - withoutRepetition.length;
    for (let i of Array(remainder).fill(num)) {
        withoutRepetition.push(i);
    }
    return withoutRepetition;
}


//سنوات اليوم الوطني

/*
قم بكتابة دالة تستقبل عدد صحيح يُمثل السنة. تقوم الدالة بإرجاع عدد السنوات منذ بداية اليوم الوطني حتى السنة المُمررة.
*/

function yearsSinceNationalDay(year) {
    // write your code here
    const foundation = 1930;

    if ((year - foundation) <= 0) {
        return 'Not Valid Year Entry';
    } else {
        return (year - foundation).toString();
    }
}

//رقم اليوم الوطني
/*
قم بكتابة دالة تستقبل عدد صحيح يُمثل اليوم الوطني السعودي. تقوم هذه الدالة بإرجاع اسم الملك الذي يتوافق عهده مع ذلك اليوم الوطني.
*/

function getKingName(nationalDay) {
    // write your code here
    if (nationalDay <= 23) {
        return "عبدالعزيز";
    } else if (nationalDay <= 34) {
        return "سعود";
    } else if (nationalDay <= 45) {
        return "فيصل";
    } else if (nationalDay <= 52) {
        return "خالد";
    } else if (nationalDay <= 75) {
        return "فهد";
    } else if (nationalDay <= 80) {
        return "عبدالله";
    } else if (nationalDay <= 92) {
        return "سلمان";
    }
}


//اسماء ملوك السعودية

/*
قم بكتابة دالة تستقبل مدخلين رقميين يمثل كل منهما سنة معينة، تقوم الدالة بإرجاع مصفوفة تحتوي على اسماء الملوك السعودية خلال تلك الفترة.
*/

function get_king_names(year1, year2) {
    // write your code here
    let Abdulaziz = {
        name: 'عبدالعزيز',
        satrt: 1932,
        end: 1953
    }

    let saud = {
        name: 'سعود',
        satrt: 1953,
        end: 1964
    }

    let faisal = {
        name: 'فيصل',
        satrt: 1964,
        end: 1975
    }

    let khalid = {
        name: 'خالد',
        satrt: 1975,
        end: 1982
    }

    let fahad = {
        name: 'فهد',
        satrt: 1982,
        end: 2005
    }

    let abdullah = {
        name: 'عبدالله',
        satrt: 2005,
        end: 2015
    }

    let salman = {
        name: 'سلمان',
        satrt: 2015,
        end: 2022
    }


    let arr1 = [Abdulaziz, saud, faisal, khalid, fahad, abdullah, salman];
    let arr2 = [];
    // for (let i = 1930; i < 2023; i++) {


    // }


    for (let i = year1; i < year2; i++) {
        for (let king of arr1) {
            if (king.satrt <= i && king.end >= i) {
                arr2.push(king.name);
            }
        }
    }
    //function(item, pos, ary) {return !pos || item != ary[pos - 1];}
    return arr2.filter((item, pos, ary) => !pos || item != ary[pos - 1]);
}


//حساب الوقت المتبقي من تحميل ملف

/*
قم بكتابة دالة function تستقبل ثلاث متغيرات، المتغير الأول file_size يرمز إلى حجم الملف، المتغير الثاني bytes_downloaded يرمز إلى مصفوفة كل عنصر فيها يمثل حجم الـBytes الذي تم تحميلها خلال دقيقة والمتغير الثالث minutes_of_observation هو عدد دقائق الملاحظة الأخيرة من تحميل الملف. تقوم الدالة بحساب الوقت التقريبي المتبقي من تحميل الملف بالكامل بالدقائق. ملاحظه إذا لم يكن هناك عناصر في المصفوفة يتم إرجاع قيمة حجم الملف.
*/

function remaining_download_time(file_size, bytes_downloaded, minutes_of_observation) {
    // write your code here
    sum = 0;
    for (i of bytes_downloaded) {
        sum += i;
    }

    if (bytes_downloaded.length == 0) {
        return file_size;
    } else {
        calc = (file_size - sum) / (sum / bytes_downloaded.length);
        if (calc < 10) {
            return Math.ceil(calc);
        } else {
            return Math.round(calc);
        }
    }
}