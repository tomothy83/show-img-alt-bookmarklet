const UglifyJS = require("uglify-es");
const fs = require("fs");

let code = fs.readFileSync("index.js", 'utf8');
const result = UglifyJS.minify(code, { compress: { negate_iife: false } });
let minifiedCode = result.code;
console.log('javascript:' + minifiedCode);
