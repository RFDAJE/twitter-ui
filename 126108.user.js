// ==UserScript==
// @name twitter-ui
// @namespace http://naonie.com/projects/twitter-ui.html
// @description customize 2012 new twitter ui
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @include https://twitter.com/*
// @version 0.1.1
// ==/UserScript==

var TwitterUi = {
    init: function() {
        var actions = [
                [
                    [this.se["head_actions"], this.se["meta"],
                     this.se["whotofollow"], this.se["trend"],
                     this.se["site_footer"], this.se["fullname"],
                     this.se["at_username"], this.se["item_footer"],
                     this.se["open_close"], this.se["action_label"]],
                    [this.st["hide"]]
                ],
                [
                    [this.se["head_time"]],
                    [this.st["op100"]]
                ],
                [
                    [this.se["opened_time"]],
                    [this.st["show"]]
                ],
                [
                    [this.se["username"]],
                    [this.st["color333"], this.st["bold"], this.st["f14"]]
                ],
                [
                    [this.se["tweet_text"]],
                    [this.st["f16"], this.st["lhigh"]]
                ],
                [
                    [this.se["reply_action"]],
                    [this.st["rpad35"]]
                ],
                [
                    [this.se["dash_module"]],
                    [this.st["no_border"]]
                ],
            ],
            i,
            len = actions.length;

        for (i = 0; i < len; i++) {
            GM_addStyle(this.format_css(actions[i]));
        }
    },

    se: {
        "head_actions": ".stream-item-header .actions",
        "head_time": ".tweet:hover .time",
        "opened_time": ".opened-tweet .time",
        "meta": ".metadata", // detailed time, client name, detail link
        "dash": ".dashboard",
        "whotofollow": ".component > .module",
        "trend": ".component > .trends-inner",
        "site_footer": ".component > .site-footer",
        "item_footer": ".stream-item-footer",
        "fullname": ".fullname",
        "username": ".username b",
        "at_username": ".username s",
        "tweet_text": ".js-tweet-text",
        "open_close": ".js-open-close-tweet",
        "reply_action": ".stream-item-header .actions",
        "action_label": ".opened-tweet.original-tweet .actions b",
        "dash_module": ".module",
    },

    st: {
        "hide": "display:none;",
        "show": "display:block;",
        "op100": "opacity:100;",
        "color333": "color:#333333;",
        "bold": "font-weight:bold;",
        "f14": "font-size:14px;",
        "f16": "font-size:16px;",
        "lhigh": "line-height: 1.4",
        "rpad35": "padding-right: 35px",
        "no_border": "border: 1px none",
    },

    format_styles: function (styles) {
        return styles.join("");
    },

    format_selectors: function (selectors) {
        return selectors.join(",");
    },

    format_css: function(action) {
        var selectors = action[0],
            styles = action[1]
            css = [this.format_selectors(selectors), "{",
                   this.format_styles(styles), "}"].join("");
        return css;
    }

};

TwitterUi.init();
