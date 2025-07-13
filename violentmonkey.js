// ==UserScript==
// @name        Bing to Google
// @namespace   github.com/kiriles90
// @version     4.0
// @date        2025-07-13
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Bing-to-google/master/violentmonkey.js
// @match       *://*.bing.com/search?*
// @run-at      document-start
// @grant       none
// ==/UserScript==
(() => {
    const q = new URL(location.href).searchParams.get('q') || '';
    const [engine, ...rest] = q.split(': ');
    const term = encodeURIComponent(rest.join(': '));
    const map = {
        '1337x': s => `https://1337x.to/search/${s}/1/`,
        'coverapi': s => `https://tv643.ct.ws/coverapi/#${s}`,
        'eztv': s => `https://eztvx.to/search/${s}`,
        'maps': s => `https://www.google.com/maps/search/${s}/`,
        'imdb': s => `https://www.imdb.com/find?q=${s}`,
        'nyaa': s => `https://nyaa.si/?f=0&c=0_0&q=${s}`,
        'opensubtitles': s => `https://www.opensubtitles.org/en/search2/moviename-${s}/sublanguageid-all`,
        'rlsbb': s => `https://search.rlsbb.ru/?s=${s}`,
        'scene-rls': s => `https://scene-rls.net/?s=${s}`,
        'solidtorrents': s => `https://solidtorrents.to/search?q=${s}&sort=seeders`,
        'thepiratebay': s => `https://thepiratebay.org/search.php?q=${s}&all=on`,
        'therarbg': s => `https://therarbg.to/get-posts/order:-se:keywords:${s}/`,
        'yourbittorrent': s => `https://yourbittorrent.com/?q=${s}`,
        'youtube': s => `https://www.youtube.com/results?search_query=${s}`,
        'yts': s => `https://yts.mx/browse-movies/${s}/all/all/0/latest/0/all`
    };
    const url = map[engine] ? map[engine](term) : `https://google.com/search?q=${encodeURIComponent(q)}`;
    location.replace(url);
})();
