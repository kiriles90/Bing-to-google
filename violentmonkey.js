// ==UserScript==
// @name        Bing to Google
// @namespace   github.com/kiriles90
// @version     2.1
// @date        2025-06-09
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @include     http://*.bing.com/search?*
// @include     https://*.bing.com/search?*
// @run-at      document-start
// @grant       none
// ==/UserScript==
var query = document.URL.match(/q\=[^&]*/).toString().replace("q=", "");
var engine = query.split("%3A+")[0];
var newurl;
switch (engine) {
    case "1337x":
        newurl = "https://1337x.to/search/"+query.replace(engine + "%3A+", "")+"/1/";
        break;
    case "coverapi":
        newurl = "https://tv643.ct.ws/coverapi/#"+query.replace(engine + "%3A+", "");
        break;
    case "eztv":
        newurl = "https://eztvx.to/search/"+query.replace(engine + "%3A+", "");
        break;
    case "maps":
        newurl = "https://www.google.com/maps/search/"+query.replace(engine + "%3A+", "")+"/";
        break;
    case "imdb":
        newurl = "https://www.imdb.com/find?q="+query.replace(engine + "%3A+", "");
        break;
    case "nyaa":
        newurl = "https://nyaa.si/?f=0&c=0_0&q="+query.replace(engine + "%3A+", "");
        break;
    case "opensubtitles":
        newurl = "https://www.opensubtitles.org/en/search2/moviename-"+query.replace(engine + "%3A+", "")+"/sublanguageid-all";
        break;
    case "rlsbb":
        newurl = "https://search.rlsbb.ru/?s="+query.replace(engine + "%3A+", "");
        break;
    case "scene-rls":
        newurl = "https://scene-rls.net/?s="+query.replace(engine + "%3A+", "");
        break;
    case "solidtorrents":
        newurl = "https://solidtorrents.to/search?q="+query.replace(engine + "%3A+", "")+"&sort=seeders";
        break;
    case "thepiratebay":
        newurl = "https://thepiratebay.org/search.php?q="+query.replace(engine + "%3A+", "")+"&all=on&search=Pirate+Search&page=0";
        break;
    case "therarbg":
        newurl = "https://therarbg.to/get-posts/order:-se:keywords:"+query.replace(engine + "%3A+", "")+"/";
        break;
    case "yourbittorrent":
        newurl = "https://yourbittorrent.com/?v=&c=&q="+query.replace(engine + "%3A+", "");
        break;
    case "youtube":
        newurl = "https://www.youtube.com/results?search_query="+query.replace(engine + "%3A+", "");
        break;
    case "yts":
        newurl = "https://yts.mx/browse-movies/"+query.replace(engine + "%3A+", "")+"/all/all/0/latest/0/all";
        break;
    default:
        newurl = "https://google.com/search?q="+query;
}
location.replace(newurl);
