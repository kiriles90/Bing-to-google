// ==UserScript==
// @name        Bing to Google
// @namespace   github.com/kiriles90
// @version     1.1
// @date        2023-02-06
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @include     http://*.bing.com/search?*
// @include     https://*.bing.com/search?*
// @run-at      document-start
// @grant       none
// ==/UserScript==
var newurl = "https://google.com/search?"+document.URL.match(/q\=[^&]*/);
if (newurl != document.URL) location.replace(newurl);
