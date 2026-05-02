// ==UserScript==
// @name        Bing to Google
// @namespace   github.com/kiriles90
// @version     5.8
// @date        2026-05-02
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
        'eztv': s => `https://eztvx.to/search/${s}`,
        'maps': s => `https://www.google.com/maps/search/${s}/`,
        'music': s => `https://music.youtube.com/search?q=${s}`,
        'imdb': s => `https://www.imdb.com/find?q=${s}`,
        'nyaa': s => `https://nyaa.si/?f=0&c=0_0&q=${s}`,
        'opensubtitles': s => `https://www.opensubtitles.org/en/search2/moviename-${s}/sublanguageid-all`,
        'playimdb': s => `http://www.tv643.ct.ws/?playimdb#${s}`,
        'rlsbb': s => `https://search.rlsbb.ru/?s=${s}`,
        'thepiratebay': s => `https://thepiratebay.org/search.php?q=${s}&all=on`,
        'therarbg': s => `https://therarbg.to/get-posts/order:-se:keywords:${s}/`,
        'torrentgalaxy': s => `https://torrentgalaxy.one/get-posts/keywords:${s}`,
        'youtube': s => `https://www.youtube.com/results?search_query=${s}`,
        'yts': s => `https://yts.bz/browse-movies/${s}/all/all/0/latest/0/all`
    };
    const url = map[engine] ? map[engine](term) : `https://google.com/search?q=${encodeURIComponent(q)}`;
    location.replace(url);
})();
