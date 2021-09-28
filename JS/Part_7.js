// بمناسبة اليوم الوطني نهنئ قيادتنا الرشيدة وشعبنا العظيم ب 91عاماً من الطموح والعزة والافتخار
// تمرير قيمة الأس

function exponent_x(number, exponent) {
  // write your code here
  return Math.pow(number, exponent);
}

// إزالة الرموز من النصوص - السامر القحطاني
function removeSpecialCharacters(str) {
  // write your code here
  return str.match(/(\w+|\-+|\s)/g).join('');
}

// أقصى عدد على اليسار - السامر القحطاني
function leftDigit(str) {
  // write your code here
  return str.match(/\d/).join('');
}

// التحقق من وجود مسافة في الجملة - السامر القحطاني
function hasSpace(str) {
	// write your code here
	return str.replace(/\s/g, "#")
}

// تعديل صيغة التاريخ - السامر القحطاني
function dateFormating(date) {
	// write your code here
	return date.split('-').reverse().join('-');
}

// طباعة سلسلة من الأرقام

function numbers_range(number) {
  // write your code here
  return Array(number + 1).fill(0).map((_, i) => i * 1).join(' ');
}