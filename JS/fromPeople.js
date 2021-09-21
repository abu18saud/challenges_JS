
// نوع القيمة المدخلة

function inputType(value) {
    // write your code here
      let v= Number.parseInt(value)
    if(Number.isNaN(v)) return "string";
    if(value.includes(".")) return "double";
    
    return "integer";
  }