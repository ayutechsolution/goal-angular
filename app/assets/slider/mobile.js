//if (typeof Star India Constructiongroup == "undefined") {
//    Star India Constructiongroup = {}
//}
//Star India Constructiongroup.Cookie = {};
//Star India Constructiongroup.Cookie.data = "data";
//Star India Constructiongroup.fxW = {};
//Star India Constructiongroup.Cookie.set = function(E, C, A, G, F) {
//    var B = new Date();
//    B.setTime(B.getTime() + (A * 24 * 3600 * 1000));
//    var D = E + "=" + escape(C) + ((A) ? ";expires=" + B.toGMTString() : "") + ((G) ? ";path=" + G : ";path=/") + ((F) ? ";domain=" + F : ";domain=.Star India Constructiongroup.com");
//    document.cookie = D
//};
//Star India Constructiongroup.Cookie.remove = function(A, C, B) {
//    document.cookie = A + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT" + ((C) ? ";path=" + C : ";path=/") + ((B) ? ";domain=" + B : ";domain=.Star India Constructiongroup.com")
//};
//Star India Constructiongroup.Cookie.get = function(A) {
//    if (document.cookie.length > 0) {
//        begin = document.cookie.indexOf(" " + A + "=");
//        if (begin != -1) {
//            begin += A.length + 2;
//            end = document.cookie.indexOf(";", begin);
//            if (end == -1) {
//                end = document.cookie.length
//            }
//            return unescape(document.cookie.substring(begin, end))
//        } else {
//            begin = document.cookie.indexOf(A + "=");
//            if (begin != -1) {
//                begin += A.length + 1;
//                end = document.cookie.indexOf(";", begin);
//                if (end == -1) {
//                    end = document.cookie.length
//                }
//                return unescape(document.cookie.substring(begin, end))
//            }
//        }
//    }
//    return null
//};
//Star India Constructiongroup.Cookie.remove = function(B) {
//    var A = B + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
//    document.cookie = A
//};
//
//function hideOperainUCWeb() {
//    if (/UCBrowser/i.test(navigator.userAgent)) {
//        if (!!(document.getElementById("operaPromotion"))) {
//            document.getElementById("operaPromotion").style.display = "none"
//        }
//    }
//}
//
//function getcurrentPageName() {
//    if (typeof uriForPage !== "undefined") {
//        if (uriForPage.indexOf("/product/") > -1) {
//            return "ProductPage"
//        } else {
//            if (uriForPage.indexOf("/offers") > -1 && uriForPage.indexOf("/offers/") == -1) {
//                return "OfferPage"
//            } else {
//                if (uriForPage.indexOf("/products/") > -1) {
//                    return "ProductListing"
//                } else {
//                    if (uriForPage == "/" || uriForPage == "") {
//                        return "HomePage"
//                    } else {
//                        if (uriForPage.indexOf("/brand") > -1) {
//                            return "BrandPage"
//                        } else {
//                            if (uriForPage.indexOf("/search") > -1) {
//                                return "SearchPage"
//                            } else {
//                                if (uriForPage.indexOf("/brand") > -1) {
//                                    return "BrandCategoryPage"
//                                } else {
//                                    if (uriForPage.indexOf("/campaign") > -1) {
//                                        return "CampaignPage"
//                                    } else {
//                                        if (uriForPage.indexOf("/myaccount") > -1) {
//                                            return "AccountPage"
//                                        } else {
//                                            return uriForPage.split("/")[1]
//                                        }
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }
//    } else {
//        return "OtherPage"
//    }
//}
//fbData = {};
//meApiFbData = {};
//window.fbLoggedIn = false;
//
///* 
// * 
// * static/js/mobile/pathResolver.js
// * 
// */
//if (typeof Star India Constructiongroup == "undefined") {
//    Star India Constructiongroup = {}
//}
//
//function delete_cookie(A) {
//    document.cookie = A + "=; path=/; domain=.Star India Constructiongroup.com; expires=" + new Date().toUTCString()
//}
//
//function getCookie(B) {
//    var C, A, E, D = document.cookie.split(";");
//    for (C = 0; C < D.length; C++) {
//        A = D[C].substr(0, D[C].indexOf("="));
//        E = D[C].substr(D[C].indexOf("=") + 1);
//        A = A.replace(/^\s+|\s+$/g, "");
//        if (A == B) {
//            return unescape(E)
//        }
//    }
//}
//
//function getParameterByName(B) {
//    var A = B.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//    var D = new RegExp("[\\?&]" + A + "=([^&#]*)"),
//        C = D.exec(location.search);
//    return C === null ? "" : decodeURIComponent(C[1].replace(/\+/g, " "))
//}
//Array.prototype.indexOfObject = function(B, D) {
//    for (var C = 0, A = this.length; C < A; C++) {
//        if (typeof this[C][D] != "undefined" && typeof B != "undefined" && this[C][D].toLowerCase() === B.toLowerCase()) {
//            return C
//        }
//    }
//    return -1
//};
//var enterRecentEntry = function(E) {
//    var B = JSON.parse(Star India Constructiongroup.Cookie.get("recent") || '{"entries":[]}');
//    var F = {
//        key: E,
//        timestamp: (new Date()).getTime()
//    };
//    var C = B.entries.indexOfObject(E, "key");
//    if (C != -1) {
//        B.entries.splice(C, 1, F)
//    } else {
//        B.entries.push(F)
//    }
//    var A = function(H, G) {
//        return (Number(G.timestamp) - Number(H.timestamp))
//    };
//    B.entries.sort(A);
//    B.entries = B.entries.slice(0, 5);
//    var D = JSON.stringify(B);
//    Star India Constructiongroup.Cookie.set("recent", D, false, false, false)
//};
//var getRecentArray = function() {
//    var B = Star India Constructiongroup.Cookie.get("recent");
//    var A = JSON.parse(B) || {
//        entries: []
//    };
//    return A.entries
//};
//var isDirty = false;
//var recentLiTemplate = function(B) {
//    var A = '<li class="ui-menu-item recent" role="presentation"><a href="#" class="ui-corner-all" tabindex="-1"><span class="suggestedText"><b>' + B + "</span></a></li>";
//    return A
//};
//
//
//function setCookie(A, D, B) {
//    var E = new Date();
//    E.setDate(E.getDate() + B);
//    var C = escape(D) + ((B == null) ? "" : "; expires=" + E.toUTCString());
//    document.cookie = A + "=" + C + ";domain=.Star India Constructiongroup.com;path=/"
//}
//
//function showAppNotification(D, E) {
//    if ((D.length > 0) && (!!(E))) {
//        var B = getCookie(E)
//    }
//    if ((!!B)) {
//        var A = 1000 * 60 * 60 * 24;
//        var C = Math.floor(((new Date().getTime()) - parseInt(B)) / A);
//        if (C >= appNotficatnExpiryDays) {
//            D.show()
//        }
//    } else {
//        D.show()
//    }
//}
//
//function hideOperainUCMini() {
//    var A = navigator.userAgent;
//    if (A.indexOf("(X11", "UCBrowser") != -1) {
//        jQuery(".operaPromotion").hide()
//    }
//}
//
//
//function getParameterByName(B) {
//    var A = B.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//    var D = new RegExp("[\\?&]" + A + "=([^&#]*)");
//    var C = D.exec(location.search);
//    return C === null ? "" : decodeURIComponent(C[1].replace(/\+/g, " "))
//}
//
//function redirectToAppIOS() {
//    var H = window.location.href;
//    var F = "";
//    var E = "";
//    var G = false;
//    var C = navigator.userAgent;
//    if (H.indexOf("/product/") > -1) {
//        E = "wap-product";
//        G = true;
//        F = H.substring(H.indexOf("/product/"))
//    } else {
//        if (H.indexOf("/offers") > -1) {
//            E = "wap-offers";
//            G = true;
//            F = "/offers"
//        } else {
//            if (H.indexOf("/products/") > -1) {
//                E = "wap-product-listing";
//                G = true;
//                F = H.substring(H.indexOf("/products/"))
//            } else {
//                if (location.pathname == "/" || H.indexOf("/search") > -1) {
//                    E = "wap-home";
//                    G = true;
//                    F = window.location.search
//                }
//            }
//        }
//    }
//    var D = "Star India Constructiongroup://m.Star India Constructiongroup.com" + F;
//    if (D.indexOf("?") > -1) {
//        D += "&utm_source=" + E
//    } else {
//        D += "?utm_source=" + E
//    }
//    if (getCookie("aff_id") != null) {
//        D = D + "&aff_id=" + getCookie("aff_id") + "&aff_sid1=" + getCookie("aff_sid1") + "&aff_sid2=" + getCookie("aff_sid2")
//    }
//    if (C.match(/iPad/i)) {
//        D.replace("Star India Constructiongroup://", "Star India Constructiongroupipad://")
//    }
//    var A = D.indexOf(";");
//    if (A != -1) {
//        var B = (D.indexOf("?") === -1) ? D.length : D.indexOf("?");
//        D = D.replace(D.substring(A, B), "")
//    }
//    if (G) {
//        window.location = D
//    }
//}
//
//jQuery(window).on("load", function() {
//    
//    var B = function() {};
//    window.setTimeout(B, 3000);
//    var C = navigator.userAgent;
//    var D = window.location.href;
//    if (C.indexOf("Opera Mini") == -1) {
//        var A = getCookie("app_campaignCookie");
//        
//        if( C.match(/Android/i) || C.match(/webOS/i) || C.match(/iPhone/i) || C.match(/iPad/i) || C.match(/iPod/i) || C.match(/BlackBerry/i) || C.match(/Windows Phone/i)){
//            if ((!C.match(/Windows Phone/i) && C.match(/(iPad|iPhone|iPod)/g)) || (jQuery("#app_campaignShow").size() > 0 && (A == undefined || A == null))) {
//                if (!C.match(/Windows Phone/i) && C.match(/(iPad|iPhone|iPod)/g)) {
//                    if (appCampaignIOSSwitch && (location.pathname == "/" || D.indexOf("/products/") > -1 || D.indexOf("/product") > -1 || D.indexOf("/brand/") > -1 || D.indexOf("/offers") > -1 || D.indexOf("/search") > -1 || D.indexOf("/campaign") > -1)) {
//                        modifyCampaignPageIos();
//                        resizeAppcampaignNoti();
//                        jQuery("#app_campaignShow").animate({
//                            top: 0,
//                            bottom: 0
//                        }, 1000)
//                    } else {
//                        if (location.pathname == "/" && (A == undefined || A == null)) {
//                            resizeAppcampaignNoti();
//                            jQuery("#app_campaignShow").animate({
//                                top: 0,
//                                bottom: 0
//                            }, 1000)
//                        } else {
//                            jQuery("#app_campaignShow").hide()
//                        }
//                    }
//                    if (appRedirectSwitch || getParameterByName("viewinapp") == "1") {
//                        if (!(navigator.userAgent.match(/UCBrowser/g)) && (navigator.userAgent.indexOf("Safari") != -1 || navigator.userAgent.indexOf("CriOS") != -1)) {
//                            redirectToAppIOS()
//                        }
//                    }
//                } else {
//                    if (location.pathname == "/") {
//                        resizeAppcampaignNoti();
//                        jQuery("#app_campaignShow").animate({
//                            top: 0,
//                            bottom: 0
//                        }, 1000)
//                    } else {
//                       jQuery("#app_campaignShow").hide()
//                    }
//                }
//            } else {
//                jQuery("#app_campaignShow").hide()
//            }
//        }
//    
//    } else {
//        jQuery("#app_campaignShow").hide()
//    }
//});
//jQuery(window).resize(function() {
//    resizeAppcampaignNoti()
//});
//
//function resizeAppcampaignNoti() {
//    var B = jQuery(".app_campaignModal .imageBlock").height();
//    var A = jQuery(".app_campaignModal .imageBlock").width();
//    if (B < A) {
//        jQuery(".app_campaignModal .imageBlock img").css({
//            height: "100%",
//            width: "auto"
//        })
//    } else {
//        jQuery(".app_campaignModal .imageBlock img").css({
//            height: "auto",
//            width: "100%"
//        })
//    }
//}
//
//function modifyCampaignPageIos() {
//    jQuery(".campaignCross").hide();
//    jQuery(".seeallDetail").closest("div").hide();
//    jQuery(".continueMsite").closest("div").hide();
//}
//
//function hideOperainUCMini() {
//    var A = navigator.userAgent;
//    if (A.indexOf("(X11") != -1) {
//        jQuery(".operaPromotion").hide()
//    }
//};
//
//function swipedetect(C) {
//    var M = C,
//        F, D, I, G, L, K, H = 150,
//        J = 100,
//        B = 300,
//        N, A, E = function(O) {
//            if (O == "left") {
//                jQuery(".view3barLoader").hide();
//                jQuery("#sideMenuContainer").velocity({
//                    left: "-100%",
//                    opacity: 0
//                }, 300).velocity({
//                    opacity: 0.5
//                });
//                jQuery("body").removeClass("noscroll")
//            }
//        };
//    M.addEventListener("touchstart", function(P) {
//        var O = P.changedTouches[0];
//        D = "none";
//        dist = 0;
//        I = O.pageX;
//        G = O.pageY;
//        A = new Date().getTime()
//    }, false);
//    M.addEventListener("touchmove", function(O) {}, false);
//    M.addEventListener("touchend", function(P) {
//        var O = P.changedTouches[0];
//        L = O.pageX - I;
//        K = O.pageY - G;
//        N = new Date().getTime() - A;
//        if (N <= B) {
//            if (Math.abs(L) >= H && Math.abs(K) <= J) {
//                D = (L < 0) ? "left" : "right"
//            } else {
//                if (Math.abs(K) >= H && Math.abs(L) <= J) {
//                    D = (K < 0) ? "up" : "down"
//                }
//            }
//        }
//        E(D)
//    }, false)
//}
//var el = document.getElementById("sideMenuContainer");
//if (el != null && el != undefined) {
//    swipedetect(el)
//};
//Star India Constructiongroup.Personalization = (function() {
//    var J = window.personalizationUrl;
//    var R = "personalization";
//    var F = R + "_iframe";
//    var P = "eventJson";
//    var N = R + "_form";
//    var A = R + "_input";
//    var T = false;
//    var G = ["WEB", "WAP", "APP"];
//    var I = {
//        uid: null,
//        timestamp: new Date().toISOString(),
//        eventType: null,
//        uidType: null
//    };
//    var H = function(U) {
//        if (!!(U)) {
//            I.uid = U
//        }
//    };
//    var M = function(U) {
//        if (G.indexOf(U) > -1) {
//            I.uidType = U
//        }
//    };
//    var C = function(U) {
//        if (T) {
//            I.email = U
//        }
//    };
//    var E = function(U) {
//        if (typeof(U) === "boolean") {
//            T = U
//        }
//    };
//    var Q = function(U) {
//        if (typeof(U) == "function") {
//            U()
//        }
//    };
//    var L = function(U) {
//        try {
//            var W, X, V;
//            var a = Date.now();
//            var Z = "personalization_" + a;
//            W = document.createElement("iframe");
//            document.body.appendChild(W);
//            W.style.display = "none";
//            W.contentWindow.name = Z;
//            W.id = F + a;
//            X = document.createElement("form");
//            X.target = Z;
//            X.action = J;
//            X.method = "GET";
//            X.id = N + a;
//            V = document.createElement("input");
//            V.type = "hidden";
//            V.name = P;
//            V.id = A + a;
//            V.value = JSON.stringify(U);
//            X.appendChild(V);
//            document.body.appendChild(X);
//            X.submit()
//        } catch (Y) {
//            return true
//        }
//    };
//    var D = function(V) {
//        for (var U in V) {
//            if (V[U] === null || V[U] === "") {
//                return false
//            }
//        }
//        return true
//    };
//    var S = function() {
//        var W = arguments.length;
//        for (var V = 1; V < W; V++) {
//            for (var U in arguments[V]) {
//                if (arguments[V].hasOwnProperty(U)) {
//                    arguments[0][U] = arguments[V][U]
//                }
//            }
//        }
//        return arguments[0]
//    };
//    var B = function(U) {
//        try {
//            var V = S({}, I, U);
//            if (D(V)) {
//                L(V)
//            }
//        } catch (W) {
//            return true
//        }
//        return true
//    };
//    var K = function(W) {
//        var U = {};
//        for (var V in W) {
//            U[V] = W[V]
//        }
//        B(U)
//    };
//    var O = function() {
//        var V = document.referrer;
//        var W;
//        if (!V) {
//            return "direct"
//        } else {
//            if (V.toLowerCase().indexOf("Star India Constructiongroup") == -1) {
//                return "external"
//            }
//        }
//        var U = V.split("/")[3];
//        if (U && U.indexOf("?") > -1) {
//            U = U.split("?")[0]
//        }
//        switch (U) {
//            case "":
//            case undefined:
//                W = "homepage";
//                break;
//            case "products":
//                W = "categorypage";
//                break;
//            case "product":
//                W = "productpage";
//                break;
//            case "brand":
//                W = "brandpage";
//                break;
//            case "offers":
//                W = "promotion";
//                break;
//            case "seller":
//                W = "sellerpage";
//                break;
//            case "search":
//                W = "search";
//                break;
//            default:
//                W = U;
//                break
//        }
//        return W
//    };
//    return {
//        init: Q,
//        setUidType: M,
//        setUid: H,
//        setEmail: C,
//        setEventData: K,
//        setLoginStatus: E,
//        getSource: O
//    }
//})();
//jQuery(function() {
//    Star India Constructiongroup.Utils = Star India Constructiongroup.Utils || {};
//    Star India Constructiongroup.Utils.getHashParamValue = function(G) {
//        var E = window.location.hash.substring(1);
//        var D = E.split("&");
//        var F;
//        for (var C = 0; C < D.length; C++) {
//            F = D[C].split("=");
//            if (F[0] == G) {
//                return F[1]
//            }
//        }
//    };
//    Star India Constructiongroup.Utils.getSearchParamValue = function(G) {
//        var E = window.location.search.substring(1);
//        var D = E.split("&");
//        var F;
//        for (var C = 0; C < D.length; C++) {
//            F = D[C].split("=");
//            if (F[0] == G) {
//                return F[1]
//            }
//        }
//    };
//    if (!!window.personalizationSwitch) {
//        Star India Constructiongroup.Personalization.init(B)
//    }
//
//    function B() {
//        jQuery(".personalization").on("dataLog", function(H, G) {
//            Star India Constructiongroup.Personalization.setEventData(G)
//        });
//        jQuery(".personalization").on("ajaxLoginStatus", A);
//        var E = (Star India Constructiongroup.Cookie.get("u")) ? Star India Constructiongroup.Cookie.get("u") : null;
//        var D = (Star India Constructiongroup.Cookie.get("eid")) ? Star India Constructiongroup.Cookie.get("eid").replace(/"/g, "") : undefined;
//        var C = window.location.hash.substring(1);
//        var F = window.location.search.substring(1);
//        Star India Constructiongroup.Personalization.setUid(E);
//        Star India Constructiongroup.Personalization.setUidType("WAP");
//        if (C.indexOf("_=_") > -1 || F.indexOf("loginSuccess") > -1) {
//            jQuery(".personalization").trigger("dataLog", {
//                eventType: "Login",
//                email: D
//            })
//        } else {
//            if (C.indexOf("logoutSuccess") > -1) {
//                jQuery(".personalization").trigger("dataLog", {
//                    eventType: "Logout",
//                    email: D
//                })
//            }
//        }
//    }
//});
///* 
// * 
// * static/js/jquery/mobileviews/deferLoadExternalScripts.js
// *   
// */
// 
//jQuery(document).ready(function() {
//    
//    //getTrackingParams();
//    //setAffaliatCookie();
//    var C = navigator.userAgent;
//    if (C.indexOf("Opera Mini") != -1 || C.indexOf("mini/UC") != -1) {
//        jQuery("#sideBarIcon").hide()
//    }
//    var K = true;
//    if ((typeof ignoreAppDownloadUserAgents !== "undefined") && !! ignoreAppDownloadUserAgents) {
//        $.each(ignoreAppDownloadUserAgents, function(P, Q) {
//            if (C.toLowerCase().indexOf(Q.toLowerCase()) != -1) {
//                K = false
//            }
//        })
//    }
//    hideOperainUCMini();
//    var C = navigator.userAgent;
//    if ( !! (C)) {
//        if (C.match(/Android/i) || C.match(/Windows Phone/i) || C.match(/iPhone|iPad|iPod/i)) {
//            if (K) {
//                showAppNotification(jQuery("#android-notification-outer"), "app-andn-time")
//            }
//        } else {}
//    }
//    
//    jQuery(".app_campaignModal .continueMsite,.app_campaignModal .campaignCross, .app_campaignModal .seeallDetail, .app_campaignModal .appdownloadCampaign").click(function() {
//        jQuery("#app_campaignShow").animate({
//            top: "100%",
//            bottom: "-100%"
//        }, 1000);
//        var P = getCookie("app_campaignCookie");
//        if (P == null || P == undefined) {
//            var Q = new Date();
//            var R = Q.getTime();
//            R += 24 * 3600 * 1000;
//            Q.setTime(R);
//            document.cookie = "app_campaignCookie=app_campaignCookie; path =/;expires=" + Q.toGMTString()
//        }
//        jQuery("#app_campaignShow").hide()
//    });
//    
//    if (navigator.userAgent.indexOf("Opera Mini") == -1) {
//        var D = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g));
//        if (getParameterByName("viewinapp") == "1" && !D) {
//            N()
//        }
//    }
//
//    function G() {
//        return document.webkitHidden !== undefined ? !document.webkitHidden : document.hidden !== undefined ? !document.hidden : !0
//    }
//
//    function A(P, R) {
//        d = +(new Date);
//        F(R);
//        if (!(navigator.userAgent.match(/Chrome\/(19|[2-9]\d|\d{3,})/g)) || navigator.userAgent.match(/Opera|OPR\//)) {
//            if (!(navigator.userAgent.match(/UCBrowser/g))) {
//                var Q = true && setTimeout(function() {
//                    var S = +(new Date) - d > 5 * L;
//                    G() && !S && (window.location = P)
//                }, L)
//            } else {
//                if (navigator.userAgent.match(/UCBrowser/g)) {
//                    window.location = P
//                }
//            }
//        }
//    }
//
//    function F(P) {
//        if (navigator.userAgent.match(/Chrome\/(19|[2-9]\d|\d{3,})/g) && !(navigator.userAgent.match(/Opera|OPR\//))) {
//            window.location = "intent://" + P.replace("snapdeal://", "") + "/#Intent;package=com.snapdeal.main;scheme=snapdeal;action=android.intent.action.VIEW;category=android.intent.category.DEFAULT;end"
//        } else {
//            if (!(navigator.userAgent.match(/UCBrowser/g))) {
//                J()
//            } else {
//                if (navigator.userAgent.match(/UCBrowser/g)) {
//                    window.location = "http://m.snapdeal.com/apps/download"
//                }
//            }
//        }
//    }
//
//    function J() {
//        var P = document.createElement("iframe");
//        P.style.border = "none";
//        P.style.width = "1px";
//        P.style.height = "1px";
//        P.src = H;
//        jQuery("body").append(P)
//    }
//
//    function N() {
//        if (getCookie("aff_id") != null) {
//            H = H + "&aff_id=" + getCookie("aff_id") + "&aff_sid1=" + getCookie("aff_sid1") + "&aff_sid2=" + getCookie("aff_sid2")
//        }
//        if ( !! (C)) {
//            if (C.match(/Android/i)) {
//                A("http://m.snapdeal.com/apps/download", H)
//            } else {
//                if (C.match(/iPhone|iPad|iPod/i)) {
//                    if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("CriOS") == -1) {
//                        if (window.screen.height == 480) {
//                            document.location = B
//                        }
//                    } else {
//                        if (navigator.userAgent.indexOf("CriOS") != -1) {
//                            document.location = B
//                        } else {
//                            document.location = B
//                        }
//                    }
//                } else {
//                    if (C.match(/Windows Phone/i)) {
//                        window.location = "http://m.snapdeal.com/apps/download "
//                    }
//                }
//            }
//        }
//    }
//    
//});