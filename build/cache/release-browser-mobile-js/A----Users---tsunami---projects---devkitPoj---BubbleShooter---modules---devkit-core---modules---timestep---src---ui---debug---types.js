d7f287ea38b7bc80e2d2545c71d58313
if(DEBUG){var isNumber=function(a){return"number"==typeof a&&!isNaN(a)},VALIDATORS={string:function(a){return"string"==typeof a},integer:function(a){return isNumber(a)&&Math.floor(a)==a},number:isNumber,"float":isNumber,array:Array.isArray,object:function(a){return"object"==typeof a},key:function(a,b){return b.toLowerCase?(a.toLowerCase&&a.toLowerCase())in lowerCaseKeys(b.dictionary):b.dictionary&&a in b.dictionary}},ERRORS={"default":function(a,b,c){return a+' "'+b+'" should be a '+c.type},key:function(a,
b,c){return a+' "'+b+'" should be a key from the set: '+Object.keys(c.toLowerCase?lowerCaseKeys(c.dictionary):c.dictionary).join(", ")}},lowerCaseKeys=function(a){var b={};if(a)for(var c in a)b[c.toLowerCase()]=!0;return b},getError=function(a,b,c){a=(ERRORS[c.type]||ERRORS["default"])(a,b,c);return new TypeError(a)};exports.check=function(a,b){DEBUG&&Object.keys(b).forEach(function(c){var d=b[c];d.required&&void 0===d.value||null===d.value&&!d.allowNull?logger.ERROR&&console.error("ERROR",".debug.types",
new TypeError(a+' "'+c+'" required')):d.type in VALIDATORS&&(VALIDATORS[d.type](d.value,d)||logger.ERROR&&console.error("ERROR",".debug.types",getError(a,c,d)))})}}else exports.check=function(){};