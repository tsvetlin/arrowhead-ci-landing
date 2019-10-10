!function e(o, r, n) {
    function a(l, t) {
        if (!r[l]) {
            if (!o[l]) {
                var s = "function" == typeof require && require;
                if (!t && s) return s(l, !0);
                if (i) return i(l, !0);
                var c = new Error("Cannot find module '" + l + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = r[l] = { exports: {} };
            o[l][0].call(d.exports,
                function(e) {
                    var r = o[l][1][e];
                    return a(r ? r : e)
                },
                d,
                d.exports,
                e,
                o,
                r,
                n)
        }
        return r[l].exports
    }

    for (var i = "function" == typeof require && require, l = 0; l < n.length; l++) a(n[l]);
    return a
}({
        1: [
            function(e, o, r) {
                !function() {
                    "use strict";
                    $(document).ready(function() {
                        /* $(window).bind("scroll",
                            function() {
                                var e = 150;
                                $(window).scrollTop() > e
                                    ? $(".header").addClass("header--fixed")
                                    : $(".header").removeClass("header--fixed")
                            }),*/ $(".mobile-nav-handler").click(function(e) {
                            $(".mobile-nav").toggleClass("mobile-nav--open"), $(".header").toggleClass("header--hide"),
                                $("body").toggleClass("no-scroll"), $("#toggle-nav").toggleClass("active")
                        }), $(".nav-link").click(function(e) {
                            $(".mobile-nav").removeClass("mobile-nav--open"), $(".header").removeClass("header--hide"),
                                $("body").removeClass("no-scroll"), $("#toggle-nav").removeClass("active")
                        })
                    })
                }()
            }, {}
        ]
    },
    {},
    [1]);
    
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
    
/*  $( document ).ready(function() {
    var str = $('.article_text').html();
    //console.log(str);
   $('p').each(function(){
        var te = $(this).text();
        var html = $(this).html();
        if(html.indexOf("<img") == -1){
        if(te == null || te == ""){
     
        }else{
          $(this).text(smartquotesString(te));
        }    
        }
        
    
});
  

});

function smartquotesString(str){
return str
.replace(/'''/g,'\u2034')
.replace(/(\W|^)"(\S)/g,'$1\u201c$2')
.replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,'$1\u201d$2')
.replace(/([^0-9])"/g,'$1\u201d')
.replace(/''/g,'\u2033')
.replace(/(\W|^)'(\S)/g,'$1\u2018$2')
.replace(/([a-z])'([a-z])/ig,'$1\u2019$2')
.replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig,'$1\u2019$3')
.replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig,'\u2019$2$3')
.replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig,'$1\u2019')
.replace(/'/g,'\u2032');
} 
*/


