function channelManager(){if(void 0!==window.cmRules&&void 0!==window.cmRules.rulesets){window.getQueryParam=window.getQueryParam||function(e,n,i){if(e){if(n=n||"",i=(i||"undefined"!=typeof s&&s.pageURL||location.href)+"",(4<n.length||-1<n.indexOf("="))&&i&&4>i.length){var r=n;n=i,i=r}r="";for(var o=(e=e.split(",")).length,a=0;a<o;a++){e:{var t=e[a],f=i,d=(f=(f=f.split("?").join("&")).split("#").join("&")).indexOf("&");if(t&&(-1<d||f.indexOf("=")>d)){f=f.substring(d+1),d=0;for(var l=(f=f.split("&")).length;d<l;d++){var c=f[d].split("="),u=c[1];if(c[0].toLowerCase()===t.toLowerCase()){t=decodeURIComponent(u||!0);break e}}}t=void 0}"string"==typeof t?(t=-1<t.indexOf("#")?t.substring(0,t.indexOf("#")):t,r+=r?n+t:t):r=""===r?t:r+(n+t)}return r}},window.cookieWrite=window.cookieWrite||function(e,n,i){if("string"==typeof e){if(g=function(){var e=window.location.hostname,n=window.location.hostname.split(".").length-1;if(e&&!/^[0-9.]+$/.test(e)){n=2<n?n:2;var i=e.lastIndexOf(".");if(0<=i){for(;0<=i&&1<n;)i=e.lastIndexOf(".",i-1),n--;i=0<i?e.substring(i):e}}return i}(),n=void 0!==n?""+n:"",i||""===n)if(""===n&&(i=-60),"number"==typeof i){var r=new Date;r.setTime(r.getTime()+6e4*i)}else r=i;return!(!e||(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+"; path=/;"+(i?" expires="+r.toUTCString()+";":"")+(g?" domain="+g+";":""),void 0===window.cookieRead))&&window.cookieRead(e)===n}},window.cookieRead=window.cookieRead||function(e){if("string"!=typeof e)return"";e=encodeURIComponent(e);var n=" "+document.cookie,i=n.indexOf(" "+e+"="),r=0>i?i:n.indexOf(";",i);return(e=0>i?"":decodeURIComponent(n.substring(i+2+e.length,0>r?n.length:r)))?e:""},window._cmanager={};var e=document.referrer,n=!1,i="n/a",r="n/a",o="n/a",a="n/a",t=0,f=0,d=0,l=0;if(e){n=!0,i=e.split("/")[2].split("?")[0].toLowerCase();for(t=0;t<cmRules.iuList;t++)if(("/"+i).includes(cmRules.iuList[t].toLowerCase())){n=!1;break}}else e="n/a";if(n){if(cmRules.seList){var c=cmRules.seList;for(d=0;d<c.length;d++){for(l=0;l<c[d].d.length;l++)if(("/"+i).includes(c[d].d[l])){r=c[d].n;break}if("n/a"!==r)break}}if("n/a"===r&&cmRules.snList){var u=cmRules.snList;for(d=0;d<u.length;d++){for(l=0;l<u[d].d.length;l++)if(("/"+i).includes(u[d].d[l])){a=u[d].n;break}if("n/a"!==a)break}}}if(cmRules.qspList){var w=cmRules.qspList;for(d=0;d<w.length;d++)if(getQueryParam(w[d])){o=getQueryParam(w[d]);break}}var m="n/a",L="",k="",p="",C=[],b="",h="",R="",v="",x=cmRules.rulesets;for(t=0;t<x.length;t++){L=x[t].aa||"any";var y=x[t].conditions;for(f=0;f<y.length;f++){if(k=y[f].d,p=y[f].o,C=y[f].v,b="n/a",h="n/a",R="","ier"===k&&!0===n&&(h=!0,R="referring url: "+(b=e)),"ifpov"!==k||window.cookieRead("fpov")||(h=!0,R="landing page url: "+(b=document.URL)),"mpsdr"===k&&"n/a"!==r&&"n/a"!==o&&(h=!0,R=b=o),"mnsdr"===k&&"n/a"!==r&&"n/a"===o&&(h=!0,R=b=r),"mnsndr"===k&&"n/a"!==a&&"n/a"===o&&(h=!0,R=b=a),"trackingCode"===k?(b=o,R=o):0===k.indexOf("qsp:")?getQueryParam(k.substring(4))&&(b=getQueryParam(k.substring(4)),R=getQueryParam(k.substring(4))):"url"===k?R="current url: "+(b=document.URL):"refURL"===k?R="referring url: "+(b=e):"referringDomain"===k&&(R="referring domain: "+(b=i)),!0!==h)if(C&&0!==C.length)for(d=0;d<C.length;d++){if("e"===p&&b.toLowerCase()==C[d].toLowerCase()){h=!0;break}if("dne"===p){if(b.toLowerCase()!=C[d].toLowerCase()){h=!0;break}}else if("c"===p){if(b.toLowerCase().includes(C[d].toLowerCase())){h=!0;break}}else if("dnc"===p){if(!b.toLowerCase().includes(C[d].toLowerCase())){h=!0;break}}else if("sw"===p){if(0===b.toLowerCase().indexOf(C[d].toLowerCase())){h=!0;break}}else if("dnsw"===p){if(0!==b.toLowerCase().indexOf(C[d].toLowerCase())){h=!0;break}}else if("ew"===p){if(b.toLowerCase().endsWith(C[d].toLowerCase())){h=!0;break}}else if("dnew"===p){if(!b.toLowerCase().endsWith(C[d].toLowerCase())){h=!0;break}}else if("r"===p&&b.match(C[d])){h=!0;break}}else"dnex"!==p||b&&"n/a"!==b?"ex"===p&&b&&"n/a"!==b&&(h=!0):(h=!0,b="n/a",R="");if("any"===L&&!0===h){m=!0,v=""!==v?v+" | "+R:R;break}if("any"!==L||!0===h)if("all"!==L||!0!==h){if("all"===L&&!0!==h){m=!1;break}}else m=!0,v=""!==v?v+" | "+R:R;else m=!1}if(!0===m){window._cmanager={channel:x[t].c,channelDetail:v,currentURL:document.URL,referringDomain:i,searchEngineName:r,socialNetworkName:a,trackingCode:o};break}}window.cookieWrite("fpov","1",30)}}

//starter kit example
var cmRules={"qspList":["cid"],"idList":[".abcxyz.com"],"seList":[{"n":"Google","d":[".google.","googlesyndication.com",".googleadservices.com"]},{"n":"Google Search App","d":["googlequicksearchbox","google.android.gm"]},{"n":"Bing","d":["bing.com"]},{"n":"Yahoo!","d":["yahoo.com","yahoo.co.jp"]},{"n":"Naver","d":["naver.com","search.naver.com"]},{"n":"Yandex.ru","d":["yandex"]},{"n":"DuckDuckGo","d":["duckduckgo.com"]},{"n":"Daum","d":["daum.net","search.daum.net"]},{"n":"Baidu","d":["baidu.com"]},{"n":"MyWay.com","d":["myway.com"]},{"n":"Ecosia","d":["ecosia.org"]},{"n":"Ask","d":["ask.jp","ask.co"]},{"n":"DogPile","d":["dogpile.com"]},{"n":"sm.cn","d":["sm.cn"]},{"n":"sogou.com","d":["sogou.com"]},{"n":"Haosou","d":["so.com"]},{"n":"Seznam.cz","d":["Seznam.cz"]},{"n":"AOL","d":["search.aol.","suche.aolsvc.de"]},{"n":"AltaVista","d":["altavista.co","altavista.de"]},{"n":"MyWebSearch","d":[".mywebsearch.com"]},{"n":"WebCrawler","d":["webcrawler.com"]},{"n":"Wow","d":["wow.com"]},{"n":"InfoSpace","d":["infospace.com"]},{"n":"Blekko","d":["blekko.com"]},{"n":"Docomo","d":["docomo.ne.jp"]},{"n":"Optimum Search","d":["optimum.net"]}],"snList":[{"n":"Facebook","d":["facebook.com"]},{"n":"Instagram","d":["instagram.com"]},{"n":"Pinterest","d":["pinterest.com"]},{"n":"Snapchat","d":["snapchat.com"]},{"n":"Twitter","d":["twitter.com","/t.co"]},{"n":"LinkedIn","d":["linkedin.com"]},{"n":"Youtube","d":["youtube.com"]},{"n":"Tiktok","d":["tiktok.com"]},{"n":"Reddit","d":["reddit.com"]},{"n":"Yelp","d":["yelp.com"]},{"n":"Flickr","d":["flickr.com"]},{"n":"Tumblr","d":["tumblr.com"]},{"n":"Snapchat","d":["snapchat.com"]},{"n":"Vimeo","d":["vimeo.com"]},{"n":"Vk","d":["vk.com"]},{"n":"Buzzfeed","d":["buzzfeed.com"]},{"n":"Blogspot","d":["blogspot.com"]},{"n":"Disqus","d":["disq.us","disqus.com"]},{"n":"QQ","d":["qq.com"]},{"n":"Discord","d":["discord.com"]},{"n":"Wechat","d":["wechat.com"]}],"rulesets":[{"aa":"any","conditions":[{"d":"mnsdr"}],"c":"natural search"},{"aa":"any","conditions":[{"d":"mpsdr"}],"c":"paid search"},{"aa":"any","conditions":[{"d":"mnsndr"}],"c":"natural social network"},{"aa":"any","conditions":[{"d":"trackingCode","o":"ex"}],"c":"misc paid channels"},{"aa":"any","conditions":[{"d":"ier"}],"c":"misc external referrals"},{"aa":"all","conditions":[{"d":"refURL","o":"dnex"},{"d":"ifpov"}],"c":"direct"}]};

//starter kit for audible example
var cmRules={"qspList":["source_code"],"idList":[".audible.com"],"seList":[{"n":"Google","d":[".google.","googlesyndication.com",".googleadservices.com"]},{"n":"Google Search App","d":["googlequicksearchbox","google.android.gm"]},{"n":"Bing","d":["bing.com"]},{"n":"Yahoo!","d":["yahoo.com","yahoo.co.jp"]},{"n":"Naver","d":["naver.com","search.naver.com"]},{"n":"Yandex.ru","d":["yandex"]},{"n":"DuckDuckGo","d":["duckduckgo.com"]},{"n":"Daum","d":["daum.net","search.daum.net"]},{"n":"Baidu","d":["baidu.com"]},{"n":"MyWay.com","d":["myway.com"]},{"n":"Ecosia","d":["ecosia.org"]},{"n":"Ask","d":["ask.jp","ask.co"]},{"n":"DogPile","d":["dogpile.com"]},{"n":"sm.cn","d":["sm.cn"]},{"n":"sogou.com","d":["sogou.com"]},{"n":"Haosou","d":["so.com"]},{"n":"Seznam.cz","d":["Seznam.cz"]},{"n":"AOL","d":["search.aol.","suche.aolsvc.de"]},{"n":"AltaVista","d":["altavista.co","altavista.de"]},{"n":"MyWebSearch","d":[".mywebsearch.com"]},{"n":"WebCrawler","d":["webcrawler.com"]},{"n":"Wow","d":["wow.com"]},{"n":"InfoSpace","d":["infospace.com"]},{"n":"Blekko","d":["blekko.com"]},{"n":"Docomo","d":["docomo.ne.jp"]},{"n":"Optimum Search","d":["optimum.net"]}],"snList":[{"n":"Facebook","d":["facebook.com"]},{"n":"Instagram","d":["instagram.com"]},{"n":"Pinterest","d":["pinterest.com"]},{"n":"Snapchat","d":["snapchat.com"]},{"n":"Twitter","d":["twitter.com","/t.co"]},{"n":"LinkedIn","d":["linkedin.com"]},{"n":"Youtube","d":["youtube.com"]},{"n":"Tiktok","d":["tiktok.com"]},{"n":"Reddit","d":["reddit.com"]},{"n":"Yelp","d":["yelp.com"]},{"n":"Flickr","d":["flickr.com"]},{"n":"Tumblr","d":["tumblr.com"]},{"n":"Snapchat","d":["snapchat.com"]},{"n":"Vimeo","d":["vimeo.com"]},{"n":"Vk","d":["vk.com"]},{"n":"Buzzfeed","d":["buzzfeed.com"]},{"n":"Blogspot","d":["blogspot.com"]},{"n":"Disqus","d":["disq.us","disqus.com"]},{"n":"QQ","d":["qq.com"]},{"n":"Discord","d":["discord.com"]},{"n":"Wechat","d":["wechat.com"]}],"rulesets":[{"aa":"any","conditions":[{"d":"mnsdr"}],"c":"natural search"},{"aa":"any","conditions":[{"d":"mpsdr"}],"c":"paid search"},{"aa":"any","conditions":[{"d":"mnsndr"}],"c":"natural social network"},{"aa":"any","conditions":[{"d":"trackingCode","o":"ex"}],"c":"misc paid channels"},{"aa":"any","conditions":[{"d":"ier"}],"c":"misc external referrals"},{"aa":"all","conditions":[{"d":"refURL","o":"dnex"},{"d":"ifpov"}],"c":"direct"}]};

/* Adobe Consulting Plugin: channelManager v5.0 */
function channelManager()
{
    //cmRules variable needs to exist for this to work
    if (typeof window.cmRules === "undefined" || typeof window.cmRules.rulesets === "undefined") return;

	//getQueryParam/cookieRead/cookieWrite utilities
	window.getQueryParam=window.getQueryParam||function(g,c,e){if(g){c=c||"";e=(e||"undefined"!==typeof s&&s.pageURL||location.href)+"";if((4<c.length||-1<c.indexOf("="))&&e&&4>e.length){var d=c;c=e;e=d}d="";g=g.split(",");for(var l=g.length,h=0;h<l;h++){a:{var a=g[h];var b=e;b=b.split("?").join("&");b=b.split("#").join("&");var f=b.indexOf("&");if(a&&(-1<f||b.indexOf("=")>f)){b=b.substring(f+1);b=b.split("&");f=0;for(var m=b.length;f<m;f++){var k=b[f].split("="),n=k[1];if(k[0].toLowerCase()===a.toLowerCase()){a=decodeURIComponent(n||!0);break a}}}a=void 0}"string"===typeof a?(a=-1<a.indexOf("#")?a.substring(0,a.indexOf("#")):a,d+=d?c+a:a):d=""===d?a:d+(c+a)}return d}};
	window.cookieWrite=window.cookieWrite||function(k,v,e){if("string"===typeof k){g=function(){var a=window.location.hostname,b=window.location.hostname.split(".").length-1;if(a&&!/^[0-9.]+$/.test(a)){b=2<b?b:2;var c=a.lastIndexOf(".");if(0<=c){for(;0<=c&&1<b;)c=a.lastIndexOf(".",c-1),b--;c=0<c?a.substring(c):a}}return c}();v="undefined"!==typeof v?""+v:"";if(e||""===v)if(""===v&&(e=-60),"number"===typeof e){var h=new Date;h.setTime(h.getTime()+6E4*e)}else h=e;return k&&(document.cookie=encodeURIComponent(k)+"="+encodeURIComponent(v)+"; path=/;"+(e?" expires="+h.toUTCString()+";":"")+(g?" domain="+g+";":""),"undefined"!==typeof window.cookieRead)?window.cookieRead(k)===v:!1}};
	window.cookieRead=window.cookieRead||function(k){if("string"===typeof k)k=encodeURIComponent(k);else return"";var c=" "+document.cookie,b=c.indexOf(" "+k+"="),d=0>b?b:c.indexOf(";",b);return(k=0>b?"":decodeURIComponent(c.substring(b+2+k.length,0>d?c.length:d)))?k:""};

	//setup the return object
	window._cmanager = {};
	
    //get the referring URL
    var referringURL = document.referrer,

        //assume for now that the referrer is internal (or that we don't have a referrer at all)
        externalReferrer = false,

        //assume for now we don't have a referring domain
        referringDomain = "n/a",

        //assume for now that we don't have a search engine
        searchEngineName = "n/a",

        //assume for now that we don't have a tracking code
        trackingCode = "n/a",

        //assume for now that we don't have a social network
        socialNetworkName = "n/a",

        //setup loop counters
        i = 0,
        j = 0,
        k = 0,
        l = 0;

    //if we have a referringURL, determine whether it's external (by setting externalReferrer = true/false)
    if (!!referringURL)
    {
        //first assume we are coming from an external site
        externalReferrer = true;

        //set referringDomain equal to a lower-cased version of the referring domain
        referringDomain = referringURL.split("/")[2].split("?")[0].toLowerCase();

        //Loop through the internal URL List 
        for (var i = 0; i < cmRules.iuList; i++)
        {
            //if the referring domain contains an item in the internal URL list
            if (("/" + referringDomain).includes(cmRules.iuList[i].toLowerCase()))
            {
                //we *don't* have an external referring URL.  Instead, we have an internal referring URL.  So stop checking
                externalReferrer = false;
                break;
            }
        }
    }
	else referringURL = "n/a";

    //If we have an externalReferrer, determine if it belongs to a certain channel category (search engine, social network, etc.)
    if (!!externalReferrer)
    {
        //If cmRules.seList is set, check if the external referrer is a search engine
        if (!!cmRules.seList)
        {
            var seList = cmRules.seList;
            //loop through the search engine list
            for (k = 0; k < seList.length; k++)
            {
                //loop through the k'th search engine's domain list
                for (l = 0; l < seList[k].d.length; l++)
                {
                    //if the referring domain contains the search engine domain entry 
                    if (("/" + referringDomain).includes(seList[k].d[l]))
                    {
                        //set search engine name
                        searchEngineName = seList[k].n

                        //stop looking through search engine domain entries
                        break;
                    }
                }
                //if we have a searchEngineName stop looking through search engines
                if (searchEngineName !== "n/a") break;
            }
        }
        //If we don't have a search engine and if cmRules.snList is set, check if the external referrer is a social network
        if (searchEngineName === "n/a" && !!cmRules.snList)
        {
            var snList = cmRules.snList;
            //loop through the social network list
            for (k = 0; k < snList.length; k++)
            {
                //loop through the k'th social network's domain list
                for (l = 0; l < snList[k].d.length; l++)
                {
                    //if the referring domain contains the social network domain entry 
                    if (("/" + referringDomain).includes(snList[k].d[l]))
                    {
                        //set social network name
                        socialNetworkName = snList[k].n

                        //stop looking through social network domain entries
                        break;
                    }
                }
                //if we have a searchEngineName stop looking through social networks
                if (socialNetworkName !== "n/a") break;
            }
        }
    }

    //get a tracking code if there is one
    //if the campaignQueryStringParameterList is set
    if (!!cmRules.qspList)
    {
        var qspL = cmRules.qspList;
        //loop through the entries in the qspList object
        for (k = 0; k < qspL.length; k++)
        {
            //if the query string parameter exists
            if (getQueryParam(qspL[k]))
            {
                //set trackingCode equal to the query string parameter value and stop looping through the qspList
                trackingCode = getQueryParam(qspL[k])
                break;
            }
        }
    }

    /** 
    	At this point, we have the following dimensions available:
    	
    	externalReferrer
    	referringURL
    	referringDomain
    	searchEngineName
    	socialNetworkName
    	trackingCode
    
    **/

    //begin rule set matching setup
    var rm = "n/a", //rule match n/a just yet
        aa = "",
        d = "",
        o = "",
        v = [],
        d2 = "",
        cm = "",
		detail = "",
		finalDetail = "";

    //loop through the rulesets
    var cmRuleSets = cmRules.rulesets;
    for (i = 0; i < cmRuleSets.length; i++)
    {
        //get whether all conditions need to match or just any conditions
        aa = cmRuleSets[i].aa || "any";
        var cmRuleSetConditions = cmRuleSets[i].conditions;
        //loop through the conditions in the ruleset
        for (j = 0; j < cmRuleSetConditions.length; j++)
        {
            //get the condition parts
            d = cmRuleSetConditions[j].d, //dimension/condition
                o = cmRuleSetConditions[j].o, //operator
                v = cmRuleSetConditions[j].v, //value
                d2 = "n/a", //dimension not available by default
                cm = "n/a"; //condition match n/a
				detail = "";

            //if d is "is external referrer" and we have an external referrer
            if (d === "ier" && externalReferrer === true)
            {
                cm = true;
                d2 = referringURL;
				detail = "referring url: " + d2;
            }

            //if d is "is first page of visit" and we don't have a fpov cookie (yet)
            if (d === "ifpov" && !window.cookieRead("fpov"))
            {
				cm = true;
                d2 = document.URL;
				detail = "landing page url: " + d2;
            }

            //if d is matches paid search detection rules and we have both a searchEngine and a trackingCode
            if (d === "mpsdr" && searchEngineName !== "n/a" && trackingCode !== "n/a")
            {
                cm = true;
                d2 = trackingCode;
				detail = d2;
            }

            //if d is matches natural search detection rules and we have a searchEngine but NOT a trackingCode
            if (d === "mnsdr" && searchEngineName !== "n/a" && trackingCode === "n/a")
            {
                cm = true;
                d2 = searchEngineName;
				detail = d2;
            }

            //if d is matches natural social network search detection rules and we have a socialNetworkName but NOT a trackingCode
            if (d === "mnsndr" && socialNetworkName !== "n/a" && trackingCode === "n/a")
            {
                cm = true;
                d2 = socialNetworkName;
				detail = d2;
            }

            //if d is "trackingCode"
            if (d === "trackingCode")
            {
                d2 = trackingCode;
				detail = trackingCode;
            }
            //if d is some sort of other query string parameter
            else if (d.indexOf("qsp:") === 0)
            {
                //if the querystring parameter exists...
                if (getQueryParam(d.substring(4)))
                {
                    //set d equal to the query string parameter value
                    d2 = getQueryParam(d.substring(4))
					detail = getQueryParam(d.substring(4))
                }
            }
            else if (d === "url")
            {
                d2 = document.URL;
				detail = "current url: " + d2;
            }
            else if (d === "refURL")
            {
				d2 = referringURL;
				detail = "referring url: " + d2;
            }
            else if (d === "referringDomain")
            {
                d2 = referringDomain;
				detail = "referring domain: " + d2;
            }

            //if we're looking at the value of the dimension (trackingcode/referring domain/etc.)
            if (cm !== true)
            {
                //if nothing was passed into the v portion of the condition, that's fine.  We might not be looking for a particular value, just for *any* value (or lack of value)
                if (!v || v.length === 0)
                {
                    //if the dimension to check DOESN'T exist
                    if (o === "dnex" && (!d2 || d2 === "n/a"))
                    {
                        cm = true;
                        d2 = "n/a";
						detail = "";
                    }
                    //if the dimension to check DOES exist
                    else if (o === "ex" && (!!d2 && d2 !== "n/a"))
                    {
                        cm = true;
                    }
                }
                else
                {
                    //loop through all of the values to check for
                    for (k = 0; k < v.length; k++)
                    {
                        if (o === "e") //equals
                        {
                            if (d2.toLowerCase() == v[k].toLowerCase())
                            {
                                cm = true;
                                break;
                            }
                        }
                        if (o === "dne") //does not equal
                        {
                            if (d2.toLowerCase() != v[k].toLowerCase())
                            {
                                cm = true;
                                break;
                            }
                        }						
                        else if (o === "c") //contains
                        {
                            if (d2.toLowerCase().includes(v[k].toLowerCase()))
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "dnc") //does not contain
                        {
                            if (!d2.toLowerCase().includes(v[k].toLowerCase()))
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "sw") //starts with
                        {
                            if (d2.toLowerCase().indexOf(v[k].toLowerCase()) === 0)
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "dnsw") //does not start with
                        {
                            if (d2.toLowerCase().indexOf(v[k].toLowerCase()) !== 0)
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "ew") //ends with
                        {
                            if (d2.toLowerCase().endsWith(v[k].toLowerCase()))
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "dnew") //does not end with
                        {
                            if (!d2.toLowerCase().endsWith(v[k].toLowerCase()))
                            {
                                cm = true;
                                break;
                            }
                        }
                        else if (o === "r") //regex
                        {
                            if (d2.match(v[k]))
                            {
                                cm = true;
                                break;
                            }
                        }
                    }
                }
            }

            //determine what to do depending on whether we have a condition match and whether we are to meet all conditions
            if (aa === "any" && cm === true)
            {
                rm = true;
				finalDetail = (finalDetail !== "") ? finalDetail + " | " + detail : detail
                break;
            }
            else if (aa === "any" && cm !== true)
            {
                rm = false;
                continue;
            }
            else if (aa === "all" && cm === true)
            {
                rm = true;
				finalDetail = (finalDetail !== "") ? finalDetail + " | " + detail : detail
                continue;
            }
            else if (aa === "all" && cm !== true)
            {
                rm = false;
                break;
            }
        }

        //if we have a rule match
        if (rm === true)
        {
            //set the channel and channel detail, and stop looking for channels
            window._cmanager = {
				"channel": cmRuleSets[i].c,
				"channelDetail" : finalDetail,
				"currentURL": document.URL,
				"referringDomain": referringDomain,
				"searchEngineName": searchEngineName,
				"socialNetworkName": socialNetworkName,
				"trackingCode": trackingCode
			}
            break;
        }
    }

    //we're no longer on the first page of the visit after this runs
    window.cookieWrite("fpov", "1", 30)
}