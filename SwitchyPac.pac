function regExpMatch(url, pattern) {
	try { return new RegExp(pattern).test(url); } catch(ex) { return false; }
}

function FindProxyForURL(url, host) {
	if (shExpMatch(url, '*facebook*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*fb.com*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*hulu.com*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*redtube.com*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*s-static.ak.fbcdn.net*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*google*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*pornhub*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*marvel.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*englishclass101.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*apple.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*cnodejs.org/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.pixnet.net/*') || shExpMatch(url, '*://pixnet.net/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.blogspot.com/*') || shExpMatch(url, '*://blogspot.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.blogspot.jp/*') || shExpMatch(url, '*://blogspot.jp/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*gstatic.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*lmgtfy.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*godaddy.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*amazonaws.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*quora.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*smushit.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*backbonejs.org/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*aisex.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*sex8.cc/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*t66y.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*wordpress.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*nooidea.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*happytreefriendscn.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*ooroom.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*twitpic.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*colourlovers.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*japorn.tv/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.couchsurfing.org/*') || shExpMatch(url, '*://couchsurfing.org/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*disinfeqt.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.clearlyinnovative.com/*') || shExpMatch(url, '*://clearlyinnovative.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*clearlyinnovative.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.jquery.com/*') || shExpMatch(url, '*://jquery.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.carnationgroup.com/*') || shExpMatch(url, '*://carnationgroup.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*j.mp/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.badoo.com/*') || shExpMatch(url, '*://badoo.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://scripty2.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://imagehyper.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.evernote.com/*') || shExpMatch(url, '*://evernote.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*graphicriver.net/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*envato.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.steachs.com/*') || shExpMatch(url, '*://steachs.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*avno1.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*xuite.net/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*technorati.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*thefancy.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*prestige-av.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*www.html5rocks.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*instagr.am/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*linkedin.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*licdn.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.yyv.co/*') || shExpMatch(url, '*://yyv.co/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*fileprohost.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*paiqoo.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*jqmobi.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*umbrellacorporation.net/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*fuck58.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*del.icio.us/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*vimeo.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*delicious.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*.zapd.co/*') || shExpMatch(url, '*://zapd.co/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*zapd.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*jqueryui.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*adobe.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://dribbble.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*blogger.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*://*t.co/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*twitter*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*ytimg*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*youtube*/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*appspot.com/*')) return 'SOCKS5 127.0.0.1:9090';
	if (shExpMatch(url, '*url2png.com/*')) return 'SOCKS5 127.0.0.1:9090';
	return 'DIRECT';
}