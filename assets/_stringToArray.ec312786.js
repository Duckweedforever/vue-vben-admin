import{ck as f}from"./index.0fe5b4aa.js";function u(u,e,d){var n=u.length;return d=void 0===d?n:d,!e&&d>=n?u:f(u,e,d)}var e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function d(f){return e.test(f)}var n="[\\ud800-\\udfff]",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",c="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+t+"|"+r+")"+"?",s="[\\ufe0e\\ufe0f]?"+a+("(?:\\u200d(?:"+[c,i,o].join("|")+")[\\ufe0e\\ufe0f]?"+a+")*"),p="(?:"+[c+t+"?",t,i,o,n].join("|")+")",g=RegExp(r+"(?="+r+")|"+p+s,"g");function v(f){return d(f)?function(f){return f.match(g)||[]}(f):function(f){return f.split("")}(f)}export{u as c,d as h,v as s};