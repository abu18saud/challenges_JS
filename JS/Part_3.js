function inputType(value) {
    return isNaN(Number(value)) ? "string" : value % 1 === 0 ? "integer" : "double";
}