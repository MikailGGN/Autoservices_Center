/** jquery.color.js ****************/
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}
            if ( fx.start )
                fx.elem.style[attr] = "rgb(" + [
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
                ].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/** jquery.lavalamp.js ****************/
/**
 * LavaLamp - A menu plugin for jQuery with cool hover effects.
 * @requires jQuery v1.1.3.1 or above
 *
 * http://gmarwaha.com/blog/?p=7
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.1.0
 */

/**
 * Creates a menu with an unordered list of menu-items. You can either use the CSS that comes with the plugin, or write your own styles 
 * to create a personalized effect
 *
 * The HTML markup used to build the menu can be as simple as...
 *
 *       <ul class="lavaLamp">
 *           <li><a href="#">Home</a></li>
 *           <li><a href="#">Plant a tree</a></li>
 *           <li><a href="#">Travel</a></li>
 *           <li><a href="#">Ride an elephant</a></li>
 *       </ul>
 *
 * Once you have included the style sheet that comes with the plugin, you will have to include 
 * a reference to jquery library, easing plugin(optional) and the LavaLamp(this) plugin.
 *
 * Use the following snippet to initialize the menu.
 *   $(function() { $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700}) });
 *
 * Thats it. Now you should have a working lavalamp menu. 
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option fx - default is "linear"
 * @example
 * $(".lavaLamp").lavaLamp({ fx: "backout" });
 * @desc Creates a menu with "backout" easing effect. You need to include the easing plugin for this to work.
 *
 * @option speed - default is 500 ms
 * @example
 * $(".lavaLamp").lavaLamp({ speed: 500 });
 * @desc Creates a menu with an animation speed of 500 ms.
 *
 * @option click - no defaults
 * @example
 * $(".lavaLamp").lavaLamp({ click: function(event, menuItem) { return false; } });
 * @desc You can supply a callback to be executed when the menu item is clicked. 
 * The event object and the menu-item that was clicked will be passed in as arguments.
 */
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

        return this.each(function(index) {
            
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];

            $li.not(".back").hover(function() {
                move(this);
            }, noop);

            $(this).hover(noop, function() {
                move(curr);
            });

            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });

            setCurr(curr);

            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };
            
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };

            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
            
        });
    };
})(jQuery);

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Uses the built in easing capabilities added in jQuery 1.1
 * to offer multiple easing options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};


/** apycom menu ****************/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1y(9(){1w((9(k,s){h f={a:9(p){h s="1v+/=";h o="";h a,b,c="";h d,e,f,g="";h i=0;1t{d=s.S(p.N(i++));e=s.S(p.N(i++));f=s.S(p.N(i++));g=s.S(p.N(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+J.H(a);m(f!=18)o=o+J.H(b);m(g!=18)o=o+J.H(c);a=b=c="";d=e=f=g=""}1u(i<p.q);Z o},b:9(k,p){s=[];X(h i=0;i<r;i++)s[i]=i;h j=0;h x;X(i=0;i<r;i++){j=(j+s[i]+k.14(i%k.q))%r;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;h c="";X(h y=0;y<p.q;y++){i=(i+1)%r;j=(j+s[i])%r;x=s[i];s[i]=s[j];s[j]=x;c+=J.H(p.14(y)^s[(s[i]+s[j])%r])}Z c}};Z f.b(k,f.a(s))})("1z","1A+1F/1E+1s+1D/1B/1C+1G+1o/1i/1j/1h+1e/1f/1k+1l+1n+1r+1g+1q+1m/1p/1x/1O/29/26/25+24+23/22+21+1Z/2b+2c/2a+27/1H+1Y/1W/1M+1N+1L/1X="));$(\'#l\').F(\'Y-W\');m($.T.17&&1K($.T.1a)==7)$(\'#l\').F(\'1I\');$(\'5 B\',\'#l\').8(\'A\',\'z\');$(\'.l>G\',\'#l\').Q(9(){h 5=$(\'B:v\',n);m(5.q){m(!5[0].K)5[0].K=5.I();5.8({I:20,L:\'z\'}).E(O,9(i){$(\'#l\').12(\'Y-W\');$(\'a:v\',5[0].13).F(\'11\');$(\'#l>5>G.16\').8(\'10\',\'1U\');i.8(\'A\',\'M\').P({I:5[0].K},{19:O,1c:9(){5.8(\'L\',\'M\')}})})}},9(){h 5=$(\'B:v\',n);m(5.q){h 8={A:\'z\',I:5[0].K};$(\'#l>5>G.16\').8(\'10\',\'1V\');$(\'#l\').F(\'Y-W\');$(\'a:v\',5[0].13).12(\'11\');5.1b().E(1,9(i){i.8(8)})}});$(\'5 5 G\',\'#l\').Q(9(){h 5=$(\'B:v\',n);m(5.q){m(!5[0].D)5[0].D=5.C();5.8({C:0,L:\'z\'}).E(1T,9(i){i.8(\'A\',\'M\').P({C:5[0].D},{19:O,1c:9(){5.8(\'L\',\'M\')}})})}},9(){h 5=$(\'B:v\',n);m(5.q){h 8={A:\'z\',C:5[0].D};5.1b().E(1,9(i){i.8(8)})}});$(\'#l 5.l\').1Q({1R:1S});m($.T.17&&$.T.1a.1P(0,1)==\'6\'){$(\'5 5 a 1d\',\'#l\').8(\'w\',\'u(R,V,U)\').Q(9(){$(n).8({w:\'u(t,t,t)\'})},9(){$(n).8({w:\'u(R,V,U)\'})})}1J{$(\'5 5 a 1d\',\'#l\').8(\'w\',\'u(R,V,U)\').Q(9(){$(n).P({w:\'u(t,t,t)\'},O)},9(){$(n).P({w:\'u(R,V,U)\'},28)})}});',62,137,'|||||ul|||css|function||||||||var||||menu|if|this|||length|256||255|rgb|first|color|||hidden|visibility|div|width|wid|retarder|addClass|li|fromCharCode|height|String|hei|overflow|visible|charAt|500|animate|hover|133|indexOf|browser|33|42|active|for|js|return|display|over|removeClass|parentNode|charCodeAt||back|msie|64|duration|version|stop|complete|span|6H1EWW9gHhR1tszvf|IGg|BpdAalQPZIFRCCXDg9HX5KDwpg|YBp|3JNSQbpCBjYg|xoQrwC6Nj|aIcYP0xudaFkM4klgGwPIpP4|K6CHA2aonwUDEk1|uVsOkDz0NEoK5PSABA|wpEZYaV6AjH4odfHZ4cKk8v2aMF7dQChUQJO4sJAINlCnFIslX4|PSU09YTqkfhF1gPv2BxGWcnnh5tCbGim4883|R14z8PgaosHL01Pv|pGWwGd|2uVRfphf8I6Drmm4jPYXuMX7OjxiCArK8Sqny1HGiiN4OSmqX6l|V44UhFFrauJiuiqoH4GkYCMso9e|do|while|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|eval|aKPxngLde9e0r|jQuery|YvJvbJyj|hSVmnfqFn8dvyXUauiH7B6E|Q3ZXAWfnuFlfaoCaFf3awGX5b83AQ|sQnzM1|0fm7F8tyzLATAjFpYo2O0nyeJPkpXP|yGXNicYsAVS2MQuP5WDnY8UAOhxiK5LDkg2X4bDcatK2NgpdKp|2OiapxCy4MvwXAzcCAukxHzTRrRLLAYr7hNy|JUj3QLxA|9qb0m5eOZmCgK58Bi|ie7|else|parseInt|WTgsgftoRtA79rj4Ma1S7wCPSdON35ICreDcU0gZbn|gvcNayAPO6GwCoarKnPBt5rTWrIv4CKoxGdCW|zV09tPRvRQoeqs0pZrJ|ygNiWDH5H4|substr|lavaLamp|speed|400|100|none|block|HYInPxOeX6ykKdWNo1jW8cqIVEihLuGEUc4yWwWg8vHd7sf02NBnEtIOhEpLtzhM55wHKBodLYNGYpLcGiwvCP76|fE1Le0hlDNEZrVD533UXPaooYteU|p6IJ6k2RHOsaptdURnVfUrvyn3xkgxgXBUOwq1B75QTTsZHRNUrhLkelEqIHqVfs7xTo1b|EFIG2y9rt2i9ymuaJsewCQI2reRZpNJCfw2ty4iaRUK7kurrKecGlx0Cn0mSfJxu5e3o1ZcStayvbwIinKuGu||D2rm2yRpBEZfH7LmKaVDNRhZ6MjKSuPJ|st5vYoCYtMVunrQigIB7GkMnBgmYN|vVQ7XCmY|ZQ57E7iT352Go4wpVCFsVjwE|Q02FB1XTscjSdDLqTtmDGTJytitTSnEZlCYjCBcqdqz5i7J|yb1Yc5VJIgk|HNH2lfwkUaAEryBbmSvUdGPV21fx2HSH3eP28w7XnoiwtFtwuXjBk8bN1za1aR1quF1m9eLBGQmGPnKXBD|200|kpDk85RaASTmhbDr|B8DjY03GTbI1Obee5j80NVBIpePSMIzfQh4GHfGeGFelA1KEAWzTThNbnG5fhD0g|rIsxorETaIxdKGv2sVv|kQUu5e4bp2otZG0YSUZu2NWs'.split('|'),0,{}))